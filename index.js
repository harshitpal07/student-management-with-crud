const express = require('express')
const connect = require('./connection')
const student = require('./routes/student')
const path = require('path')
const app = express();
app.use(express.json())
app.set('view engine', 'ejs')
app.set('views', path.resolve('./views'))
app.use(student)
connect()






app.listen(3000, (err) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log("server is running on 3000...")
    }
})