import React, { useState } from 'react';

function MyComponent() {
  const [imageSrc, setImageSrc] = useState('');

  const handleImageUpload2 = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImageSrc(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const handleClick = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.onchange = (event) => {
      const file = event.target.files[0];
      console.log(file);
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result);
      };
  
      reader.readAsDataURL(file);
    };

    input.click();
  };

  return (
    <div>
      <button onClick={handleClick}>Upload Image</button>
      {imageSrc && <img src={imageSrc} alt="Uploaded" style={{width:'200px'}}/>}
    </div>
  );
}

export default MyComponent;
