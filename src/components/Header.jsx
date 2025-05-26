// Header.js
import React from 'react';
import gmailImg from '../assets/images/gmail.png';
import phoneImg from '../assets/images/phone.png';

const Header = () => {
  return (
    <header id="home">
      <div className="logo top">
        <h2 className="profile_name">Akash</h2>
        <div className="contact_info">
          <div><img src={gmailImg} alt="email icon" /> <span>xyz@gmail.com</span></div>
          <div><img src={phoneImg} alt="phone icon" /> <span>12XXXXX638</span></div>
        </div>
      </div>
      <nav className="menu top">
        <div className="topmenu"><a href="#about-me">About Me</a></div>
        <div className="topmenu"><a href="#skills">Skills</a></div>
        <div className="topmenu"><a href="#projects">Projects</a></div>
        <div className="topmenu"><a href="#recommendations">Recommendations</a></div>
      </nav>
    </header>
  );
};

export default Header;
