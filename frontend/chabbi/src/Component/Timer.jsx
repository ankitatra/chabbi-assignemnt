import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [timer, setTimer] = useState(180); // 3 minutes in seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="navbar">
      <span className="timer">{formatTime(timer)}</span>
    </div>
  );
};

export default Navbar;
