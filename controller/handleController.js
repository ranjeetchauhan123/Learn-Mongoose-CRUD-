const collection = require("../schema/userSchema");

async function getData(req, res) {
    try {
        const result = await collection.find()
        res.render('userList',{users : result})
    }
    catch (err) {
        console.log('data not recevied')
        console.log(err)
    }

}

module.exports = getData;