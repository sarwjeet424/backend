const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    name:String,
	author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"newAuthor",
        required:true
    },
	price:Number,
	ratings:Number,
	publisher: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"newPublisher",
        required:true
    },
    isHardCover:{
       type: Boolean,
       default:false
    }

}, { timestamps: true });


module.exports = mongoose.model('newBook', bookSchema)