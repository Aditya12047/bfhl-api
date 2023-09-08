const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Middleware for parsing JSON requests
app.use(bodyParser.json());

// Dummy variables to store data
let status = "Success";
let userId = "";
let collegeEmail = "";
let collegeRollNumber = "";
let numberArray = [];
let alphabetArray = [];

app.route('/bfhl')
  .post((req, res) => {
    const { full_name, dob, college_email, college_roll_number, number_array, alphabet_array } = req.body;

    // Generate user_id
    const user_id = `${full_name}_${dob}`;

    // Calculate the highest alphabet
    const highestAlphabet = alphabet_array.reduce((a, b) => a > b ? a : b, 'a');

    // Store data
    userId = user_id;
    collegeEmail = college_email;
    collegeRollNumber = college_roll_number;
    numberArray = number_array;
    alphabetArray = alphabet_array;

    res.json({
      "Status": status,
      "User ID": user_id,
      "College Email ID": college_email,
      "College Roll Number": college_roll_number,
      "Array for Numbers": number_array,
      "Array for Alphabets": alphabet_array,
      "Highest Alphabet": highestAlphabet,
      "is_success": true
    });
  })
  .get((req, res) => {
    // Return a predefined response for GET requests
    res.status(200).json({
      "operation_code": 1
    });
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
