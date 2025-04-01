import React, { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import "./ViewApplicant.css";

const ViewApplicant = ({ applicantId }) => {
  const [applicant, setApplicant] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8086/viewApplicants`)
      .then(response => setApplicant(response.data))
      .catch(error => console.error("Error fetching applicant:", error));
  }, [applicantId]);

  if (!applicant) return <p>No applications.....</p>;

  return (
    <div className="ViewApplicant-card">
      <img src={applicant.image} alt="Applicant" className="ViewApplicant-img" />
      <div className="ViewApplicant-details">
        <h2 className="ViewApplicant-name">{applicant.fullName}</h2>
        <div className="ViewApplicant-section"><strong>Education:</strong> <span>{applicant.education}</span></div>
        <div className="ViewApplicant-section"><strong>Experience:</strong> <span>{applicant.experience}</span></div>
        <div className="ViewApplicant-section"><strong>Contact:</strong> <span>{applicant.contact}</span></div>
        <div className="ViewApplicant-section"><strong>Mobile:</strong> <span>{applicant.mobileNumber}</span></div>
      </div>
      <button className="ViewApplicant-btn" onClick={() => alert(`Contacting ${applicant.fullName} at ${applicant.contact}`)}>
        Contact Applicant
      </button>
    </div>
  );
};

ViewApplicant.propTypes = {
  applicantId: PropTypes.number.isRequired,
};

export default ViewApplicant;
