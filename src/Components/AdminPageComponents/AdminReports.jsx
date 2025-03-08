// AdminReports.jsx
import React from "react";
import "./AdminReports.css";
import { FaTimes } from "react-icons/fa";

const reports = {
  issues: [
    { id: 1, username: "John Doe", issue: "Website not loading properly" },
    { id: 2, username: "Alice Smith", issue: "Unable to login" },
  ],
  companies: [
    {
      id: 1,
      username: "Mark Wilson",
      company: "XYZ Pvt Ltd",
      type: "Fraudulent Activities",
      description: "Fake job postings with no real offers.",
    },
    {
      id: 2,
      username: "Emma Brown",
      company: "ABC Solutions",
      type: "Payment Issues",
      description: "Not paying employees on time.",
    },
    {
      id: 3,
      username: "Mark Wilson",
      company: "XYZ Pvt Ltd",
      type: "Fraudulent Activities",
      description: "Fake job postings with no real offers.",
    },
  ],
};

const AdminReports = () => {
  const [issues, setIssues] = React.useState(reports.issues);
  const [companies, setCompanies] = React.useState(reports.companies);

  const removeIssue = (id) => {
    setIssues(issues.filter((report) => report.id !== id));
  };

  const removeCompany = (id) => {
    setCompanies(companies.filter((report) => report.id !== id));
  };

  return (
    <div className="admin-Reports">
    <div className="Admin-Reports-container">
      <div className="Admin-Reports-column">
        <h2>Report an Issue</h2>
        {issues.map(({ id, username, issue }) => (
          <div key={id} className="Admin-Reports-card">
            <FaTimes className="Admin-Reports-close-btn" onClick={() => removeIssue(id)} />
            <div className="Admin-Reports-card-details">
              <p className="Admin-Reports-username">Username: <strong>{username}</strong></p>
              <p className="Admin-Reports-description"><strong>Issue:</strong> {issue}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="Admin-Reports-column">
        <h2>Report a Company</h2>
        {companies.map(({ id, username, company, type, description }) => (
          <div key={id} className="Admin-Reports-card">
            <FaTimes className="Admin-Reports-close-btn" onClick={() => removeCompany(id)} />
            <div className="Admin-Reports-card-details">
              <p className="Admin-Reports-username">Username: <strong>{username}</strong></p>
              <p className="Admin-Reports-company-name"><strong>Company:</strong> {company}</p>
              <p className="Admin-Reports-type"><strong>Report Type:</strong> {type}</p>
              <p className="Admin-Reports-description"><strong>Description:</strong> {description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default AdminReports;