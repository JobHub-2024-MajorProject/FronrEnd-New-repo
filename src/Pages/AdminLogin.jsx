import React, { useState, useEffect } from "react";
import "./AdminLogin.css";

const AdminLogin = () => {
  const [showOtp, setShowOtp] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [timerRunning, setTimerRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (timerRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setTimerRunning(false);
    }
    return () => clearInterval(timer);
  }, [timeLeft, timerRunning]);

  const handleVerifyClick = () => {
    setShowOtp(true);
    setTimeLeft(30);
    setTimerRunning(true);
  };

  const handleResendOtp = () => {
    setTimeLeft(30);
    setTimerRunning(true);
  };

  return (
    <div className="Admin-Login">
      <section>
        {[...Array(200)].map((_, i) => (
          <span key={i}></span>
        ))}
        <div className="signin">
          <div className="content">
            <h2>Sign In</h2>
            <div className="form" id="loginForm" style={{ display: showOtp ? "none" : "block" }}>
              <div className="inputBox">
                <input type="text" required />
                <i>Username</i>
              </div>
              <div className="inputBox">
                <input type="password" required />
                <i>Password</i>
              </div>
              <div className="inputBox">
                <button className="verify-button" onClick={handleVerifyClick}>
                  Verify
                </button>
              </div>
            </div>

            <div className="otp-section" id="otpSection" style={{ display: showOtp ? "block" : "none" }}>
              <div className="inputBox">
                <input type="text" placeholder="Enter OTP" required />
              </div>
              {timeLeft > 0 ? (
                <div className="timer">Time left: {timeLeft}s</div>
              ) : (
                <div className="resend-text" onClick={handleResendOtp}>
                  Resend OTP
                </div>
              )}
              <button className="login-button">Login</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminLogin;
