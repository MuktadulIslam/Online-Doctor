import React, { useState} from 'react'
import AnimatedPage from './AnimatedPage';
import './popupCss.css'

export default function ProfilePopup(props) {
    const [className, setClassName] = useState('open-profile-popup');

    return (
        <AnimatedPage>
            <div className={className}>
                {props.profile}
                <button type='button' onClick={() => setClassName('hide-profile-popup')}>Close</button>
            </div>
        </AnimatedPage>
    )
}
