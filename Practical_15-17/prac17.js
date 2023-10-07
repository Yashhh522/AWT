const express = require('express');
const { body, validationResult } = require('express-validator');
const expressSanitizer = require('express-sanitizer');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(expressSanitizer());

//middleware for validation
const validateCourseFields = [
  body('universityName').trim().escape(),
  body('instituteName').trim().escape(),
  body('departmentName').trim().escape(),
  body('courseName').trim().escape(),
  body('courseCode').trim().escape(),
  body('semester').trim().escape(),
];

//api for rendering the course page form
app.get('/course', (req, res) => {
  res.send(`
    <h1>Course-Page</h1>     
    <form action="/course" method="post">
      <label for="universityName">University Name:</label>
      <input type="text" id="universityName" name="universityName" required>
      <br><br>
      <label for="instituteName">Institute Name:</label>
      <input type="text" id="instituteName" name="instituteName" required>
      <br><br>
      <label for="departmentName">Department Name:</label>
      <input type="text" id="departmentName" name="departmentName" required>
      <br><br>
      <label for="courseName">Course Name:</label>
      <input type="text" id="courseName" name="courseName" required>
      <br><br>
      <label for="courseCode">Course Code:</label>
      <input type="text" id="courseCode" name="courseCode" required>
      <br><br>
      <label for="semester">Semester:</label>
      <input type="text" id="semester" name="semester" required>
      <br><br>
      <input type="submit" value="Submit">
    </form>`);
});

// Endpoint for handling form submission
app.post('/course', validateCourseFields, (req, res) => {
  // Check for validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  //accessing sanitized data
  const {
    universityName,
    instituteName,
    departmentName,
    courseName,
    courseCode,
    semester,
  } = req.body;

  res.send(`
  <h2>Course Details</h2>
  <p><strong>University name : </strong> ${universityName}</p>
  <p><strong>Institute name : </strong> ${instituteName}</p>
  <p><strong>Department name : </strong> ${departmentName}</p>
  <p><strong>Course name : </strong> ${courseName}</p>
  <p><strong>Course-Code : </strong> ${courseCode}</p>
  <p><strong>Semester : </strong> ${semester}</p>
  <br>
  <p><strong>Form submitted successfully!</strong></p>`);
});

  
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
