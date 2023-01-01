const express= require('express')
const mongoose = require('mongoose')
const router=express.Router()
const app=express()
const route=require('./route/route')

app.use(express.json())
mongoose.set('strictQuery', true)
mongoose.connect('mongodb+srv://sarwjeet424:96568437528p@cluster0.8tsocgw.mongodb.net/cowinData',{useNewUrlParser:true})
.then(()=> console.log("MongoDB is connected"))
.catch((err)=> console.log(err))
let PORT=3000

app.listen(PORT,function (){
    console.log(`Connected on the PORT ${PORT}`)
})

app.use('/',route)