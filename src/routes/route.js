const express = require('express');
const router = express.Router();
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const commonMW = require ("../middlewares/commonMiddlewares")


router.post("/createBook",commonMW.mid1 ,BookController.createBook  )

router.get("/basicRoute", commonMW.mid2, UserController.basicCode)

router.get('/newbookfetch',commonMW.mid3,commonMW.mid4, UserController.basicCode)

module.exports = router;