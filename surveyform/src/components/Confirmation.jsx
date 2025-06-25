import React from 'react';

const Confirmation = ({ formData }) => {
  const { name, email, feedback, rating } = formData;

  return (
    <div className="container mt-5">
      <h3>🎉 Thank You!</h3>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Feedback:</strong> {feedback}</p>
      <p><strong>Rating:</strong> {rating}</p>
      <p>We appreciate your response.</p>
    </div>
  );
};

export default Confirmation;
