const Product = require('../models/products.model')

const getProducts = async(req,res)=>{
    try {
        const product = await Product.find()
        res.status(200).json({product})
    } catch (error) {
        res.status(500).json({message:message.error})
    }
}
const getProduct = async(req,res)=>{
    try {
        const {id}=req.params
        const product = await Product.findById(id);
        if(!product){
            res.error(404).json({message:`the product with id ${id} doesn't exist`});
        }else{
            res.status(200).json({product});
        }
    } catch (error) {
        res.status(500).json({message:error})
    }
}
const createProduct = async(req,res)=>{
    try {
        const {name,description,price,category,stock}= req.body;
        const exist = await Product.findOne({name});
        if(exist){
            res.status(404).json({message:`the product ${exist} already exists`});
        }else{
            const product = await Product.create(req.body);
            res.status(200).json({product});
        }
    } catch (error) {
        res.status(500).json({message:message.error})   
    }
}

const updateProduct = async(req,res)=>{
    try {
        const {id} = req.params
        const product = await Product.findByIdAndUpdate(id,req.body)
        if(!product){
            res.status(404).json({message:`the product with this id ${id} doesn't exist`})
        }else{
            res.status(200).json({product});
        }
    } catch (error) {
        res.status(500).json({message:message.error})        
    }
}

const deleteProduct = async(req,res)=>{
    try {
        const {id} = req.params
        const product = await Product.findByIdAndDelete(id)
        if(!product){
            res.status(404).json({message:`the product with id ${id} doesn't exist`});
        }else{
            res.status(200).json({message:`the product with id ${id} is deleted`})
        }
    } catch (error) {
        res.status(500).json({message:message.error});        
    }
}

module.exports={
    getProducts,getProduct,createProduct,updateProduct,deleteProduct
}