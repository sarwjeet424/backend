const userModel = require('../models/userModel')
const jwt= require('jsonwebtoken')

const getFetch = async function (req,res){
    
    try{
        const id=req.params.userId
        const userauth = await userModel.findOne({_id:id})
        if(userauth==null)   res.status(401).send({status:false,msg:"invalid userid"})

        res.status(200).send({status:true,msg:userauth})
    }catch(error){
        console.log(error.message)
        res.status(500).send({status:false,msg:error.message})
    }
}

const getUpdate = async function (req,res){
   try{
        const id=req.params.userId
        const userauth = await userModel.findOne({_id:id})
        if(userauth==null)  res.status(401).send({status:false,msg:"invalid userid"})

        const {lastName,age}=req.body
        const fetchdata = await userModel.findOneAndUpdate({_id:id},{lastName:lastName,age:age},{new:true})
        res.status(200).send(fetchdata)
   }catch(error){
      console.log(error.message)
      res.status(500).send({status:false,msg:error.message})
   }
}

const getDelete = async function (req,res){
    
    try{
    const id=req.params.userId
    const userauth = await userModel.findOne({_id:id})
    if(userauth==null)  res.status(401).send({status:false,msg:"invalid userid"})

    const fetchdata = await userModel.findOneAndUpdate({_id:id},{isDeleted:true},{new:true})
    res.status(200).send({status:true,msg:fetchdata})
   }catch(error){
    console.log(error.message)
    res.status(500).send({status:false,msg:error.message})
 }
}

module.exports.getFetch= getFetch
module.exports.getUpdate= getUpdate
module.exports.getDelete= getDelete