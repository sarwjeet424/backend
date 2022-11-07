const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const login = async function (req,res){

    try{
        const {emailId, password} = req.body
        const fetchdata = await userModel.findOne({emailId:emailId , password:password})
        if(fetchdata==null) res.status(401).send({status:false,msg:"doesn't match the emailId and password with userdata"})
        
        console.log("login Successfully")
        const myToken = jwt.sign({id:fetchdata._id, email:emailId},'passwordSignature')
        res.status(200).send({staus:true,data:myToken})
    }catch(error){
        console.log(error.message)
        res.status(500).send({status:false,msg:error.message})
    }
}

module.exports.login = login