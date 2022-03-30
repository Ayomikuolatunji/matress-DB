const res = require("express/lib/response")
const ProductSchema=require("../models/Products")

const getAllProducts=async(req,res,next)=>{
      try {
          const prods=await ProductSchema.find({})
          res.status(200).json(prods)
      } catch (error) {
          res.status(500).json({msg:error})
      }
}
const postNewProduct=async(req,res,next)=>{
    try {
        const products= await ProductSchema.create(req.body)
        res.status(201).json(products) 
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const getSIngleProduct=async(req,res,next)=>{
    try {
        const {id:prodId}=req.params;
        const prods=await ProductSchema.findOne({_id:prodId})
        if(!prods){
            return res.status(404).json({msg:`No product with ${id} not found`})
        }
       res.status(200).json(prods)
    } catch (error) {
        res.status(500).json({msg:error})
    }
}
module.exports={getAllProducts,postNewProduct,getSIngleProduct}
