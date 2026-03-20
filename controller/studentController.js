const collection = require("../schema/studentSchema");


//get users
async function getStudent(req, res) {
  try {
    const result = await collection.find();
    res.render('studentList', { students: result });
  } catch (err) {
    console.log('no such data');
    console.log(err);
  }
}


// post Routes
function postuserRoute(req, res) {
  res.render('adduser')
}

// post User
async function postuser(req, res) {
  try {
    const newuser = (req.body)
    res.redirect('/')
    const result = await collection.insertOne(newuser)
    console.log(result)
  } catch (err) {
    console.log('User not Add')
    console.log(err)
  }

}


//delete user
async function deleteUser(req, res) {
  try {
    const id = (req.params.id)
    const result = await collection.findByIdAndDelete(id)
    console.log(result)
    res.redirect('/')
  } catch (err) {
    console.log('User delete Faild')
    console.log(err)
  }
}

// nevigate////

async function handleNevigate(req, res) {
  const id = req.params.id;
  const result = await collection.findById(id)
  res.render('updateUser', { student: result })
}

// Update 
async function handleUpdate(req, res) {
  try {
    const id = req.params.id;
    const result = await collection.findByIdAndUpdate(id, req.body)
    res.redirect('/')
  } catch (err) {
    console.log('User not update')
    console.log(err)
  }
}



module.exports = { getStudent, postuserRoute, postuser, deleteUser, handleNevigate, handleUpdate};