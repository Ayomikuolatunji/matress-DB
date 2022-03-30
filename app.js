const express=require("express");
const app=express()
const routes=require("./route/route")
const connectFunc=require("./db/db")

require('dotenv').config();




app.use(express.json())

app.use("/api/products",routes)


const port=process.env.PORT || 5000;


const  Startserver=async(key)=>{
   await connectFunc(key).then(()=>{
    app.listen(port,()=>{
        console.log(`app is running on port ${port}`)
    });
    console.log("database connnected")
    })
    .catch((err)=>{
        console.log("fail to connect to database",err)
    })
}
Startserver(process.env.MONGODB_URI) 
