const jwt= require('jsonwebtoken')

const auth =async function (req, res, next){

    const token = req.headers["x-auth-token"]
    if(token){
        const decoded =await jwt.verify(token,'passwordSignature')
        req.id=decoded.id 
        next()
    }else{
        console.log("x-auth-token key is required in headers")
        res.send({msg:"x-auth-token key is required in headers"})
    }
}


module.exports.auth =auth