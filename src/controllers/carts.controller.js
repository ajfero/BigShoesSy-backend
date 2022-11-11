const { User, Cart } = require('../database/models/index');
const sequelize = require('sequelize');
const DetailsCart = require('../database/models/DetailsCart');

// Create a Cart and DetailCart
const createCart = async (req, res, next) => {
  try {
    let userId = req.params.id
    const cart = await Cart.findOne({ where: { userId: userId } });

    if (!cart) {
      // get values on body request.
      const { status } = req.body
      Cart.create({
        userId: userId,
        status: status
      }).then((cart) => {
        // get cartId into body request
        const cartId = cart.dataValues.id
        console.log(cartId)
        req.body.cartId = cartId

        // return res.status(200).json({ status: 200, msg: "Create Cart Successeful!!", cart });
        next()

      })
        .catch((error) => {
          // Create Cart error.
          return res.status(400).json({ status: 400, msg: error });
        });

    } else {
      const cartId = cart.dataValues.id
      console.log(cartId)
      req.body.cartId = cartId
      console.log('Cart found! updating...');
      // return res.status(404).json({ status: 404, msg: "Carrrito no actualizado" })
      next()

    }
  } catch (error) {
    return res.status(400).json({ status: 400, error })
  }

}

// Update a Profile of user.
// const updateCart = async (req, res) => {

//   // get values on body request.

//   let detailsCart = await DetailsCart.findOne({
//     where: {
//       userId: req.params.id
//     }
//   });
//   // console.log(userId)

//   // create a new Profile
//   profile.set({

//     name: name,
//     lastname: lastname,
//     phone: phone,
//     imgUrl: imgUrl,
//     socialRed: socialRed,
//   })
//   profile.save().then((profile) => {
//     return res.status(200).json({ status: 200, msg: "Update User Successeful!!", profile });
//   })
//     .catch((error) => {
//       // Create Profile error.
//       return res.status(400).json({ status: 400, msg: error });
//     });
// }

// Get and return an userProfile
// const getCart = async (req, res) => {

//   try {
//     let cart = await Cart.findOne({
//       where: {
//         userId: req.params.id
//       },
//       attributes: [
//         'id',
//         'detailSCart',
//         {
//           include: {
//             model: DetailsCart,
//             where: {
//               cartId: cartId
//             },
//           },
//         },
//         'phone',
//         'imgUrl',
//         'socialRed',
//         'role'
//       ],
//       include: {
//         model: User,
//         where: {
//           id: req.params.id
//         },
//         attributes: [
//           'id',
//           'email',
//         ],
//       },
//     });

//     if (profile) {
//       return res.status(200).json(profile)
//     } else {
//       return res.status(404).json({ status: 404, msg: "Profile not fount" })
//     }
//   } catch (error) {
//     return res.status(400).json({ status: 400, error })
//   }

// };

module.exports = {

  createCart,
  // updateCart,
  // getCart

}
