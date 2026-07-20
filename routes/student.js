const express = require('express')
const studentcontroller = require('../controllers/studentcontroller')
const route = express.Router()
route.use(express.urlencoded({ extended: false}))


route.get('/',(req, res) => {
    res.render('home')
    // res ke sth jb bhi render function dikhe toh usko hum views meh dhundte hai
})

route.post('/add/student',(req, res) =>  {
    studentcontroller.addStudent(req, res)
})


route.get('/students',(req, res) => {
    studentcontroller.getStudents(req, res)

})

module.exports = route