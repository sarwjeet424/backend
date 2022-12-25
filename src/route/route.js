const router=require('express').Router()
const {createCustomer,getCustomerData,deleteCustomer}=require('../controllers/customerController')
const {login,authentication, authorization}=require('../middleware/auth')
const {createCard,getAllCard}=require('../controllers/cardController')

//----------------- Customer API'S-----------------//
router.post('/createCustomer',createCustomer)
router.post('/login',login)
router.get('/getAllCust',getCustomerData)
router.delete('/deleteCust/:Id',authentication,authorization,deleteCustomer)

//------------------ Card API'S---------------------//
router.post('/createCard',createCard)
router.get('/getAllCard',getAllCard)

module.exports=router