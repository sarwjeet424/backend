const productSchema =require('../models/productModel')

const createProduct = async function(req,res){

    const data =req.body
    const productModel = await productSchema.create(data)
   
    res.send({msg:productModel})
}

module.exports.createProduct= createProduct

