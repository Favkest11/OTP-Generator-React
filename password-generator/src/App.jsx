import { useState, useEffect } from 'react'
import './index.css';
const OTPGenerator = () => {
  const [texth, setTexth] = useState("Click 'Generate OTP' to get a code");
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    if (timer === 0) return;

    const intervalId = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timer]);

  function passwordGenerator() {
    const min = 111111;
    const max = 999999;
    setTexth(Math.floor(Math.random() * (max - min + 1)) + min);
    setTimer(5);
  }

  return (
    <div className="container">
      <h1 id="otp-title">OTP Generator</h1>
      <h2 id="otp-display">{texth}</h2>
      <p id="otp-timer">
        {timer > 0
          ? `Expires in: ${timer} seconds`
          : texth !== "Click 'Generate OTP' to get a code"
          ? "OTP expired. Click the button to generate a new OTP."
          : ""}
      </p>
      <button
        onClick={passwordGenerator}
        id="generate-otp-button"
        disabled={timer > 0}
      >
        Generate OTP
      </button>
    </div>
  );
};

export default OTPGenerator;
