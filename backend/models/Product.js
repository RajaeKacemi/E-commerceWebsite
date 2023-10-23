const mongoose = require('mongoose');
const uuid = require('node-uuid');

const ProductSchema = new mongoose.Schema({
        id: {
            type: String,
            default: uuid.v1
        },
        sku: {
            type: String,
            require: true,
            unique: true,
            minlength:12
        },
        product_image: {
            type: String,
            require: true
        },
        product_name: {
            type: String,
            require: true,
            unique:true
        },
        subcategory_id: {
            type: String,
            require: true
        },
        short_description : {
            type: String,
            min: 25
        },
        long_description :{
            type: String,
            min: 40
        },
        price :{
            type: Number,
            require: true
        },
        discount_price :{
            type: Number,
        },
        quantity: {
            type: Number,
            default:0
        },
        options :{
            type: Array,
        },
        active: {
            type: Boolean,
            require: true,
            enum : ['true', 'false'],
            default:'false'
        }

});
module.exports = mongoose.model('Product', ProductSchema);