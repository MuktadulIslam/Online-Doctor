// import React, { useState } from 'react';
// import axios from 'axios';

// const ImageUploader = () => {
//   const [selectedImage, setSelectedImage] = useState(null);

//   const handleImageChange = (event) => {
//     setSelectedImage(event.target.files[0]);
//   };

//   const handleUpload = async () => {
//     try {
//       const formData = new FormData();
//       formData.append('img', selectedImage);
//       formData.append('imgname', 'Muktadul');

//       await axios.post('http://localhost:3001/upload', formData).then((response) => {
//           console.log(response);
//       }).catch((error) => {
//         console.log('error\n' + error);
//       });
//     } catch (error) {
//       console.error('Error uploading image:', error);
//     }
//   };

//   return (
//     <div>
//       <input type="file" accept="image/*" onChange={(e) => {setSelectedImage(e.target.files[0])}} />
//       <button onClick={handleUpload}>Upload</button>
//     </div>
//   );
// };

// export default ImageUploader;





// import React, { useState } from 'react';
// import axios from 'axios';

// const FileUploader = () => {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [selectedPDF, setSelectedPDF] = useState(null);

//   const handleImageChange = (event) => {
//     setSelectedImage(event.target.files[0]);
//   };

//   const handlePDFChange = (event) => {
//     setSelectedPDF(event.target.files[0]);
//   };

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();

//     const formData = new FormData();
//     formData.append('image', selectedImage);
//     formData.append('pdf', selectedPDF);
//     try {
//       const formData = new FormData();
//       formData.append('image', selectedImage);
//       formData.append('pdf', selectedPDF);
//       formData.append('message', 'Bindu');

//       await axios.post('http://localhost:3001/upload', formData).then((response) => {
//           console.log(response);
//       });
//     } catch (error) {
//       console.error('Error uploading image:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleFormSubmit}>
//       <div>
//         <label htmlFor="image">Image:</label>
//         <input type="file" id="image" onChange={handleImageChange} />
//       </div>
//       <div>
//         <label htmlFor="pdf">PDF:</label>
//         <input type="file" id="pdf" onChange={handlePDFChange} />
//       </div>
//       <button type="submit">Upload Files</button>
//     </form>
//   );
// };

// export default FileUploader;




import React from 'react'

export default function Test() {
    return (
        <section className="bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 mb-4 mb-sm-5">
                        <div className="card card-style1 border-0">
                            <div className="card-body p-1-9 p-sm-2-3 p-md-6 p-lg-7">
                                <div className="row align-items-center">
                                    <div className="col-lg-6 mb-4 mb-lg-0">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="..."/>
                                    </div>
                                    <div className="col-lg-6 px-xl-10">
                                        <div className="bg-secondary d-lg-inline-block py-1-9 px-1-9 px-sm-6 mb-1-9 rounded">
                                            <h3 className="h2 text-white mb-0">John mark Doe Kyzer</h3>
                                            <span className="text-primary">Coach</span>
                                        </div>
                                        <ul className="list-unstyled mb-1-9">
                                            <li className="mb-2 mb-xl-3 display-28"><span className="display-26 text-secondary me-2 font-weight-600">Position:</span> Coach</li>
                                            <li className="mb-2 mb-xl-3 display-28"><span className="display-26 text-secondary me-2 font-weight-600">Experience:</span> 10 Years</li>
                                            <li className="mb-2 mb-xl-3 display-28"><span className="display-26 text-secondary me-2 font-weight-600">Email:</span> edith@mail.com</li>
                                            <li className="mb-2 mb-xl-3 display-28"><span className="display-26 text-secondary me-2 font-weight-600">Website:</span> www.example.com</li>
                                            <li className="display-28"><span className="display-26 text-secondary me-2 font-weight-600">Phone:</span> 507 - 541 - 4567</li>
                                        </ul>
                                        <ul className="social-icon-style1 list-unstyled mb-0 ps-0">
                                            <li><a href="#!"><i className="ti-twitter-alt"></i></a></li>
                                            <li><a href="#!"><i className="ti-facebook"></i></a></li>
                                            <li><a href="#!"><i className="ti-pinterest"></i></a></li>
                                            <li><a href="#!"><i className="ti-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-lg-12 mb-4 mb-sm-5">
                        <div>
                            <span className="section-title text-primary mb-3 mb-sm-4">About Me</span>
                            <p>Edith is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <p className="mb-0">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.</p>
                        </div>
                    </div> */}
                    {/* <div className="s */}
                </div>
            </div>
        </section>
    )
}
