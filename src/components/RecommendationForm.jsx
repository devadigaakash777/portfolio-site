import React, { useState, useRef } from 'react';

const RecommendationForm = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const popupRef = useRef(null); // useRef to get DOM node

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message) {
      const newRec = document.createElement("div");
      newRec.className = "recommendation";
      newRec.innerHTML = `<p>"${message}"</p><h4>- ${name || 'Anonymous'}</h4>`;
      document.getElementById("all_recommendations").appendChild(newRec);

      setName('');
      setMessage('');

      // Access the popup safely via ref
      if (popupRef.current) {
        popupRef.current.classList.add("show");

        setTimeout(() => {
          popupRef.current.classList.remove("show");
        }, 5000);
      }
    }
  };

  return (
    <section id="add-recommendation">
      <h2>Leave a Recommendation</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name (Optional)"
        /><br />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message"
          required
        ></textarea><br />
        <button id="recommend_btn" type="submit">Submit</button>
      </form>
      <div id="popup" ref={popupRef}>
        <p>Thank you for your recommendation!</p>
      </div>
    </section>
  );
};

export default RecommendationForm;
