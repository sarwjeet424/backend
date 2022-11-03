const jwt= require('jsonwebtoken')

const auth =async function (req, res, next){

    const header = req.headers["x-auth-token"]
    if(header){
        const token = req.headers["x-auth-token"]
        const decoded =await jwt.verify(token,'passwordSignature')

        next()
    }else{
        console.log("x-auth-token key is required in headers")
        res.send({msg:"x-auth-token key is required in headers"})
    }
}


module.exports.auth =auth