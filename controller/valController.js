const Student  = require("../schema/ValidationSchema");

function addUser(req, res) {
    res.render('validateForm');
}

async function postUser(req, res) {
    try {
        await Student.create(req.body);
        console.log('Data Submitted Successfully!!');
        res.redirect('/');
    } catch (err) {
        console.log('Data Submission Failed');
        console.log(err.message);
        res.render('validateForm',{error: err.message});
    }
}

module.exports = { addUser, postUser };