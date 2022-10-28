const { User } = require('../database/models/index');

//API

const update = async (req, res) => {
  const { name, email, phone, cuit, localidad, provincia } = req.body
  let user = await User.findByPk(req.params.id);
  if (user.email != email) {
    let mailCheck = await User.findOne({ where: { email: email } });
    if (user) {
      if (!mailCheck) {
        user.name = name;
        user.email = email;
        user.phone = phone;
        user.cuit = cuit;
        user.localidad = localidad;
        user.provincia = provincia;

        user.save().then(user => {
          res.status(201).json({ status: 201, user })
        })
      } else {
        return res.status(400).json({ status: 400, msg: "Ya existe un usuario con ese correo" })
      }
    } else {
      res.status(201).json({ status: 201, user })
      return res.status(404).json({ status: 404, msg: "Usuario no encontrado" })
    }
  } else {
    if (user) {
      user.name = name;
      user.phone = phone;
      user.cuit = cuit;
      user.localidad = localidad;
      user.provincia = provincia;

      user.save().then(user => {
        res.status(201).json({ status: 201, user })
      })
    } else {
      res.status(201).json({ status: 201, user })
      return res.status(404).json({ status: 404, msg: "Usuario no encontrado" })
    }
  }
};

module.exports = {
  update
}