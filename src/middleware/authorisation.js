

const authorisation = function (req,res,next){
    const id=req.params.userId
    const  reqid= req.id
    if(id!==reqid)   res.send({status:false,msg:"unauthorised user"})

    next()
}

module.exports.authorisation=authorisation