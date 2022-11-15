const { User } = require('../database/models/index');
const sequelize = require('sequelize');

// Find all Users
const findAll = async (req, res) => {
  try {
    let users = await User.findAll({ order: sequelize.literal('updatedAt DESC') });
    return res.json(users)
  } catch (error) {
    return res.status(400).json({ status: 400, error })
  }
};

// Find an User
const find = async (req, res) => {

  try {
    let user = await User.findByPk(req.params.id);

    if (user) {
      return res.status(200).json(user)
    } else {
      return res.status(404).json({ status: 404, msg: "usuario no encontrada" })
    }
  } catch (error) {
    return res.status(400).json({ status: 400, error })
  }

};

// Verify if User exist
const isExist = async (req, res, next) => {
  try {
    let user = await User.findByPk(req.params.id);

    if (user) {
      req.user = user.dataValues
      return next()
    } else {
      return res.status(404).json({ status: 404, msg: "usuario no encontrada" })
    }
  } catch (error) {
    return res.status(400).json({ status: 400, error })
  }
};

// Update an user exist.
const updateUser = async (req, res) => {

  // get values on body request.
  const { email } = req.body
  // console.log(userId)

  let user = await User.findOne({
    where: {
      id: req.params.id
    }
  });

  // create a new Profile
  user.set({
    email: email,
  })
  user.save().then((user) => {
    return res.status(200).json({ status: 200, msg: "Update User Successeful!!", user });
  })
    .catch((error) => {
      // Create Profile error.
      return res.status(400).json({ status: 400, msg: error });
    });
}

// Delete an user exist.
const deleteUser = async (req, res) => {

  // get values on body request for seatch user into DB
  const { email } = req.body
  const { id } = req.params
  // console.log(id)
  let user = await User.findOne({
    where: {
      id: id,
      email: email
    }
  });

  // Delete User
  if (user) {
    user.destroy()
    user.save().then(() => {
      return res.status(200).json({ status: 200, msg: "Delete User Successeful!!" });
    })
      .catch((error) => {
        return res.status(400).json({ status: 400, msg: error });
      });
  } else {
    return res.status(400).json({ status: 400, msg: 'User NotFound' });
  }
}

module.exports = {

  findAll,
  find,
  isExist,
  updateUser,
  deleteUser

}
