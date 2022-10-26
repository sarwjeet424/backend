const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

//.........................Assignment Date 25-10-2022............................//

// 1.
router.post("/createBook", BookController.createBook  )

router.get("/getBooksData", BookController.getBooksData )

// 2.

router.get("/getBookList", BookController.getBooksList )

// 3.

router.post("/getBooksInYear",BookController.getBooksInYear )

// 4.

router.get("/getParticularBooks",BookController.getParticularBooks )

// 5.

router.get("/getXINRBooks",BookController.getXINRBooks )

// 6.

router.get("/getRandomBooks",BookController.getRandomBooks  )


module.exports = router;