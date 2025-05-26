// Recommendations.js
import React from 'react';

const Recommendations = () => {
  const recommendations = [
    '“ Akash is a great team player and adapts quickly to changing requirements. ”',
    '“ Working with Akash was a fantastic experience. Always eager to help and take initiatives. ”',
    '“ Excellent problem-solver with a keen eye for clean design and usability. ”'
  ];

  return (
    <section id="recommendations">
      <h2>Recommendations</h2>
      <div id="all_recommendations">
        {recommendations.map((rec, index) => (
          <div className="recommendation" key={index}>{rec}</div>
        ))}
      </div>
    </section>
  );
};

export default Recommendations;
