const mongoose = require('mongoose')

async function connectDB() {
    try {
        await mongoose.connect('mongodb://localhost:27017/collage')
        console.log('mongoDb Connect successfully !!')
    } catch (err) {
        console.log('mongoDb Connect Faild !!')
        console.log(err)
    }
}

module.exports = connectDB;