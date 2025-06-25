import React from 'react';

const Step1 = ({ nextStep, formData, handleChange }) => {
  const { name, email } = formData;

  const handleNext = e => {
    e.preventDefault();
    if (name && email) nextStep();
    else alert("Please fill all fields");
  };

  return (
    <div className="container mt-5">
      <h3>Step 1: Basic Info</h3>
      <form onSubmit={handleNext}>
        <div className="mb-3">
          <label>Name:</label>
          <input type="text" className="form-control" name="name" value={name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Email:</label>
          <input type="email" className="form-control" name="email" value={email} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-primary">Next</button>
      </form>
    </div>
  );
};

export default Step1;
