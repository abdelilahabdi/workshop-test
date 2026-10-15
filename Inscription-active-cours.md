Inscription active unique à un cours

1.
get http://localhost:3000/api/courses 


2.

post  http://localhost:3000/enrollment 




{
  "student_id": "6aced47b255f377a2ac7c8cc",    id student
  "course_id": "6abe8bb6efbf702dbf00166a"      id course
}



3.

post  http://localhost:3000/enrollment


{
  "student_id": "6aced47b255f377a2ac7c8cc",
  "course_id": "6abe8bb6efbf702dbf00166a"
}


4. id modules 

get    http://localhost:3000/api/courses/6abe8bb6efbf702dbf00166a/modules

authorization    bearer token      
token de login user


5.

post   http://localhost:3000/api/modules/6abe8bb6efbf702dbf00166c/resources


body from data 

authorization   barear token men login

title   text    test upload forbiden 
file    file     







src/app.js

app.use("/", enrollment_route);



EnrollmentController

const { student_id, course_id } = req.body;









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







