const mongoose = require('mongoose')

async function connectDB(){
    try{
        await mongoose.connect('mongodb://localhost:27017/collage')
        console.log('mongoDB connect Successfull !!')
    }catch(err){
        console.log('MongoDB connect Faild')
        console.log(err)
    }
}
module.exports= connectDB;