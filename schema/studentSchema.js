const mongoose = require("mongoose");

const mySchema = new mongoose.Schema({
  name:String,
  age: Number,
  address:String,
  number:Number
})
const collection = await mongoose.model('students',mySchema)

module.exports = collection