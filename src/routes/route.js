const express = require('express');
const router = express.Router();
const UserController= require("../controllers/userController")
const OrderController = require('../controllers/orderController')
const ProductController = require('../controllers/productController')
const middleware = require('../middlewares/middlewareuserorder')


router.post("/createUser", middleware.userorder,  UserController.createUser)

router.post('/createOrder',middleware.userorder, OrderController.createOrder)

router.post('/createProduct', ProductController.createProduct)

module.exports = router;