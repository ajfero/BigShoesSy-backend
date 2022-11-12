const { User, DetailsCart } = require('../database/models/index');
const sequelize = require('sequelize');

// Create DetailsCart
const createDetailsCart = async (req, res) => {

  // Get values on body request.
  const arrayDataProducts = req.body.arrayProducts
  const cartId = req.body.cartId // this cartId is anited by the cartsController
  console.log(arrayDataProducts)

  // Verify and create if the array is full
  if (arrayDataProducts && arrayDataProducts.length) {
    arrayDataProducts.map((item) => {
      console.log(item.productsId)

      // Create a new DetailsCart
      DetailsCart.create({

        cartId: cartId,
        productsId: item.productsId,
        quantityProduct: item.quantityProduct

      }).then((detailsCart) => {
        return res.status(200).json({ status: 200, msg: "Create Cart Successeful!!", detailsCart }); // response with detaisCart
      })
        .catch((error) => {
          return res.status(400).json({ status: 400, msg: error });
        });
    })
  }

}

module.exports = {

  createDetailsCart

}
