import job from '../Pictures/job.jpeg'
import React, { useState } from 'react';
import '../PageStyles/Header.css';

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header id="Header" className="header-container">
      <nav className="nav-bar">
        <div className="logos">
          <img className="img" src={job}/>
        </div>
        <div className="nav-links desktop-only">
          <a href="#Home" className="nav-item">Home</a>
          <a href="#About" className="nav-item">About</a>
          
          <a href="#Contacts" className="nav-item">Contacts</a>
        </div>
        <div className="auth-buttons desktop-only">
          <button className="login-btn">Login</button>
          <button className="signup-btn">Sign Up</button>
        </div>
        <div className="mobile-menu-toggle">
          <button onClick={toggleMenu} className="menu-btn">
            <svg className="menu-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <a href="#Home" className="mobile-nav-item">Home</a>
        <a href="#About" className="mobile-nav-item">About</a>
       
        <a href="#Contacts" className="mobile-nav-item">Contacts</a>
        <button className="join-btn">JOIN ME</button>
        <button className="rate-btn">RATE ME</button>
      </div>
    </header>
  );
}

export default Header;
