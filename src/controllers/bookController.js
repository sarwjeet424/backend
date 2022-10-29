const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/publisherModel")

// 3.

const createBook= async function (req, res) {
    let book = req.body
    let count=0
    let count1=0
    if(!book.author){
        console.log("Please give the authorId")
       return res.send("Please give the authorId")
    }else if(!book.publisher){
        console.log("Please give the publisherId")
       return res.send("Please give the publisherId")
    }


    let authordata =await authorModel.find()
    authordata.forEach(dat =>{
        if(dat._id==book.author){
            count++
        }
    })

    let publisherdata = await publisherModel.find()
    publisherdata.forEach(dat =>{
        if(dat._id==book.publisher){
            count1++
        }
    })

    if(count>0 && count1>0){
        let bookCreated = await bookModel.create(book)
        return res.send({data: bookCreated})
    }else if(count1==0 && count>0){
        console.log("Publisher is not present of this Id")
        return res.send("Publisher is not present of this Id")
    }
    else if(count==0 && count1>0){
        console.log("Author is not present of this Id")
        return res.send("Author is not present of this Id")
    }else{
        console.log("Author and Pushlisher is not present of this Id")
        return res.send("Author and Pushlisher is not present of this Id")
    }

}

// 4.

const getBooksData= async function (req, res) {
    let books = await bookModel.find().populate("author").populate("publisher")
    res.send({data: books})
}

// 5.

const newapi = async function (req,res){

    let data =await bookModel.find().populate("author").populate("publisher")
    data.forEach(dat =>{
        if(dat.publisher.name=='Penguin' || dat.publisher.name=='HarperCollins'){
            dat.isHardCover=true
        } if(dat.author.rating > 3.5){
            dat.price = dat.price + 10
        }
    })
    res.send({data: data})
}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.newapi=newapi
