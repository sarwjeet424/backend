const { count } = require("console");
const BookModel = require("../models/bookModel");

// 1.

const createBook = async function (req, res) {
  let data = req.body;

  let savedData = await BookModel.create(data);
  res.send({ msg: savedData });
};

const getBooksData = async function (req, res) {

  let allBooks = await BookModel.find()
  res.send({ msg: allBooks });

}

// 2.

const getBooksList = async function (req, res) {

      let allBooks = await BookModel.find().select({bookName:1,authorName:1,_id:0});
      res.send({ msg: allBooks });
    }


// 3.

const getBooksInYear = async function (req, res) {

      let year=req.query.year
      let allBooks = await BookModel.find({year:year});
      res.send({ msg: allBooks });
    }

// 4.

const getParticularBooks = async function (req, res) {

// let allhi= await BookModel.find({bookName:/.*hi.*/}).count()
//     res.send({msg: allhi})

    let allBooks = await BookModel.find({year:2020})
    res.send({ msg: allBooks });

    }

// 5.

const getXINRBooks = async function (req, res) {

    let allBooks = await BookModel.find({"prices.indianPrice":{$in:["₹ 100","₹ 200","₹ 500"]}})
    res.send({msg:allBooks})

    }

    // 6.

const getRandomBooks  = async function (req, res) {

        let allBooks = await BookModel.find({$or: [{stockAvailable:true},{totalPages:{$gt:500}}]})
        res.send({ msg: allBooks });
        
    }









  // let allBooks= await BookModel.find( ).count() // COUNT        

  // let allBooks= await BookModel.find( { authorName : "Chetan Bhagat" , isPublished: true  } ) // AND

  // let allBooks= await BookModel.find( {
  //     $or: [ {authorName : "Chetan Bhagat" } , { isPublished: true } , {  "year": 1991 }]
  // } ).select( { bookName: 1, authorName: 1, _id: 0})n // SELECT keys that we want

  // let allBooks= await BookModel.find().sort( { sales: -1 }) // SORT Decending order if -1

  // PAGINATION
  // let page= req.query.page
  // let allBooks= await BookModel.find().skip(3 * (page-1)).limit(3)

  // let allBooks= await BookModel.find().sort({ sales: -1 }).skip(3 * (page-1)).limit(3).select({ bookName: 1, authorName: 1, _id: 0} )

  // let allBooks= await BookModel.find({ sales: { $eq:  137 }  })
  // let allBooks= await BookModel.find({ sales: { $ne:  137 }  })
  // let allBooks= await BookModel.find({ sales: { $gt:  50 }  })
  // let allBooks= await BookModel.find({ sales: { $lt:  50 }  })
  // let allBooks= await BookModel.find({ sales: { $lte:  50 }  })
  // let allBooks= await BookModel.find({ sales: { $gte:  50 }  })

  // let allBooks= await BookModel.find({  sales : { $nin: [11, 17, 90] }   }).sort({sales:1}).select({sales:1,_id:0})
  // sales : { $in: [10, 17, 82] }

  // let allBooks= await BookModel.find({     sales : { $nin: [ 17, 82, 137] }     }).select({ sales: 1, _id:0})

  //  let allBooks= await BookModel.find({     $and: [{sales : {$gt: 20}} , {sales :  {$lt: 100}}]    })  //sales is between 20 and 100.... sales > 20 AND sales <100
  //  let allBooks= await BookModel.find({     sales : {$gt: 20, $lt: 100}   })  //sales is between 20 and 100.... sales > 20 AND sales <100

  //  let allBooks= await BookModel.findById("621c60a6b16c9e6bf2736e33")
  //  let allBooks= await BookModel.findOne( {sales: 11})
  //  let allBooks= await BookModel.find( {sales: 11})

  // //  update (not covered: - findByIdAndUpdate | updateOne )
  // let allBooks= await BookModel.update(
  //     {  sales: {$gt: 10}  }, //condition
  //     { $set: { isPublished: true} } // the change that you want to make
  //     )

  // REGEX
  //   let allBooks= await BookModel.find()
  // let allBooks= await BookModel.find( { bookName:  /^INT/i  })
  // let allBooks= await BookModel.find( { authorName:  /Alfred$/  })
  //   let allBooks= await BookModel.find( {authorName:  /.* aLfred.*/i  })

  // ASYNC AWAIT

  //   let a = 2 + 4;
  //   a = a + 10;
  //   console.log(a);
  // let allBooks= await BookModel.find( )  //normally this is an asynchronous call..but await makes it synchronous

  // WHEN AWAIT IS USED: - database + axios
  //  AWAIT can not be used inside forEach , map and many of the array functions..BE CAREFUL
  //   console.log(allBooks);
  //   let b = 14;
  //   b = b + 10;
  //   console.log(b);
  //   res.send({ msg: allBooks });


module.exports.createBook = createBook;
module.exports.getBooksData = getBooksData;
module.exports.getBooksList=getBooksList
module.exports.getBooksInYear=getBooksInYear
module.exports.getParticularBooks=getParticularBooks
module.exports.getXINRBooks=getXINRBooks
module.exports.getRandomBooks =getRandomBooks