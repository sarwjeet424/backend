const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({

    userId: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"UserModel"
    },
	productId: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
	amount: Number,
	isFreeAppUser: Boolean, 
	date: String

},{timestamps:true})

module.exports = mongoose.model('Order',orderSchema) ;

