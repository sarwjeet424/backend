const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')

const router = express.Router();

// .............today assignment.................

// 1.

router.get('/sol1', function (req,res){
    let arr=[1,2,3,5,6,7]
    let missingNumber;
    let min=arr[0]
    let max=arr[arr.length-1]

for(let a=min;a<=max;a++){
    let count=0
    for(let b=0;b<arr.length;b++){
        if(a==arr[b]){
            count++
            break;
        }
    }
    if(count==0){
        missingNumber = a
    }
}

res.send({ data: missingNumber })
})
  
// 2.

router.get('/sol2', function (req,res){
    let arr= [33, 34, 35, 37, 38]
    let missingNumber;
    let min=arr[0]
    let max=arr[arr.length-1]

for(let a=min;a<=max;a++){
    let count=0
    for(let b=0;b<arr.length;b++){
        if(a==arr[b]){
            count++
            break;
        }
    }
    if(count==0){
        missingNumber = a
    }
}

res.send({ data: missingNumber })
})
  
module.exports = router;
