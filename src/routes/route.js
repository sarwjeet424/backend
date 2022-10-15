const express = require('express');
const router = express.Router();///test-you
//importing a custom module
const x = require('../logger')
//importing external package
const underscore = require('underscore')
const lodash = require('lodash')
//importing a custom module
const logger=require('../logger/logger')
const helper=require('../util/helper')
const formatter=require('../validator/formatter')

router.get('/test-me', function (req, res) {
    //Calling the components of a different custom module
    console.log("Calling my function ",x.myFunction())
    console.log("The value of the constant is ",x.myUrl)

    //Trying to use an external package called underscore
    let myArray = ['Akash', 'Pritesh', 'Sabiha']
    let result = underscore.first(myArray)
    console.log("The result of underscores examples api is : ", result)
    //..............Node module assignment............//

    console.log(logger.welcome())
    console.log(helper.date())
    console.log(helper.month())
    console.log(helper.batch())
    console.log(formatter.tr())
    console.log(formatter.lower())
    console.log(formatter.upper())
    const arr= ['January','February','March','April','May','June','July','August','September','October','November','December']
    const newarr= lodash.chunk(arr,3)
    console.log(newarr)
    const arr1=[1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
    const newarr1= lodash.tail(arr1)
    console.log(newarr1)
    const ar1=[2,4,6]
    const ar2=[2,4,8]
    const ar3=[3,6,7]
    const ar4=[7,4,9]
    const ar5=[6,7,1]
    const newar=lodash.union(ar1,ar2,ar3,ar4,ar5)
    console.log(newar)
    const arra=[['horror','The Shining'],['drama','Titanic'],['thriller','Shutter Island'],['fantasy','Pans Labyrinth']]
    const newarra=lodash.fromPairs(arra)
    console.log(newarra)

    //...............//........................//
    res.send('My first ever api!')
    //To be tried what happens if we send multiple response
    //res.send('My second api!')
});

module.exports = router;

