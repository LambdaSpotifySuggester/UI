import React from 'react';

function Header() {
    return (
      <header className='header'>          
          <div className='text-wrapper'>
              <h2>Isolation Recommendations</h2>
              <h3>A Spotify Song Suggestor</h3>
          </div>
          <button className='start-btn'>Get Started</button>
      </header>  
    );
}

export default Header;