const { Profile } = require('../database/models/index');
// const sequelize = require('sequelize');

const getProfile = async (req, res) => {
  try {
    let profile = await Profile.findByPk(req.params.id);

    if (profile) {
      return res.status(200).json(profile)
    } else {
      return res.status(404).json({ status: 404, msg: "Profile not fount" })
    }
  } catch (error) {
    return res.status(400).json({ status: 400, error })
  }
};

// Create Message from "ContactUs"
const updateProfile = async (req, res) => {
  //Se obtienen los valores
  const { userId, name, lastName, phone, imgUrl, socialRed } = req.body

  // Crear Message
  Profile.save({
    // Asignamos los valores
    userId: userId,
    name: name,
    lastName: lastName,
    phone: phone,
    imgUrl: imgUrl,
    socialRed: socialRed,
    role: 'user'

  }).then((message) => {
    res.status(200).json({ status: 200, msg: "Usuario creado correctamente", message });
  })
    .catch((error) => {
      //Error al crear usuario
      res.status(400).json({ status: 400, msg: error });
    });
};

module.exports = {
  getProfile,
  updateProfile
}