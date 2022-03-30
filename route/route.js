const express=require("express");
const router=express.Router()

const {getAllProducts,postNewProduct}=require("../controllers/Products")


router.get("/",getAllProducts).post("/",postNewProduct)

module.exports=router