import React from "react";
import PropTypes from "prop-types";
import "./ApplicationCard.css";

const ApplicationCard = ({ image, month, title, vendor, description, salary, location,time, status }) => {
  return (
      <div className="View-Application-Container-card">
        <div className="View-Application-Container-image-container">
          <img src={image} alt="Job" />
        </div>
        <div className="View-Application-Container-details">
          <span className="View-Application-Container-month-badge">{month}</span>
          <div className="View-Application-Container-job-title">{title}</div>
          <div className="View-Application-Container-vendor-name">{vendor}</div>
          <div className="View-Application-Container-description">{description}</div>
          <div className="View-Application-Container-salary">Salary: {salary}</div>
          <div className="View-Application-Container-location">Location: {location}</div>
          <div className="View-Application-Container-time"> {time}</div>
          <div className={
            status === "Accepted"
              ? "View-Application-Container-Application-status-Accepted"
              : "View-Application-Container-Application-status-Rejected"
          }>
            {status}
          </div>
        </div>
      </div>
  );
};

ApplicationCard.propTypes = {
  image: PropTypes.string.isRequired,
  month: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  vendor: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  salary: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  time:  PropTypes.string,
  status: PropTypes.string.isRequired,
  
};

export default ApplicationCard;