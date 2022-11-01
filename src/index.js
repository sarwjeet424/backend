const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();
const moment = require('moment');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

function request(req,res,next){
    // let ip =req.socket.localAddress
    // let route = req.protocol + "://" + req.get('host') + req.originalUrl 
    let ip =req.socket.remoteAddress
    let route =req.originalUrl
    let dat= (moment().format('MMMM Do YYYY, h:mm:ss a')) 
    console.log(dat,ip,route)
    next()
}

app.use(request)

mongoose.connect("mongodb+srv://sarwjeet424:96568437528p@cluster0.v2qcllq.mongodb.net/sarwjeet43", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route);

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
