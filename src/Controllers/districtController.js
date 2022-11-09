const axios= require('axios')


const district = async function (req,res){
    try{
        let id= req.query.district_id
        let date=req.query.date
        let options={
              method:"get",
              url:`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${id}&date=${date}`
        }
        let result = await axios(options)
        res.status(200).send({status:true,msg:result.data})
    }catch(error) {
        console.log(error.message)
        res.status(500).send({status:false,msg:error.message})
    }
}

module.exports.district=district