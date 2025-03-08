import React, { useState } from "react";
import "./AdminVerification.css";

const initialCompanies = [
  {
    id: 1,
    name: "TATA Pvt Ltd",
    vendor: "Ratan Tata",
    industry: "IT Services",
    location: "Hyderabad",
    contact: "tatapvt@gmail.com",
    logo: "https://th.bing.com/th/id/R.59bc9055f17b8a7436fcd713b53c971f?rik=5wDQCm%2fPtvNzVA&riu=http%3a%2f%2fpluspng.com%2fimg-png%2ftata-png--4924.jpg&ehk=8x%2fDYbnEfJJFolqnAg8tB7GjqEdWO0lybskt5TEgBZY%3d&risl=&pid=ImgRaw&r=0",
    verified: false,
  },
  {
    id: 2,
    name: "Jindal Steel",
    vendor: "Adani",
    industry: "Manufacturing",
    location: "Vizag",
    contact: "jdsteel@gmail.com",
    logo: "https://th.bing.com/th/id/R.59bc9055f17b8a7436fcd713b53c971f?rik=5wDQCm%2fPtvNzVA&riu=http%3a%2f%2fpluspng.com%2fimg-png%2ftata-png--4924.jpg&ehk=8x%2fDYbnEfJJFolqnAg8tB7GjqEdWO0lybskt5TEgBZY%3d&risl=&pid=ImgRaw&r=0",
    verified: false,
  },
  {
    id: 3,
    name: "ABC Solutions",
    vendor: "John Cena",
    industry: "IT Services",
    location: "Bangalore",
    contact: "abcsol@gmail.com",
    logo: "https://th.bing.com/th/id/R.59bc9055f17b8a7436fcd713b53c971f?rik=5wDQCm%2fPtvNzVA&riu=http%3a%2f%2fpluspng.com%2fimg-png%2ftata-png--4924.jpg&ehk=8x%2fDYbnEfJJFolqnAg8tB7GjqEdWO0lybskt5TEgBZY%3d&risl=&pid=ImgRaw&r=0",
    verified: false,
  },
];

const AdminVerification = () => {
  const [companies, setCompanies] = useState(initialCompanies);

  const verifyCompany = (id) => {
    setCompanies(
      companies.map((company) =>
        company.id === id ? { ...company, verified: true } : company
      )
    );
  };

  const blockCompany = (id) => {
    setCompanies(
      companies.map((company) =>
        company.id === id ? { ...company, verified: false } : company
      )
    );
  };

  return (
    <div className="Admin-Verification-info">
    <div className="verification-container">
      <div className="verification-column" id="pending-container">
        <h2>Pending Verification</h2>
        {companies.filter((c) => !c.verified).map((company) => (
          <div className="verification-card" key={company.id}>
            <img src={company.logo} alt="Company Logo" className="verification-company-logo" />
            <div className="verification-card-details">
              <p className="verification-company-name"><strong>{company.name}</strong></p>
              <p className="verification-vendor"><strong>Vendor Name:</strong> {company.vendor}</p>
              <p className="verification-industry"><strong>Industry:</strong> {company.industry}</p>
              <p className="verification-location"><strong>Location:</strong> {company.location}</p>
              <p className="verification-contact"><strong>Contact:</strong> {company.contact}</p>
              <button className="verification-action-btn verification-verify-btn" onClick={() => verifyCompany(company.id)}>Verify</button>
            </div>
          </div>
        ))}
      </div>
      <div className="verification-column" id="verified-container">
        <h2>Verified Companies</h2>
        {companies.filter((c) => c.verified).map((company) => (
          <div className="verification-card" key={company.id}>
            <img src={company.logo} alt="Company Logo" className="verification-company-logo" />
            <div className="verification-card-details">
              <p className="verification-company-name"><strong>{company.name}</strong></p>
              <p className="verification-vendor"><strong>Vendor Name:</strong> {company.vendor}</p>
              <p className="verification-industry"><strong>Industry:</strong> {company.industry}</p>
              <button className="verification-action-btn verification-block-btn" onClick={() => blockCompany(company.id)}>Block</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default AdminVerification;
