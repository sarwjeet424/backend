const axios= require('axios')

const memes =async function (req,res){

    try{
         let options={
            method:"get",
            url:`https://api.imgflip.com/get_memes`
         }
         let result = await axios(options)
         res.status(200).send({status:true,msg:result.data})

    }catch(error){
        console.log(error.message)
        res.status(500).send({status:false,msg:error.message})
    }
}

const makememe = async function (req,res){
    try{
        let id=req.query.template_id 
        let t0=req.query.text0 
        let t1= req.query.text1 
        let u=req.query.username 
        let p=req.query.password 
        let options={
           method:"get",
           url:`https://api.imgflip.com/caption_image?template_id=${id}&text0=${t0}&text1=${t1}&username=${u}&password=${p}`
        }
        let result = await axios(options)
        res.status(200).send({status:true,msg:result.data})

   }catch(error){
       console.log(error.message)
       res.status(500).send({status:false,msg:error.message})
   }
}

module.exports.memes=memes
module.exports.makememe=makememe