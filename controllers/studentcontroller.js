const Student = require('../models/Student')
async function addStudent (req, res) {
    try {
        
        console.log(req.body)
        const student = new Student(req.body)
        await student.save()
        res.render('addStudentSuccess')
    } catch (err) {
       console.log(err)
    }
}
const getStudents = async (req, res) => {
    try {
        let students = await Student.find({});

        res.render("studentlist", {
            students: students
        });

    } catch (err) {
        console.log(err);
    }
};

module.exports = {
    addStudent,
    getStudents
}