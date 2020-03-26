import React from 'react';

function Header() {
    return (
      <header className='header'>          
          <div className='text-wrapper'>
              <h2>Spotify Suggestor</h2>
              <h3>Isolation Recommendations</h3>
          </div>
          <button className='start-btn'>Get Started</button>
      </header>  
    );
}

export default Header;