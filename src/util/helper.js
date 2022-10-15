function printDate(){
    const date =new Date()
    return("date -",date)
   
}

function printMonth(){
    const date =new Date()
    const month =date.getMonth()
    return("month -",month+1)
    

}

function  getBatchInfo(){
    return("lithium, W3D3, the topic for today is Nodejs module system")
  
}



module.exports.date =printDate
module.exports.month=printMonth
module.exports.batch=getBatchInfo