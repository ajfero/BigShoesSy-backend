const { User } = require('../database/models/index');
const sequelize = require('sequelize');

const findAll = async (req, res) => {
  try {
    let users = await User.findAll({ order: sequelize.literal('updatedAt DESC') });
    return res.json(users)
  } catch (error) {
    return res.status(400).json({ status: 400, error })
  }
};

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

// Middlewares
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

module.exports = {
  findAll,
  find,
  isExist
}
