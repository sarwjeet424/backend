const express = require('express');
const router = express.Router();
const UserModel= require("../models/bookModel.js")
const UserController= require("../controllers/bookController")


router.post("/createBook", UserController.createBook  )

router.get("/getBooksData", UserController.getBooksData)

module.exports = router;