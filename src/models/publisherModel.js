const mongoose =require('mongoose')

const Publisher =new mongoose.Schema({

    name: String,
    headQuarter: String

},{timestamps:true})

module.exports = mongoose.model('newPublisher', Publisher)