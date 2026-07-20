const mongoose = require('mongoose')
const Schema = mongoose.Schema

const StudentSchema = new Schema ({
    RollNo: { type: String, required: true},
    Name: { type: String, required: true},
    FatherName: { type: String, required: true},
    AadharCardNumber: { type: String, required: true},
    MobileNo: { type: String, required: true}
})


module.exports = mongoose.model('Student', StudentSchema)