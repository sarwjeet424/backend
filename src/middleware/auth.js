const jwt= require('jsonwebtoken')

const auth =async function (req, res, next){

    try{
        const token = req.headers["x-auth-token"]
        if(token){
            const decoded =await jwt.verify(token,'passwordSignature')
            req.id=decoded.id 
            next()
        }else{
            console.log("x-auth-token key is required in headers")
            res.status(401).send({msg:"x-auth-token key is required in headers"})
        }
    }catch(error){
        console.log(error.message)
        res.status(500).send({status:false,msg:error.message})
    }
}


module.exports.auth =auth