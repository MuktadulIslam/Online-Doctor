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


//  <-----------Doctor Registration-------->
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
    const doctorRegNumber = req.body.doctorRegNumber;
    const specialization = req.body.specialization;
    const username = req.body.username;
    const password = req.body.password;
    const account_status = 'active';

    getConnection().query("INSERT INTO doctors (firstName, lastName, email, phoneNumber, fatherName, motherName, gender, age,doctorRegNumber, specialization, doctorDegree, photo, username, password, account_status, deletion_date) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?,NULL)", [firstName, lastName, email, phoneNumber, fatherName, motherName, gender, age, doctorRegNumber, specialization, doctorDegreeReferences, photoReferences, username, password, account_status],
        (err, result) => {
            if (result) {
                res.send(result);
            } else {
                res.send({ message: err.message })
            }
        }
    )
})



//          <-----------Patient Registration-------->
const storage2 = multer.diskStorage({
    destination: 'patientsFolder/',
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const extension = path.extname(file.originalname);
        cb(null, file.fieldname + '-' + uniqueSuffix + extension);
    },
});

// Initialize upload middleware
const upload2 = multer({ 'storage': storage2 });

app.post('/patientRegister', upload2.single('photo'), (req, res) => {
    const imageFile = req.file;

    // Save the image file to a storage directory or cloud storage service (e.g., AWS S3)
    // ...

    // Generate the image reference or URL
    const photoReferences = path.join('patientsFolder/', imageFile.filename);

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const gender = req.body.gender;
    const age = req.body.age;
    const email = req.body.email;
    const fatherName = req.body.fatherName;
    const motherName = req.body.motherName;
    const username = req.body.username;
    const password = req.body.password;
    const account_status = 'active';

    // console.log(firstName);
    // console.log(lastName);
    // console.log(gender);
    // console.log(age);
    // console.log(email);
    // console.log(fatherName);
    // console.log(motherName);
    // console.log(username);
    // console.log(password);
    // console.log(photoReferences);

    getConnection().query("INSERT INTO patients (username, firstName, lastName, gender, age, email, fatherName, motherName, password, photo, account_status, deletion_date) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NULL)", [username, firstName, lastName, gender, age, email, fatherName, motherName, password, photoReferences, account_status],
        (err, result) => {
            if (result) {
                res.send(result);
            } else {
                res.send({ message: err.message })
            }
        }
    )
})





app.post('/updateProfile', upload2.single('photo'), (req, res) => {
    const imageFile = req.file;
    const firstname = req.body.firstName;
    const lastname = req.body.lastName;
    const gender = req.body.gender;
    const age = req.body.age;
    const email = req.body.email;
    const fathername = req.body.fatherName;
    const mothername = req.body.motherName;
    const username = req.body.username;
    const oldPassword = req.body.oldPassword;
    const newPassword = req.body.newPassword;
    const phonenumber = req.body.phonenumber;
    const user = req.body.user;

    let query = `SELECT * FROM `;
    if (user == 'admin') { query += `admin`; }
    else if (user == 'patients') { query += `patients`; }
    else if (user == 'doctors') { query += `doctors`; }
    else { console.log("Unknown user type!!!!!"); }

    query += ` WHERE username = ? AND password = ?`;

    getConnection().query(query, [username, oldPassword], (err, result) => {
        if (result[0]) {
            let params = [];
            let query = `UPDATE `;
            if (user == 'admin') { query += `admin`; }
            else if (user == 'patients') { query += `patients`; }
            else if (user == 'doctors') { query += `doctors`; }
            else { console.log("Unknown user type!!!!!"); }
            query += ` SET `;

            if (firstname) { query += `firstname = ?, `; params.push(firstname); }
            if (lastname) { query += `lastname = ?, `; params.push(lastname); }
            if (gender) { query += `gender = ?, `; params.push(gender); }
            if (age) { query += `age = ?, `; params.push(age); }
            if (email) { query += `email = ?, `; params.push(email); }
            if (fathername) { query += `fathername = ?, `; params.push(fathername); }
            if (mothername) { query += `mothername = ?, `; params.push(mothername); }
            if (newPassword) { query += `password = ?, `; params.push(newPassword); }
            if (phonenumber) { query += `phonenumber = ?, `; params.push(phonenumber); }
            if (req.body.removePhoto) {
                const photoReferences = 'defaultProfilePic.png';
                query += `photo = ?, `;
                params.push(photoReferences);

                console.log('removeing image');

                fs.unlink(req.body.oldPhoto, function (err) {
                    if (err) {
                        console.error(err);
                    } else {
                        console.log("File removed:");
                    }
                });
            }
            else if (imageFile) {
                const photoReferences = path.join('patientsFolder/', imageFile.filename);
                query += `photo = ?, `;
                params.push(photoReferences);

                if (req.body.oldPhoto !== 'defaultProfilePic.png') {
                    fs.unlink(req.body.oldPhoto, function (err) {
                        if (err) {
                            console.error(err);
                        } else {
                            console.log("File removed:");
                        }
                    });
                }
            }

            query = query.substring(0, query.length - 2);

            query += ` WHERE username = ?`;
            params.push(username);

            // console.log(query);
            // console.log(params);
            // console.log('\n\n');
            // console.log('firstname= ', firstname);
            // console.log('lastname= ', lastname);
            // console.log('gender= ', gender);
            // console.log('age= ', age);
            // console.log('email= ', email);
            // console.log('fathername= ', fathername);
            // console.log('mothername= ', mothername);
            // console.log('username= ', username);
            // console.log('\n\n\n');


            getConnection().query(query, params,
                (err, result) => {
                    if (result) {
                        res.send('Successfully Updated');
                        // console.log(result);
                    } else {
                        res.send('Failed to Update')
                        // console.log(err);
                    }
                });
        }
        else {
            res.send('Old password does not match');
        }
    });
});




