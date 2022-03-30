const express=require("express");
const router=express.Router()

const {getAllProducts,postNewProduct,getSIngleProduct}=require("../controllers/Products")


router.get("/",getAllProducts).post("/",postNewProduct)
router.get("/:id",getSIngleProduct)
module.exports=router