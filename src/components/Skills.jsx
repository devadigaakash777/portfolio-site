import React from 'react';
import htmlImg from '../assets/images/html5.png';
import cssImg from '../assets/images/css.png';
import jsImg from '../assets/images/js.png';
import reactImg from '../assets/images/react.png';
import nodeImg from '../assets/images/nodejs.png';
import djangoImg from '../assets/images/django.png';
import cppImg from '../assets/images/cpp.png';     
import javaImg from '../assets/images/java.png';   

const Skills = () => {
  const skills = [
    { name: 'HTML', years: '3 years', img: htmlImg },
    { name: 'CSS', years: '3 years', img: cssImg },
    { name: 'JavaScript', years: '3 years', img: jsImg },
    { name: 'React', years: '1 year', img: reactImg },
    { name: 'Node.js', years: '1 year', img: nodeImg },
    { name: 'Django', years: '2 years', img: djangoImg },
    { name: 'CPP', years: '2 years', img: cppImg },
    { name: 'Java', years: '2 years', img: javaImg },
  ];

  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="all_skills flex">
        {skills.map(skill => (
          <div className="skill" key={skill.name}>
            <img src={skill.img} alt={skill.name} />
            <p>{skill.name}<br />{skill.years}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
