"use client"
import React, { useState, useEffect } from 'react';

function CountdownTimer() {
  // Set the target date 30 days from now
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 30);

  const [countdown, setCountdown] = useState(calculateCountdown(targetDate));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountdown(calculateCountdown(targetDate));
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [targetDate]);

  function calculateCountdown(targetDate) {
    const now = new Date();
    const timeDifference = targetDate - now;

    if (timeDifference <= 0) {
      return '00d 00h 00m 00s'; // Countdown has ended
      }
      
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return ` ${formatNumber(hours)}h ${formatNumber(minutes)}m ${formatNumber(seconds)}s`;
  }

  function formatNumber(number) {
    return number < 10 ? `0${number}` : `${number}`;
  }

  return (
    <div>
      <h2 style={{ margin: '5vh 0 5vh 0'}} >{countdown}</h2>
    </div>
  );
}

export default CountdownTimer;
