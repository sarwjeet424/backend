
const userorder= function (req,res,next){
   
    const header = req.headers.isfreeappuser 
    const newheader= header=="true"?true:false 
    const isFreeAppUser= req.isFreeAppUser=newheader
    // console.log(req)
    // console.log(req.headers)
    if(header){
        next()
    }else{
        console.log("request is missing a mandatory header")
        res.send({msg:"request is missing a mandatory header"})
    }
}

module.exports.userorder=userorder




