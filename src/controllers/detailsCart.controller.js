const { User, DetailsCart } = require('../database/models/index');
const sequelize = require('sequelize');

// Create a Cart and DetailCart
const createDetailsCart = async (req, res) => {

  // get values on body request.
  const arrayDataProducts = req.body.arrayProducts
  const cartId = req.body.cartId

  console.log(arrayDataProducts)

  if (arrayDataProducts && arrayDataProducts.length) {
    arrayDataProducts.map((item) => {
      // create a new DetailCart
      DetailsCart.create({

        cartId: cartId,
        productsId: item.productsId,
        quantityProduct: item.quantityProduct

      }).then((detailsCart) => {
        return res.status(200).json({ status: 200, msg: "Create Cart Successeful!!", detailsCart });
      })
        .catch((error) => {
          // Create Profile error.
          return res.status(400).json({ status: 400, msg: error });
        });
    })
  }

  // if (arrayDataProducts) {
  //   // create a new DetailCart
  //   DetailsCart.create({

  //   }).then((detailsCart) => {
  //     return res.status(200).json({ status: 200, msg: "Create Cart Successeful!!", detailsCart });
  //   })
  //     .catch((error) => {
  //       // Create Profile error.
  //       return res.status(400).json({ status: 400, msg: error });
  //     });
  // }
}

module.exports = {

  createDetailsCart

}
