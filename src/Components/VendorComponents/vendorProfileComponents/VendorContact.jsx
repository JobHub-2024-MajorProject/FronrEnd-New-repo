import React, { useState } from "react";
import "./VendorContact.css";

const VendorContactDetails = () => {
  const [showForm, setShowForm] = useState(false);
  const [contactData, setContactData] = useState({
    mobileNumber: "123-456-7890",
    email: "vendor@example.com",
    whatsappNumber: "987-654-3210",
    alternateContact: "555-123-4567",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    setShowForm(false);
  };

  return (
    <div className="VendorContact-container">
      {!showForm ? (
        <>
          <h2>Contact Details</h2>
          <div className="VendorContact-details">
            <p><strong>Mobile Number:</strong> {contactData.mobileNumber}</p>
            <p><strong>Email:</strong> {contactData.email}</p>
            <p><strong>WhatsApp Number:</strong> {contactData.whatsappNumber}</p>
            <p><strong>Alternate Contact:</strong> {contactData.alternateContact}</p>
          </div>
          <button className="VendorContact-edit-btn" onClick={() => setShowForm(true)}>
            Edit
          </button>
        </>
      ) : (
        <div className="VendorContact-form-container">
          <h2>Edit Contact Details</h2>
          
          <label>Mobile Number</label>
          <input type="text" name="mobileNumber" value={contactData.mobileNumber} onChange={handleInputChange} />

          <label>Email</label>
          <input type="email" name="email" value={contactData.email} onChange={handleInputChange} />

          <label>WhatsApp Number</label>
          <input type="text" name="whatsappNumber" value={contactData.whatsappNumber} onChange={handleInputChange} />

          <label>Alternate Contact</label>
          <input type="text" name="alternateContact" value={contactData.alternateContact} onChange={handleInputChange} />

          <div className="VendorContact-buttons">
            <button className="VendorContact-apply-btn" onClick={handleSubmit}>Apply</button>
            <button className="VendorContact-cancel-btn" onClick={() => setShowForm(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VendorContactDetails;
