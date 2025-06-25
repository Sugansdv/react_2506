import React from 'react';

const Step2 = ({ nextStep, prevStep, formData, handleChange }) => {
  const { feedback } = formData;

  const handleNext = e => {
    e.preventDefault();
    if (feedback) nextStep();
    else alert("Please write your feedback");
  };

  return (
    <div className="container mt-5">
      <h3>Step 2: Feedback</h3>
      <form onSubmit={handleNext}>
        <div className="mb-3">
          <label>Feedback:</label>
          <textarea className="form-control" name="feedback" value={feedback} onChange={handleChange} required />
        </div>
        <button type="button" className="btn btn-secondary me-2" onClick={prevStep}>Back</button>
        <button type="submit" className="btn btn-primary">Next</button>
      </form>
    </div>
  );
};

export default Step2;
