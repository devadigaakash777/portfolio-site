// AboutMe.js
import React from 'react';
import profileImage from '../assets/images/profile.png'; 

const AboutMe = () => {
  return (
    <section id="about-me" className="flex pd-default">
      <div className="flex">
        <img src={profileImage} alt='' className="profile_image" />
      </div>
      <div className="details">
        <h1>Hi, I'm Akash! <span>👋</span></h1>
        <p>I am a web developer passionate about building responsive and user-friendly web applications. This portfolio showcases my skills, projects, and recommendations from clients and colleagues.</p>
      </div>
    </section>
  );
};

export default AboutMe;
