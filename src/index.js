const express =require('express')
const mongoose=require('mongoose')
const route=require('./route/route')
const app=express()

app.use(express.json())

mongoose.set('strictQuery', true)
mongoose.connect('mongodb+srv://sarwjeet424:96568437528p@cluster0.8tsocgw.mongodb.net/sarwjeet43',{useNewUrlParser:true})
.then(()=> console.log("MongoDB Connected"))
.catch((err)=> console.log(err))

const PORT=3000

app.listen(PORT,function (){
    console.log(`Connected on PORT ${PORT}`)
})

app.use('/',route)