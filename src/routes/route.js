const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const loginController = require("../controllers/loginController")
const userdataController = require('../controllers/userdataController')
const auths = require('../middleware/auth')

router.post("/users", userController.createUser  )

router.post("/login", loginController.login)

router.get('/users/:userId',auths.auth, userdataController.getFetch)

router.put('/users/:userId',auths.auth, userdataController.getUpdate)

router.delete('/users/:userId',auths.auth, userdataController.getDelete)

module.exports = router;