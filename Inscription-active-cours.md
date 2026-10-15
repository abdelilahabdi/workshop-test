Inscription active unique à un cours


post  http://localhost:3000/enrollment 



{
  "student_id": "6aced47b255f377a2ac7c8cc",    id student
  "course_id": "6abe8bb6efbf702dbf00166a"      id course
}






















src/routes/enrollment_Routes.js

const express = require("express");
const route = express.Router();

route.post("/enrollment", enrollment_create);
route.get("/enrollment", enrollment_getAll);



controller

const { student_id, course_id } = req.body;

src/controllers/EnrollmentController.js


const existingEnrollment = await Enrollment.findOne({
    student_id,
    course_id
});

if (existingEnrollment) {
    return res.status(409).json({
        message: "Student is already enrolled in this course"
    });
}




