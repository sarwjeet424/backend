const userModel= require("../models/userModel")


const createUser= async function (req,res){
    
    const data =req.body
    const userSchema = await userModel.create(data)
    res.send({msg:userSchema})

}

module.exports.createUser= createUser
