const mongoose=require("mongoose");



const ProductSchema=new mongoose.Schema({
      title:{
          type:String,
          required:true,
          maxlength:70
      },
      desc:{
          type:String,
          required:true,
          maxlength:1000,
      },
      image:{
          type:String,
          required:true,
      },
      color:{
         type:String,
         required:true,
      },
      price:{
          type:[Number],
          required:true
      },
      extra:{
        type:[
            {text:{type:String,required:true}},
            {price:{type:Number,required:true}}
          ],
          required:true
    },
},{timestamps:true});


module.exports=mongoose.model("product", ProductSchema)