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

async function getStudentById (req,res) {
    try {
    let id = req.params.id;
    console.log(id);
    let student = await Student.findOne({_id: id})
    console.log(student)
    res.render('studenteditpage', {
        student: student
    })
    } catch (err) {
        console.log(err)
    }

}

async function editStudent (req, res) {
    try {
        let id = req.params.id;
        console.log(req.body)
        let student = await Student.findOne({_id: id})
        //student.name,   req.body.name
        student.RollNo = req.body.RollNo;
        student.Name = req.body.Name;
        student.FatherName = req.body.FatherName;
        student.AadharCardNumber = req.body.AadharCardNumber;
        student.MobileNo = req.body.MobileNo;
        await student.save();
        let students = await Student.find({})
        res.render('studentlist', {students: students})

        } catch (err) {
        console.log(err)
    }
}


async function deleteStudent (req, res){


    try {
        let id = req.params.id;
        await Student.deleteOne({_id: id})
        let students = await Student.find({})
        res.render('studentlist', {students: students})
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    addStudent,
    getStudents,
    getStudentById,
    editStudent,
    deleteStudent
}