const sequelize = require('sequelize');

// Models
const { User, Cart } = require('../database/models/index');
const { DetailsCart } = require('../database/models/DetailsCart');

// Create a Cart
const createCart = async (req, res, next) => {

  try {

    let userId = req.params.id
    const cart = await Cart.findOne({ where: { userId: userId } });

    // create cart if  isn't exist.
    if (!cart) {

      // Get values on body request.
      const { status } = req.body
      Cart.create({
        userId: userId,
        status: status
      }).then((cart) => {

        // Get cartId of the database and into in the request
        const cartId = cart.dataValues.id
        console.log(cartId)
        req.body.cartId = cartId
        next()

      })
        .catch((error) => {
          return res.status(400).json({ status: 400, msg: error });
        });

      // update cart if exist.
    } else {

      const cartId = cart.dataValues.id
      console.log(cartId)
      req.body.cartId = cartId
      console.log('Cart found! updating...');
      next()

    }
  } catch (error) {
    return res.status(400).json({ status: 400, error })
  }

}

// Get a Cart

module.exports = {

  createCart,
  // getCart

}

