const { User, DetailsCart } = require('../database/models/index');
const sequelize = require('sequelize');

// Create a Cart and DetailCart
// const createDetailsCart = async (req, res) => {

//   // get values on body request.
//   const { productsId, quantityProduct } = req.body
//   console.log(cartId)

//   // create a new DetailCart
//   DetailsCart.create({

//     productsId: productsId,
//     quantityProduct: quantityProduct

//   }).then((detailsCart) => {
//     // return res.status(200).json({ status: 200, msg: "Create Cart Successeful!!", detailsCart });
//   })
//     .catch((error) => {
//       // Create Profile error.
//       return res.status(400).json({ status: 400, msg: error });
//     });

// }

module.exports = {

  // createDetailsCart

}
