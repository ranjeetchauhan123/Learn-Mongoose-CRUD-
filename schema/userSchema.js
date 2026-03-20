const { default: mongoose } = require("mongoose");

const mySchema = mongoose.Schema({
    name: String,
    age: Number,
    address: String,
    number: Number
})
const collection = mongoose.model('students', mySchema)

module.exports = collection;