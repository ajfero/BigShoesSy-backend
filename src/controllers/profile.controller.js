const { Profile, User } = require('../database/models/index');
const sequelize = require('sequelize');

// Create after register a newProfile for an user.
const createProfile = async (req, res) => {

  // get values on body request.
  const { userId, name, lastname, phone, imgUrl, socialRed } = req.body
  console.log(userId)

  // create a new Profile
  Profile.create({

    userId: userId,
    name: name,
    lastname: lastname,
    phone: phone,
    imgUrl: imgUrl,
    socialRed: socialRed,
    role: 'user'

  }).then((profile) => {
    return res.status(200).json({ status: 200, msg: "Created User Successeful!!", profile });
  })
    .catch((error) => {
      // Create Profile error.
      return res.status(400).json({ status: 400, msg: error });
    });

}

// Get and return all usersProfiles
const getAllProfile = async (req, res) => {
  try {
    let profile = await Profile.findAll({ order: sequelize.literal('updatedAt DESC') });
    return res.json(profile)
  } catch (error) {
    return res.status(400).json({ status: 400, error })
  }
};

// Get and return an userProfile
const getProfile = async (req, res) => {

  try {
    // let profile = await Profile.findByPk(req.params.id);

    let profile = await Profile.findOne({
      where: {
        userId: req.params.id
      },
      attributes: [
        'id',
        'name',
        'lastname',
        'phone',
        'imgUrl',
        'socialRed',
        'role'
      ],
      include: {
        model: User,
        where: {
          id: req.params.id
        },
      },
    });

    if (profile) {
      return res.status(200).json(profile)
    } else {
      return res.status(404).json({ status: 404, msg: "Profile not fount" })
    }
  } catch (error) {
    return res.status(400).json({ status: 400, error })
  }

};

// Update a Profile of user.
const updateProfile = async (req, res) => {

  // get values on body request.
  const { userId, name, lastname, phone, imgUrl, socialRed } = req.body
  console.log(userId)

  let profile = await Profile.findOne({
    where: {
      userId: req.params.id
    }
  });

  // create a new Profile
  profile.set({

    name: name,
    lastname: lastname,
    phone: phone,
    imgUrl: imgUrl,
    socialRed: socialRed,
  })
  profile.save().then((profile) => {
    return res.status(200).json({ status: 200, msg: "Update User Successeful!!", profile });
  })
    .catch((error) => {
      // Create Profile error.
      return res.status(400).json({ status: 400, msg: error });
    });
}

module.exports = {

  createProfile,
  getAllProfile,
  getProfile,
  updateProfile

}