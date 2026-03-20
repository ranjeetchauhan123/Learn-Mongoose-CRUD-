const { default: mongoose } = require("mongoose")

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/collage')
        console.log('MongoDB Connect Successfully !!')
    }
    catch (err) {
        console.log('MongoDB Connect Faild ')
        console.log(err)
    }
}
module.exports = connectDB;