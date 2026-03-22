const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    profile: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'profile'
    }
})

const profileSchema = new mongoose.Schema({
    bio: String,
    sallery: Number
})

const MyUser = mongoose.model('user', userSchema)
const MyProfile = mongoose.model('profile', profileSchema)

module.exports = {MyUser, MyProfile};