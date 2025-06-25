import React, { useEffect, useState } from 'react';

const CountdownTimer = () => {
  const targetDate = new Date('2025-12-31T23:59:59').getTime();

  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const gap = targetDate - now;

      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;

      const days = Math.floor(gap / day);
      const hours = Math.floor((gap % day) / hour);
      const minutes = Math.floor((gap % hour) / minute);
      const seconds = Math.floor((gap % minute) / second);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="container text-center mt-5">
      <h2 className="mb-4">Countdown to New Year 2026 🎆</h2>
      <div className="row justify-content-center">
        {['Days', 'Hours', 'Minutes', 'Seconds'].map((label, i) => {
          const value = Object.values(timeLeft)[i] ?? '00';
          return (
            <div className="col-6 col-md-2 mb-3" key={label}>
              <div className="card shadow">
                <div className="card-body">
                  <h3 className="card-title">{value.toString().padStart(2, '0')}</h3>
                  <p className="card-text">{label}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CountdownTimer;
