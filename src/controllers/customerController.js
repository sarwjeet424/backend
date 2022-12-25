const customerModel= require('../models/customerModel')
const {isValidEmail,isValidMobile,isValidString,isValidName,isValidDate,isIdValid}=require('../validator/validator')
const shortid=require('shortid')

const createCustomer =async function (req,res){
    try{
        let data=req.body
        if(Object.keys(data).length==0) return res.status(400).send({status:false,message:"Request body doesn't be empty"})
        let { firstName,lastName,mobileNumber,DOB,emailID,address}=data
        if(!firstName) return res.status(400).send({status:false,message:"firstName is Mandatory"})
        if(!isValidString(firstName) || !isValidName(firstName)) return res.status(400).send({status:false,message:"Please provide valid firstName "})

        if(!lastName) return res.status(400).send({status:false,message:"lastName is Mandatory"})
        if(!isValidString(lastName) || !isValidName(lastName)) return res.status(400).send({status:false,message:"Please provide valid lastName "})

        if(!mobileNumber) return res.status(400).send({status:false,message:"mobileNumber is Mandatory"})
        if(!isValidMobile(mobileNumber)) return res.status(400).send({status:false,message:"Please provide valid mobileNumber "})

        if(!DOB) return res.status(400).send({status:false,message:"DOB is Mandatory"})  
        if(!isValidDate(DOB)) return res.status(400).send({status:false,message:"Please provide valid DOB"})

        if(!emailID) return res.status(400).send({status:false,message:"emailID is Mandatory"})
        if(!isValidEmail(emailID)) return res.status(400).send({status:false,message:"Please provide valid emailID "})

        let emailCheck = await customerModel.findOne({emailID})
        if(emailCheck) return res.status(400).send({status:false,message:"EmailId is already exists in Database"})

        if(!address) return res.status(400).send({status:false,message:"address is Mandatory"})

        data.customerID =shortid.generate()
        data.status="ACTIVE"

        let createCust = await customerModel.create(data)
        return res.status(201).send({status:true,message:"Success",data:createCust})


    }catch(err){
        return res.status(500).send({status:false,message:err.message})
    }
}


const getCustomerData = async function (req,res){
    try{

        let customerData= await customerModel.find({status:"ACTIVE",isDeleted:false})
        if(!customerData) return res.status(404).send({status:false,message:"No Customers Data is Active or Deleted"})

        return res.status(200).send({status:true,message:"Success",data:customerData})

    }catch(err){
        return res.status(500).send({status:false,message:err.message})
    }
}

const deleteCustomer = async function (req,res){
    try{
 
        let Id= req.params.Id
        if(!isIdValid(Id)) return res.status(400).send({status:false,message:"Invalid CustomerId in path params"})

        let deleteCust= await customerModel.findOneAndUpdate({_id:Id,isDeleted:false},{isDeleted:true},{new:true})
        if(!deleteCust)  return res.status(404).send({status:false,message:"Customer already deleted"})
 
        return res.status(200).send({status:true,message:"Customer deleted Successfully"})

    }catch(err){
        return res.status(500).send({status:false,message:err.message})
    }
}

module.exports={createCustomer,getCustomerData,deleteCustomer}