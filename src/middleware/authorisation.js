

const authorisation = function (req,res,next){
   try{

    const id=req.params.userId
    const  reqid= req.id
    if(id!=reqid)  return res.status(403).send({status:false,msg:"unauthorised users"}) 
    
    next()
    
}catch(error){
    console.log(error.message)
    res.status(500).send({status:false,msg:error.message})
}
}

module.exports.authorisation=authorisation