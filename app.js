// ....................................MongoDB Connectivity.............................
// const mongoose = require('mongoose')

// const connectDB = async () => {
//     try {
//         const result = await mongoose.connect('mongodb://localhost:27017/collage')
//         console.log("mongoDB connect SUccessfully !!")
//         console.log(result)
//     } catch (err) {
//         console.log('connect Faild', err)
//     }

// }
// connectDB()

// ...........................................get data..........................................

// const mongoose = require('mongoose')

// async function connectDB() {
//     try {
//         await mongoose.connect('mongodb://localhost:27017/collage')
//         const mySchema = new mongoose.Schema({
//             name: String,
//             age: Number,
//             address: String,
//             number: Number
//         })
//         const studentModel = mongoose.model('students', mySchema)
//         const result = await studentModel.find()
//         console.log(result);
//     }
//     catch (err) {
//         console.log('connection Faild')
//         console.log(err)
//     }
// }
// connectDB()

//********************************get data from MongoDB and Render UI (MVC Pattern)************************************ */

// const express = require('express');
// const connectDB = require('./config/database');
// const getData = require('./controller/handleController');
// const app = express()
// const port = 3000;


// connectDB()

// app.set('view engine', 'ejs')

// app.get('/',getData)

// app.listen(port,()=>{
// console.log(`server is sunnini on port ${port}`)
// })


//********************************CRUD Opartion (mongoose) & (MVC Pattern)************************************ */

// const express = require('express')
// const controller = require('./controller/studentController')
// const connectDB = require('./config/db')
// const app = express()
// const port = 3000

// app.set('view engine', 'ejs')
// app.use(express.urlencoded({extended : true}))

// connectDB()

// // student List get
// app.get('/',controller.getStudent)

// //add user route
// app.get('/adduserRoute',controller.postuserRoute)

// //post user
// app.post('/postuser',controller.postuser)

// //delete user
// app.get('/deleteuser/:id',controller.deleteUser)

// // handle nevigate
// app.get('/update/:id',controller.handleNevigate)

// //handle Update
// app.post('/updateUser/:id',controller.handleUpdate)

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });


//********************************POST Data (Validation)************************************ */

// const express = require('express');
// const connectDB = require('./config/connectivity');
// const controller = require('./controller/valController');
// const app = express()
// const port = 3000;


// connectDB()
// app.set('view engine', 'ejs')
// app.use(express.urlencoded({extended : true}))

// app.get('/',controller.addUser)

// app.post('/submit',controller.postUser)

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });

// ...........................................................................................

const express = require('express');
const connectDB = require('./config/newDB');
const controller = require('./controller/userInfoController');
const app = express()
const port = 3000;


connectDB()

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))

app.get('/',controller.handleUserInfo)

app.post('/submit',controller.postInfo)


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});