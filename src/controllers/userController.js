const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");



const createUser = async function (req, res) {
  
  const data= req.body
  const model = await userModel.create(data)
  res.send({msg:model})

};

module.exports.createUser = createUser;
