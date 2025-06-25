import React, { useState } from 'react';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Confirmation from './components/Confirmation';

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: '',
    rating: ''
  });

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  switch (step) {
    case 1:
      return <Step1 nextStep={nextStep} formData={formData} handleChange={handleChange} />;
    case 2:
      return <Step2 nextStep={nextStep} prevStep={prevStep} formData={formData} handleChange={handleChange} />;
    case 3:
      return <Step3 nextStep={nextStep} prevStep={prevStep} formData={formData} handleChange={handleChange} />;
    case 4:
      return <Confirmation formData={formData} />;
    default:
      return null;
  }
}

export default App;
