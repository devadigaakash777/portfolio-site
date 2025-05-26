// Projects.js
import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Caterer Management System',
      description: 'A web platform where users can create customized menus for events. It provides features such as caterer registration, food selection, and user ordering. Built using Django, MySQL, HTML, CSS, and JavaScript.'
    },
    {
      title: 'Movie Ticket Booking System',
      description: 'A desktop application that allows users to select a theater, choose a movie, and book tickets. Implemented using Java Swing and JDBC, following the DAO pattern with interfaces and POJO classes for enhanced flexibility and scalability.'
    },
    {
      title: '3D Home Viewer',
      description: 'A web application that accepts house blueprints from users and manually converts them into 3D models. After processing, users receive a code via email to access their 3D home view online without installing any application.'
    }
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      {projects.map(project => (
        <div className="project-card" key={project.title}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Projects;