app.post('/login', (req, res) => {
    // const { user, username, password } = req.body;
    const user = req.body.user;
    const username = req.body.username;
    const password = req.body.password;
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
    try {
        getConnection().query(query, [username, password], (err, result) => {
            if (err) {
                return res.send(message = "Internal server error");
            }
            else if (result[0].account_status == 'archived') {
                req.send('archived');
            }
            else if (result.length > 0) {
                try {
                    const photoPath = result[0].photo; // Assuming the 'photo' field contains the file path
                    const photoData = fs.readFileSync(photoPath);
                    const base64Photo = photoData.toString('base64');
                    result[0].photo = base64Photo;
                    result[0].photopath = photoPath;
                } catch (err) {
                    const photoPath = 'defaultProfilePic.png'; // Assuming the 'photo' field contains the file path
                    const photoData = fs.readFileSync(photoPath);
                    const base64Photo = photoData.toString('base64');
                    result[0].photo = base64Photo;
                    result[0].photopath = photoPath;
                }

                delete result[0].password;
                result[0].user = user;

                return res.send(result[0]);
            } else {
                return res.send("Wrong username or password");
            }
        });
    } catch (err) {
        console.log('\n\nerr\n\n');
    }
});




app.post("/getAccountInfo", (req, res) => {
    const { user, username } = req.body;
    let query;
    if (user == "doctors") {
        query = `SELECT * FROM doctors WHERE username = ?`;
    }
    else if (user == "patients") {
        query = `SELECT * FROM patients WHERE username = ?`;
    }
    else if (user == "admin") {
        query = `SELECT * FROM admin WHERE username = ?`;
    }

    getConnection().query(query, [username], (err, result) => {
        if (err) {
            res.status(500).send("Internal server error");
        }
        else if (result[0].account_status == 'archived') {
            req.send('archived');
        }
        else {
            try {
                const photoPath = result[0].photo; // Assuming the 'photo' field contains the file path
                const photoData = fs.readFileSync(photoPath);
                const base64Photo = photoData.toString('base64');
                result[0].photo = base64Photo;
                result[0].photopath = photoPath;
            } catch (err) {
                const photoPath = 'defaultProfilePic.png'; // Assuming the 'photo' field contains the file path
                const photoData = fs.readFileSync(photoPath);
                const base64Photo = photoData.toString('base64');
                result[0].photo = base64Photo;
                result[0].photopath = photoPath;
            }

            delete result[0].password;
            result[0].user = user;

            res.send(result[0]);
        }
    });
})


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
