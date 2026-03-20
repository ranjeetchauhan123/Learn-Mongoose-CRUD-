const mongoose = require("mongoose");

const mySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required'],
        minlength: [3, 'minimum 3 characters'],
        trim: true
    },
    age: {
        type: Number,
        required: [true, 'age is required'],
        min: [18, 'age must be 18+']
    },
    address: {
        type: String,
        required: [true, 'address is required'],
        minlength: [3, 'minimum 3 characters'],
        trim: true
    },
    number: {
        type: String,
        required: [true, 'Number is required'],
        minlength: [10, 'minimum 10 digits'],
        maxlength: [10, 'maximum 10 digits'],
        trim: true
    }
});

const Student = mongoose.model('students', mySchema);

module.exports = Student;