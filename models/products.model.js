const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true,
        default:0
    },
    category:{
        type:String,
        required:true,
    },
    stock:{
        type:String,
        required:true
    }
})
const product = mongoose.model('Product',productSchema)
module.exports = product;