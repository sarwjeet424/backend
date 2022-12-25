const mongoose= require('mongoose')

const custSchema = new mongoose.Schema({

    firstName :String,
    lastName :String,
    mobileNumber :String,           //10 digits long
    DOB :Date,
    emailID :String,                //abc@xyz.com
    address :String,
    customerID :String ,            //UUID
    status :String,                  //ACTIVE / INACTIVE
    isDeleted:{type:Boolean, default:false}

},{timestamps:true})

module.exports=mongoose.model('Customer',custSchema)