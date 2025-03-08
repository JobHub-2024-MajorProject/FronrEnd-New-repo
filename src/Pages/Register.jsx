import React, { useState, useEffect } from "react";
import "./Register.css";

const Register = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [step, setStep] = useState(1);
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(120);
  const [isResendVisible, setIsResendVisible] = useState(false);

  useEffect(() => {
    let countdown;
    if (step === 3 && timer > 0) {
      countdown = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer === 1) {
            clearInterval(countdown);
            setIsResendVisible(true); // Show "Resend OTP" when timer ends
          }
          return prevTimer - 1;
        });
      }, 1000);
    }
    return () => clearInterval(countdown);
  }, [step, timer]);

  const handleGoogleSignUp = () => {
    setShowPopup(true);
  };

  const handleOptionClick = (role) => {
    alert(`You selected ${role}`);
    setShowPopup(false);
  };

  const handleResendOtp = () => {
    alert("OTP has been resent to your mobile number.");
    setTimer(120);
    setIsResendVisible(false); // Hide "Resend OTP" when restarting the timer
  };

  return (
    <div className="registration-container" id="signup">
      <div className="logo">
        <img src="/JobHub Logo.png" alt="Company Logo" />
      </div>

      <div className="registration-left">
        {step === 1 && (
          <>
            <h2>Register</h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Username" required />
              <input type="email" placeholder="Email" required />
              <input
                type="tel"
                placeholder="Mobile Number"
                required
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
              />
              <input type="password" id="create-password" placeholder="Create Password" required />
              <input type="password" id="confirm-password" placeholder="Confirm Password" required />
              <div>
                <label>
                  <input type="radio" name="role" value="recruiter" required /> Recruiter
                </label>
                <label>
                  <input type="radio" name="role" value="applicant" required /> Applicant
                </label>
              </div>
              <button type="button" onClick={() => setStep(2)}>Register</button>
              <div className="line-text">
                <span>OR</span>
              </div>
              </form>
              <button type="button" className="google-register" onClick={handleGoogleSignUp}>
                Sign up with Google
              </button>
           
          </>
        )}

        {step === 2 && (
          <div className="register-verification-container">
            <h2>Verify Mobile Number</h2>
            <input
              type="tel"
              value={mobileNumber}
              placeholder="Enter Mobile Number"
              onChange={(e) => setMobileNumber(e.target.value)}
            />
            <button type="button" onClick={() => setStep(3)}>Next</button>
          </div>
        )}

        {step === 3 && (
          <div className="otp-container">
            <h2>Enter OTP</h2>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            {!isResendVisible ? (
              <p className="otp-timer">
                Resend OTP in {Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, "0")}
              </p>
            ) : (
              <p className="resend-otp" onClick={handleResendOtp}>Resend OTP</p>
            )}
             <button type="button" onClick={() => setStep(2)} className="changeNumber">Change Number</button>
            <button type="submit">Register</button>
           
          </div>
        )}
      </div>

      <div className="registration-right">
        <img src="src/assets/Join-us.png" alt="Registration" />
        <p>Join us and explore exciting opportunities tailored to your skills.</p>
      </div>

      {showPopup && (
        <div className="registration-popup-overlay">
          <div className="registration-popup-content">
            <button className="registration-popup-close" onClick={() => setShowPopup(false)}>X</button>
            <div className="registration-popup-left" onClick={() => handleOptionClick("Recruiter")}> 
              <img src="src/assets/recruiter.png" alt="Recruiter" />
              <p>Sign up as a Recruiter</p>
            </div>
            <div className="registration-popup-right" onClick={() => handleOptionClick("Applicant")}> 
              <img src="src/assets/applicant.png" alt="Applicant" />
              <p>Sign up as an Applicant</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
