const mongoose= require("mongoose");

const ProductSchema=new mongoose.Schema({
      customer:{
          type:String,
          required:true,
          maxlength:70
      },
      address:{
          type:String,
          required:true,
          maxlength:1000,
      },
      total:{
          type:Number,
          required:true,
      },
      status:{
          type:String,
          default:0
      },
      method:{
          type:Number,
          required:true
      },
      
},{timestamps:true});

module.exports =mongoose.model("Orders", ProductSchema)