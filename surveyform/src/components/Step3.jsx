import React from 'react';

const Step3 = ({ nextStep, prevStep, formData, handleChange }) => {
  const { rating } = formData;

  const handleNext = e => {
    e.preventDefault();
    if (rating) nextStep();
    else alert("Please select a rating");
  };

  return (
    <div className="container mt-5">
      <h3>Step 3: Rate Us</h3>
      <form onSubmit={handleNext}>
        <div className="mb-3">
          <label>Rating:</label>
          <select className="form-control" name="rating" value={rating} onChange={handleChange} required>
            <option value="">-- Select Rating --</option>
            <option value="1">1 - Poor</option>
            <option value="2">2 - Average</option>
            <option value="3">3 - Good</option>
            <option value="4">4 - Very Good</option>
            <option value="5">5 - Excellent</option>
          </select>
        </div>
        <button type="button" className="btn btn-secondary me-2" onClick={prevStep}>Back</button>
        <button type="submit" className="btn btn-success">Submit</button>
      </form>
    </div>
  );
};

export default Step3;
