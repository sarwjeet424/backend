const { count } = require("console")
const AuthorModel= require("../models/authorModel")
const bookModel = require("../models/bookModel")

// 1.

const createAuthor = async function (req,res){

    let data= req.body
    let createall= await AuthorModel.create(data)
    res.send(createall)

}

// 2.

const findAuthor =async function (req,res){

    let findAuthor = await AuthorModel.findOne({author_name:"Chetan Bhagat"})
    if(findAuthor.author_name=="Chetan Bhagat"){
        var authorid = findAuthor.author_id
    }

    let findBook =await bookModel.find({author_id:authorid})
    res.send({msg:findBook})
}

module.exports.createAuthor= createAuthor
module.exports.findAuthor= findAuthor

