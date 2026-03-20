const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/collage')
        console.log('MongoDB Connect Success!!');
    }
    catch (err) {
        console.log('MongoDB Connect Failed !');
        console.log(err);
    }
}

module.exports = connectDB;