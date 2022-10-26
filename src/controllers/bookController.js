const { count } = require("console")
const authorModel = require("../models/authorModel")
const BookModel= require("../models/bookModel")


// 1.
const createBook = async function (req,res){

    let data= req.body
    let createall= await BookModel.create(data)
    res.send(createall)

}

// 3.

const updatebook =async function (req,res){
    let updatebook = await BookModel.findOneAndUpdate({ name:"Two states"},{ price:100},{new:true})
    let updateprice = updatebook.price
    let authorid= updatebook.author_id
    console.log(updatebook)

    let updateauthor= await authorModel.findOne({author_id:authorid})
    let authorname=updateauthor.author_name
    res.send({updateprice,authorname})
}

// 4.

const bookcost = async function (req,res){

    let bookprice= await BookModel.find({ price : { $gte: 50, $lte: 100} })
    // console.log(bookprice)

    let arr=[]
    for(let a=0;a<bookprice.length;a++){
        let bookname=bookprice[a].name
        let alpha=bookprice[a]
        let authorname= await authorModel.findOne({author_id:alpha.author_id})
        arr.push([bookname,authorname.author_name])
    }
    
    
    res.send({msg:arr})
}

module.exports.createBook= createBook
module.exports.updatebook= updatebook
module.exports.bookcost= bookcost






// const createBook= async function (req, res) {
//     let data= req.body

//     let savedData= await BookModel.create(data)
//     res.send({msg: savedData})
// }

// const getBooksData= async function (req, res) {
//     let allBooks= await BookModel.find( {authorName : "HO" } )
//     console.log(allBooks)
//     if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
//     else res.send({msg: "No books found" , condition: false})
// }


// const updateBooks= async function (req, res) {
//     let data = req.body // {sales: "1200"}
//     // let allBooks= await BookModel.updateMany( 
//     //     { author: "SK"} , //condition
//     //     { $set: data } //update in data
//     //  )
//     let allBooks= await BookModel.findOneAndUpdate( 
//         { authorName: "ABC"} , //condition
//         { $set: data }, //update in data
//         { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
//      )
     
//      res.send( { msg: allBooks})
// }

// const deleteBooks= async function (req, res) {
//     // let data = req.body 
//     let allBooks= await BookModel.updateMany( 
//         { authorName: "FI"} , //condition
//         { $set: {isDeleted: true} }, //update in data
//         { new: true } ,
//      )
     
//      res.send( { msg: allBooks})
// }




// // CRUD OPERATIONS:
// // CREATE
// // READ
// // UPDATE
// // DELETE



// module.exports.createBook= createBook
// module.exports.getBooksData= getBooksData
// module.exports.updateBooks= updateBooks
// module.exports.deleteBooks= deleteBooks

// // 1.
// const createBook = async function (req,res){

//     let data= req.body
//     let createall= await BookModel.create(data)
//     res.send(createall)

// }

// // 3.

// const updatebook =async function (req,res){
//     let updatebook = await BookModel.findOneAndUpdate({ name:"Two states"},{ price:100},{new:true})
//     let updateprice = updatebook.price
//     let authorid= updatebook.author_id
//     console.log(updatebook)

//     let updateauthor= await authorModel.findOne({author_id:authorid})
//     let authorname=updateauthor.author_name
//     res.send({updateprice,authorname})
// }

// // 4.

// const bookcost = async function (req,res){

//     let bookprice= await BookModel.find({ price : { $gte: 50, $lte: 100} })
//     // console.log(bookprice)

//     let arr=[]
//     for(let a=0;a<bookprice.length;a++){
//         let bookname=bookprice[a].name
//         let alpha=bookprice[a]
//         let authorname= await authorModel.findOne({author_id:alpha.author_id})
//         arr.push([bookname,authorname.author_name])
//     }
    
    
//     res.send({msg:arr})


// }

