import React from 'react';
import InfoSlide from './carousel';

function MainSection() {
    return (
        <div className='main-container'>
            <InfoSlide />
            <div className='try-it-section'>
                <div className='text-wrapper'>
                    <h2>What are you waiting for?</h2>
                    <h3>Join the party!</h3>
                </div>
                <button className='btn try-it'>Try it free</button>
            </div>
        </div>
  )  
}

export default MainSection;