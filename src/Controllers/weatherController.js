const axios = require('axios')

const weather =async function (req,res){
    try{ 
        let q=req.query.q
        let appid=req.query.appid
        let options ={
            method:"get",
            url:`http://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${appid}`
        }
        let result = await axios(options)
        res.status(200).send({status:true,msg:result.data})
    }catch(error){
        console.log(error.message)
        res.status(500).send({status:false,msg:error.message})
    }
}

const weathertemp =async function (req,res){
    try{ 
        let appid=req.query.appid
        let options ={
            method:"get",
            url:`http://api.openweathermap.org/data/2.5/weather?q=London&appid=${appid}`
        }
        let result = await axios(options)
        res.status(200).send({status:true,temp:result.data.main.temp})
    }catch(error){
        console.log(error.message)
        res.status(500).send({status:false,msg:error.message})
    }
}


const weathertempincrease =async function (req,res){
    try{ 
        let city =[ "Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"] 
        let arr=[]
        for(let a=0;a<city.length;a++){

            let q= city[a]
            let appid=req.query.appid
            let options ={
                method:"get",
                url:`http://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${appid}`
            }
            let result = await axios(options)
            arr.push({"city":result.data.name,"temp":result.data.main.temp})
            

        }
        arr.sort((a,b)=>{
            return a.temp - b.temp
        })
         
        res.status(200).send({status:true,msg:arr})
    }catch(error){
        console.log(error.message)
        res.status(500).send({status:false,msg:error.message})
    }
}

module.exports.weather=weather
module.exports.weathertemp=weathertemp
module.exports.weathertempincrease=weathertempincrease