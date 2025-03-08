import React from "react";
import PropTypes from "prop-types";
import "./ViewApplicant.css";

const ViewApplicant = ({ fullName, education, experience, contact,mobileNumber, image }) => {
  const handleContactClick = () => {
    alert(`Contacting ${fullName} at ${contact}`);
  };

  return (
    <div className="ViewApplicant-card">
      <img src={image} alt="Applicant" className="ViewApplicant-img" />
      <div className="ViewApplicant-details">
        <h2 className="ViewApplicant-name">{fullName}</h2>
        <div className="ViewApplicant-section">
          <strong>Education:</strong>
          <span>{education}</span>
        </div>
        <div className="ViewApplicant-section">
          <strong>Experience:</strong>
          <span>{experience}</span>
        </div>
        <div className="ViewApplicant-section">
          <strong>Contact:</strong>
          <span>{contact}</span>
          </div>
        <div className="ViewApplicant-section">
            <strong>Mobile:</strong>
            <span>{mobileNumber}</span>
         </div>
      </div>
      <button className="ViewApplicant-btn" onClick={handleContactClick}>
          Contact Applicant
        </button>
    </div>
  );
};

ViewApplicant.propTypes = {
  fullName: PropTypes.string.isRequired,
  education: PropTypes.string.isRequired,
  experience: PropTypes.string.isRequired,
  contact: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default ViewApplicant;