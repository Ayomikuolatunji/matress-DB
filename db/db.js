
const {connect}= require('mongoose');


const DBConnect=(KEY)=>{
    return connect(KEY,{
        useNewUrlParser:true
    })
}

module.exports=DBConnect