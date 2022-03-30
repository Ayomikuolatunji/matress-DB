

const ErrorPage=(req,res,next)=>{
    res.status(404).send("Route not found or restricted")
}

module.exports=ErrorPage