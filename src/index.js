const bodyParser = require('body-parser')
const express = require('express')
const route= require('./routes/route')
const mongoose= require('mongoose')

const app = express()

app.use(bodyParser.json())

mongoose.connect("mongodb+srv://sarwjeet424:96568437528p@cluster0.8tsocgw.mongodb.net/sarwjeet43",{useNewUrlParser:true})
.then(()=> console.log("MongoDB is connected") )
.catch((err)=> console.log(err) )

app.listen(3000,function (){
    console.log("Running on the Port: 3000")
})

app.use("/",route)