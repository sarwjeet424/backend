const userModel = require('../models/userModel')
const jwt= require('jsonwebtoken')

const getFetch = async function (req,res){
    const id=req.params.userId
    const userauth = await userModel.findOne({_id:id})
    console.log(userauth)
    if(userauth==null)   res.send({status:false,msg:"invalid userid"})

    res.send({status:true,msg:userauth})
}

const getUpdate = async function (req,res){
    const id=req.params.userId
    const userauth = await userModel.findOne({_id:id})
    if(userauth==null)  res.send({status:false,msg:"invalid userid"})

    const {lastName,age}=req.body
    const fetchdata = await userModel.findOneAndUpdate({_id:id},{lastName:lastName,age:age},{new:true})
    res.send(fetchdata)
}

const getDelete = async function (req,res){
    const id=req.params.userId
    const userauth = await userModel.findOne({_id:id})
    if(userauth==null)  res.send({status:false,msg:"invalid userid"})

    const fetchdata = await userModel.findOneAndUpdate({_id:id},{isDeleted:true},{new:true})
    res.send(fetchdata)
}


module.exports.getFetch= getFetch
module.exports.getUpdate= getUpdate
module.exports.getDelete= getDelete