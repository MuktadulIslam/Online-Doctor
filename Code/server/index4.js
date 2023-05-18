const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const multer = require('multer');
const path = require('path');
const fs = require('fs');


const app = express();

app.use(express.json());
app.use(cors());

// const con = mysql.createConnection({
//   user: "root",
//   host: "localhost",
//   password: "",
//   database: "onlinedoctor"
// })

function getConnection() {
    return mysql.createConnection({
        user: "root",
        host: "localhost",
        password: "",
        database: "onlinedoctor"
    });
}


//          <-----------Doctor Registration-------->
// Define storage engine
const storage = multer.diskStorage({
    destination: 'doctorsFolder/',
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      const extension = path.extname(file.originalname);
      cb(null, file.fieldname + '-' + uniqueSuffix + extension);
    },
  });
  
  // Initialize upload middleware
  const upload = multer({ storage });

  app.post('/doctorRegister', upload.fields([{ name: 'photo' }, { name: 'doctorDegree' }]), (req, res) => {
    const photo = req.files['photo'];
    const doctorDegree = req.files['doctorDegree'];
  
    // Generate the image and PDF references or URLs
    const photoReferences = photo.map((file) => path.join('doctorsFolder/', file.filename));
    const doctorDegreeReferences = doctorDegree.map((file) => path.join('doctorsFolder/', file.filename));


    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const gender = req.body.gender;
    const age = req.body.age;
    const phoneNumber = req.body.phoneNumber;
    const email = req.body.email;
    const fatherName = req.body.fatherName;
    const motherName = req.body.motherName;
    // const photo = req.body.photo;
    const doctorRegNumber = req.body.doctorRegNumber;
    // const doctorDegree = req.body.doctorDegree;
    const specialization = req.body.specialization;
    const username = req.body.username;
    const password = req.body.password;

    // console.log(firstName, "  ", lastName,  "  ",  email, "  ", fatherName, "   ", motherName);
    console.log(firstName);
    getConnection().query("INSERT INTO doctors (firstName, lastName, email, phoneNumber, fatherName, motherName, gender, age,doctorRegNumber, specialization, doctorDegree, photo, username, password) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [firstName, lastName, email, phoneNumber, fatherName, motherName, gender, age, doctorRegNumber, specialization, doctorDegreeReferences, photoReferences, username, password],
        (err, result) => {
            if (result) {
                res.send(result);
            } else {
                res.send({ message: err.message })
            }
        }
    )
})


app.post('/patientRegister', (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const gender = req.body.gender;
    const age = req.body.age;
    const email = req.body.email;
    const fatherName = req.body.fatherName;
    const motherName = req.body.motherName;
    const photo = req.body.photo;
    const username = req.body.username;
    const password = req.body.password;

    getConnection().query("INSERT INTO patients (firstName, lastName, email, age,  gender, fatherName, motherName, photo, username, password) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [firstName, lastName, email, age, gender, fatherName, motherName, photo, username, password],
        (err, result) => {
            if (result) {
                res.send(result);
            } else {
                res.send({ message: err.message })
            }
        }
    )
})



app.post("/login", (req, res) => {
    const { user, username, password } = req.body;
    let query;
    if (user == "doctors") {
        query = `SELECT * FROM doctors WHERE username = ? AND password = ?`;
    }
    else if (user == "patients") {
        query = `SELECT * FROM patients WHERE username = ? AND password = ?`;
    }
    else if (user == "admin") {
        query = `SELECT * FROM admin WHERE username = ? AND password = ?`;
    }

    getConnection().query(query, [username, password], (err, result) => {
        if (err) {
            res.status(500).send("Internal server error");
        } else if (result.length > 0) {
            res.send(user);
        } else {
            res.send("Wrong username or password");
        }
    });
});


app.post('/bookAppointment', (req, res) => {

    const password = req.body.password;
    const doctor = req.body.doctor;
    const timeDate = req.body.timeDate;
    const username = "rana";


    getConnection().query("INSERT INTO appointment (username, doctor, timeDate) VALUES (?, ?, ?)", [username, doctor, timeDate],
        (err, result) => {
            if (result) {
                res.send(result);
            } else {
                res.send({ message: "ENTER CORRECT ASKED DETAILS!" })
            }
        }
    )
})

app.post('/allDoctorList', (req, res) => {
    getConnection().query("SELECT username, firstname, lastname, gender, age, email, phonenumber, specialization, photo FROM doctors", (err, result) => {
        let doctorList = [];
        result.forEach((doctorInfo) => {
            const photoPath = doctorInfo.photo; // Assuming the 'photo' field contains the file path
            const photoData = fs.readFileSync(photoPath);
            const base64Photo = photoData.toString('base64');
      
            doctorList.push({
              username: doctorInfo.username,
              firstname: doctorInfo.firstname,
              lastname: doctorInfo.lastname,
              gender: doctorInfo.gender,
              age: doctorInfo.age,
              email: doctorInfo.email,
              phonenumber: doctorInfo.phonenumber,
              specialization: doctorInfo.specialization,
              photo: base64Photo,
            });
          });

        // console.log(doctorList);
        if (result) {
            res.send({ message: doctorList });
        } else {
            res.send({ message: err.message })
        }
    }
    )
})


app.listen(3001, () => {
    console.log("Running backend server on port 3001");
});