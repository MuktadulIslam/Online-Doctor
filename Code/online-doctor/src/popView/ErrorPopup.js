import React,  { useState } from 'react'
import './popupCss.css'
import image from'./error.png'
import AnimatedPage from './AnimatedPage';

export default function SuccessPopup(props) {
  const [className, setClassName] = useState('open-popup');
  return (
    <AnimatedPage>  
    <div>
        <div className={className} id='error-popup'>
            <img src= {image} alt='Successful'/>
            <h2 >Error!!!</h2>
            <p>{props.message}</p>
            <button type='button' onClick={() => setClassName('hide-popup')}>OK</button>
        </div>
    </div>
    </AnimatedPage>
  )
}