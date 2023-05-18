const express = require('express');
const app = express();
const mysql = require('mysql');
const multer = require('multer');
const path = require('path');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'onlinedoctor',
});

connection.connect((err) => {
  if (err) {
    console.log('Error connecting to database');
  } else {
    console.log('Connected to database');
  }
});

const storage = multer.diskStorage({
  destination: './uploads',
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + '-' + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000000 },
}).single('image');

// app.post('/upload', (req, res) => {
//   // console.log(req.file.buffer);
//   // upload(req, res => {})
//   upload(req, res, (err) => {
//     if (err) {
//       console.log(err);
//       res.send('Error uploading file');
//     } else {
//       console.log('File uploaded successfully');
//       const img = req.file.filename;
//       const sql = `INSERT INTO images (name, data) VALUES (?, ?)`;
//       const data = [img, req.file.buffer];
//       console.log(data)
//       res.send({message:'http://localhost:3001/uploads' + img})
//       // connection.query(sql, data, (err, result) => {
//       //   if (err) {
//       //     console.log('Error inserting image data');
//       //     console.log(err);
//       //     res.send('Error inserting image data');
//       //   } else {
//       //     console.log('Image data inserted successfully');
//       //     res.send('Image uploaded successfully');
//       //   }
//       // });
//     }
//   });
// });

app.post('/upload', upload.single('image'), (req, res) => {
  const imageFile = req.file;

  // Save the image file to a storage directory or cloud storage service (e.g., AWS S3)
  // ...

  // Generate the image reference or URL
  const imageReference = path.join('uploadsImage/', imageFile.filename); // Example: "uploads/image123.jpg"

  // Save the image reference to the database or perform any other action
  // ...

  res.json({ imageReference });
});

app.listen(3001, () => {
  console.log('Server started on port 3001');
});
