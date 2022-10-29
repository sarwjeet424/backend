const newPublisher= require('../models/publisherModel')

// 2.

const newPublishers = async function(req,res){

    let data =req.body
    let newdata = await newPublisher.create(data)
    res.send({msg:newdata})
}

module.exports.newPublishers=newPublishers
