const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();

// Define storage engine
const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const extension = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + extension);
  },
});

// Initialize upload middleware
const upload = multer({ storage });

app.post('/upload', upload.fields([{ name: 'image' }, { name: 'pdf' }]), (req, res) => {
  const imageFiles = req.files['image'];
  const pdfFiles = req.files['pdf'];
  console.log(req.body.message);

  // Save the image and PDF files to a storage directory or cloud storage service (e.g., AWS S3)~
  // ...

  // Generate the image and PDF references or URLs
  const imageReferences = imageFiles.map((file) => path.join('uploads/', file.filename));
  const pdfReferences = pdfFiles.map((file) => path.join('uploads/', file.filename));
  console.log(imageReferences);

  // Save the image and PDF references to the database or perform any other action
  // ...

  res.json({ imageReferences, pdfReferences });
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
