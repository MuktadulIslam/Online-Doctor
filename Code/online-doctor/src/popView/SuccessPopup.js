import React,  { useState } from 'react'
import './popupCss.css'
import image from'./successTick.png'
import AnimatedPage from './AnimatedPage';

export default function SuccessPopup(props) {
  const [className, setClassName] = useState('open-popup');
  const popUpType = 'successPopup'

  // const openPopup = () => {
  //   setClassName('open-popup');
  // };

  return (
    <AnimatedPage>  
    <div>
      {/* <button type='button' onClick={openPopup}>Show</button> */}
        <div className={className} id='success-popup'>
            <img src= {image} alt='Successful'/>
            <h2 id='abcd'>Thank You!</h2>
            <p>{props.message}</p>
            <button type='button' onClick={() => setClassName('hide-popup')}>OK</button>
        </div>
    </div>
    </AnimatedPage>
  )
}