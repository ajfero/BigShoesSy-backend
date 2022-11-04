require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { promisify } = require("util");
const { isJwtExpired } = require("jwt-check-expiration");

// Models
const { User } = require("../database/models/index");

const register = async (req, res) => {
  // Get email from body.
  let email = req.body.email;

  // Encrypt password
  const password = await bcrypt.hash(req.body.password, 10);

  // CREATE new user.
  User.create({
    email,
    password,
  }).then((user) => {
    res.status(200).json({ status: 200, msg: "Usuario creado correctamente", user });
  })
    .catch((error) => {
      //Error al crear usuario
      res.status(400).json({ status: 400, msg: error });
    })
};

// Auth
const logIn = async (req, res) => {
  const { email, password } = req.body;

  //Comprobar email en DB
  User.findOne({
    where: { email: email },
  })
    .then((user) => {
      //Email invalido
      if (!user) {
        res.status(404).json({ msg: "Email invalido" });
      }

      //Them Email ok
      else if (bcrypt.compareSync(password, user.password)) {

        //Seteo un Token
        let token = jwt.sign(
          {
            id: user.id,
            email: user.email
          },
          process.env.ACCESS_TOKEN_SECRET,
          { expiresIn: process.env.TOKEN_EXPIRES || "8h" }
        );

        //Refresco el Token
        let refreshToken = jwt.sign(
          {
            id: user.id,
            email: user.email
          },
          process.env.REFRESH_TOKEN_SECRET,
          { expiresIn: process.env.TOKEN_EXPIRES || "8h" }
        );
        user.refreshToken = refreshToken;

        //Actualizo el token anterior
        try {
          User.update(
            { refreshToken: refreshToken },
            {
              where: {
                id: user.id,
              },
            }
          );
        } catch (error) {
          return res
            .status(401)
            .json({ msg: "Algo ha fallado update!", error });
        }
        return res.status(200).json({ user, token });

      }

      //Acceso denegado - Usuario y/o contraseña invalidos
      else {
        return res
          .status(401)
          .json({ msg: "Usuario y/o contraseña incorrecta" });
      }

    })

    //Login Error
    .catch((error) => {
      //Fallo al buscar el email en la base de datos
      return res.status(400).json('email db error', error);
    });

};

const changePassword = async (req, res) => {
  let { password } = req.body;
  password = await bcrypt.hash(password, 10);
  const jwt_cookie = req.cookies.jwt;
  console.log(jwt.verify(jwt_cookie, process.env.ACCESS_TOKEN_SECRET));
  //Buscar usuario por resetToken
  try {
    const verifyResult = jwt.verify(
      jwt_cookie,
      process.env.ACCESS_TOKEN_SECRET
    );
    const { email } = verifyResult;
    user = await User.findOne({
      where: {
        email: email,
      },
    });
    if (user) {
      try {
        //Si se encontro, cambiar clave en la DB
        await User.update(
          { password: password },
          {
            where: {
              id: user.id,
            },
          }
        );
      } catch (error) {
        return res.status(401).json({ msg: "Algo ha fallado!", error });
      }
      return res
        .status(201)
        .json({ status: "201", msg: "Contraseña cambiada correctamente" });
    } else {
      return res
        .status(400)
        .json({ status: "400", msg: "Usuario no encontrado" });
    }
  } catch (error) {
    return res.status(401).json({ msg: "Algo ha fallado jwt!", error });
  }
};

const isAuthenticated = async (req, res, next) => {

  //Comprobar si existe el token y si esta expirado
  try {
    //Si en el header tenemos la authoization
    if (req.headers['authorization'] && !isJwtExpired(req.headers['authorization'])) {
      let cadena = req.headers['authorization'];
      let result = cadena.includes('Bearer');
      if (result) {
        cadena = cadena.substr(7, cadena.length);
      }

      //Leer el token
      const decodificada = await promisify(jwt.verify)(cadena, process.env.ACCESS_TOKEN_SECRET)
      //Buscar el usuario por el correo
      const datos = await User.findOne({
        where: {
          email: decodificada.email
        }
      })
      // Si no ese encuentra un
      if (!datos) {
        res.status(500).json({ msg: 'Ha ocurrido un problema al decodificar el token' })
      } else {
        User.findByPk(datos.dataValues.id).then(user => {
          //Guardo los datos del usuario para la sesion
          req.user = { id: user.id, name: user.name, email: user.email, role: user.role },
            next();
        })
      }
    }

    else {
      res.status(401).json({ msg: "Debe iniciar sesión para continuar" })
    }
  } catch (err) {
    res.status(500).json(err.message)
  }
};

const logOut = async (req, res, next) => {
  //Eliminar cookie jwt
  res.clearCookie("jwt");
};

module.exports = {
  isAuthenticated,
  register,
  logIn,
  logOut,
  changePassword,
};
