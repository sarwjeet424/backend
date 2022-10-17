const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    console.log("The path params in the request are : ", req.params)
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})


// Example 1 for path params
router.get('/students/:studentName/:location', function(req, res){
    // ':' denotes that the following part of route is a variable
    // The value of this variable is what we are sending in the request url after /students
    // This value is set in the form of an object inside req.params
    // The object contain key value pairs
    // key is the variable in the route
    // value is whatever dynamic value sent in the request url
    let myParams = req.params ;

    // params attribute is fixed in a request object
    // params contains the path parameters object
    console.log("The path params in the request are : ", myParams)
    res.send('The full name is ' +myParams.studentName )
})

// Example 2 for path params
router.get('/student-details/:name', function(req, res){
    let requestParams = req.params
    console.log("This is the request ", requestParams)
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    res.send('Dummy response')
})

//..........today Assignment........

// 1.

router.get('/movies',function(req,res){
     const arr=[ 'batman', 'spiderman', 'avatar', 'harrypoter', 'ironman']

     res.send(arr)

})

// 2 & 3

router.get('/movies/:indexNumber',function(req,res){
    const arr=['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
    
    let alpha=req.params
    if(alpha.indexNumber>=arr.length){
        res.send('use a valid index')
     }else{
         res.send(arr[alpha.indexNumber])
     }  

})

// 4.

router.get('/films',function(req,res){
    const arr=[{
        id: 1,
        name: 'The Shining'
       }, {
        id: 2,
        name: 'Incendies'
       }, {
        id: 3,
        name: 'Rang de Basanti'
       }, {
        id: 4,
        name: 'Finding Nemo'
       }]
       
    res.send(arr)

})

// 5.

router.get('/films/:filmId',function(req,res){
    const arr=[{
        id: 1,
        name: 'The Shining'
       }, {
        id: 2,
        name: 'Incendies'
       }, {
        id: 3,
        name: 'Rang de Basanti'
       }, {
        id: 4,
        name: 'Finding Nemo'
       }] 


       let obj=req.params;
       let count=0;
       for(let a=0;a<arr.length;a++){
        if(arr[a].id==obj.filmId){
             count++;
             res.send(arr[a]);
        }
       }
       if(count==0){
        res.send('No movie exists with this id')
       }

       
})


module.exports = router;