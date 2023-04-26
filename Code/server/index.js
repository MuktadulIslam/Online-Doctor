const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

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

app.post('/doctorRegister', (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const gender = req.body.gender;
  const age = req.body.age;
  const phoneNumber = req.body.phoneNumber;
  const email = req.body.email;
  const fatherName = req.body.fatherName;
  const motherName = req.body.motherName;
  const photo = req.body.photo;
  const doctorRegNumber = req.body.doctorRegNumber;
  const doctorDegree = req.body.doctorDegree;
  const specialization = req.body.specialization;
  const username = req.body.username;
  const password = req.body.password;

  const imgsrc = 'http://127.0.0.1:3000/images/' + photo


  getConnection().query("INSERT INTO doctors (firstName, lastName, email, phoneNumber, fatherName, motherName, gender, age,doctorRegNumber, specialization, doctorDegree, photo, username, password) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [firstName, lastName, email, phoneNumber, fatherName, motherName, gender, age, doctorRegNumber, specialization, doctorDegree, photo, username, password],
    (err, result) => {
      if (result) {
        res.send(result);
      } else {
        res.send({ message: err.message})
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
        res.send({ message: err.message})
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
  getConnection().query("SELECT username, firstname, lastname, gender, age, email, phonenumber, specialization, photo FROM doctors",(err, result) => {
    // const responseData = { doctors: result };
    // console.log('hello');
    // const resData=  responseData.json();
    // console.log(resData);
    // console.log('hi');
    if (result) {
      res.send({ message: result});
    } else {
      res.send({ message: err.message})
    }
  }
)
})


app.listen(3001, () => {
  console.log("Running backend server on port 3001");
});