const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");



const createUser = async function (req, res) {
  
  try{
    const data= req.body
    const model = await userModel.create(data)
    res.status(201).send({status:true,msg:model})
  }catch(error){
    console.log(error.message)
    res.status(500).send({status:false,msg:error.message})
  }

};

module.exports.createUser = createUser;
