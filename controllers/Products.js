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
module.exports={getAllProducts,postNewProduct}
