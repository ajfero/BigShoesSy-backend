const { Profile } = require('../database/models/index');
const sequelize = require('sequelize');

// Get and return a userProfile
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

// Create after register a newProfile for user.
const createProfile = async (req, res) => {

  // get values on body request.
  const { userId, name, lastName, phone, imgUrl, socialRed } = req.body
  console.log(userId)

  // create a new Profile
  Profile.create({

    userId: userId,
    name: name,
    lastName: lastName,
    phone: phone,
    imgUrl: imgUrl,
    socialRed: socialRed,
    role: 'user'

  }).then((profile) => {
    return res.status(200).json({ status: 200, msg: "User & userProfile creado correctamente", profile });
  })
    .catch((error) => {
      // Create Profile error.
      return res.status(400).json({ status: 400, msg: error });
    });

}
// Update a Profile of user.
const updateProfile = async (req, res) => {

  // get values on body request.
  const { userId, name, lastName, phone, imgUrl, socialRed } = req.body
  console.log(userId)

  // create a new Profile
  Profile.create({

    userId: userId,
    name: name,
    lastName: lastName,
    phone: phone,
    imgUrl: imgUrl,
    socialRed: socialRed,
    role: 'user'

  }).then((profile) => {
    return res.status(200).json({ status: 200, msg: "User & userProfile creado correctamente", profile });
  })
    .catch((error) => {
      // Create Profile error.
      return res.status(400).json({ status: 400, msg: error });
    });

}

module.exports = {
  getProfile,
  createProfile,
  updateProfile
}