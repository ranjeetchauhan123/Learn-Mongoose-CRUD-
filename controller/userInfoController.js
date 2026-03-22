const { MyUser, MyProfile } = require('../schema/userInfoSchema')

function handleUserInfo(req, res) {
    res.render('userInfo')
}

async function postInfo(req, res) {
    try {
        const { name, email, bio, sallery } = req.body
        const newProfile = await MyProfile.create({ bio, sallery })
        const newUser = await MyUser.create({ name, email, profile: newProfile._id })
        res.send(newUser)
    } catch (err) {
        res.send('Faild to Post')
        console.log(err)
    }

}

async function getData(req, res) {
    try {
        const data = await MyUser.find().populate('profile');
        console.log(data);
        res.json(data);

    } catch (err) {
        console.log(err);
    }
}
getData()

module.exports = { handleUserInfo, postInfo }