import React from "react";

function Navigation() {
  return (
    <div className="nav-wrapper">
      <div className='navigation'>
        <div className="logo">
          <i class="fab fa-spotify"></i>
          <span className='logo-text'>Isolation Recommendtions</span>
        </div>
        <nav>
          <a>About</a>
          <a>Download</a>
          <a>Help</a>
          <span>||</span>
          <a href='http://spotifysuggesterapp.herokuapp.com/login' className='login-sign-up'>Log In</a>
          <a href='http://spotifysuggesterapp.herokuapp.com/signup' className='login-sign-up'>Sign up</a>
        </nav>
      </div>
    </div>
  );
}

export default Navigation;
