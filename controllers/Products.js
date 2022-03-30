const ProductSchema=require("../models/Products")

const getAllProducts=async(req,res,next)=>{
      try {
          res.status(200).json({name:'ayomikun'})
      } catch (error) {
          res.status(500).json({msg:error})
      }
}
const postNewProduct=async(req,res,next)=>{
    try {
        res.status(200).json(req.body)
    } catch (error) {
        res.status(500).json({msg:error})
    }
}
module.exports={getAllProducts,postNewProduct}
