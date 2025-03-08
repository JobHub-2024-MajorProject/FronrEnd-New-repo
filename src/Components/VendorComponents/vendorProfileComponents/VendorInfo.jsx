import React, { useState, useRef } from "react";
import "./VendorInfo.css";

const VendorInfo = () => {
  const [showForm, setShowForm] = useState(false);
  const [profileImage, setProfileImage] = useState("https://images7.alphacoders.com/105/thumb-1920-1054068.png");
  const fileInputRef = useRef(null);

  const [vendorData, setVendorData] = useState({
    vendorCompanyName: "XYZ Pvt Ltd",
    vendorName: "John Doe",
    vendorUsername: "johndoe123",
    vendorCompanyType: "IT Services",
    vendorLocation: "New York, USA",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setVendorData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setProfileImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleEditIconClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = () => {
    setShowForm(false);
  };

  return (
    <div className="Vendorinfo-container">

      {!showForm ? (
        <>
         <h2>Company Details</h2>
          <div className="Vendorinfo-details">
            <p><strong>Company Name:</strong> {vendorData.vendorCompanyName}</p>
            <p><strong>Vendor Name:</strong> {vendorData.vendorName}</p>
            <p><strong>Username:</strong> {vendorData.vendorUsername}</p>
            <p><strong>Company Type:</strong> {vendorData.vendorCompanyType}</p>
            <p><strong>Location:</strong> {vendorData.vendorLocation}</p>
          </div>
          <button className="Vendorinfo-edit-btn" onClick={() => setShowForm(true)}>
            Edit
          </button>
        </>
      ) : (
        <div className="Vendorinfo-form-container">
          <h2>Edit Vendor Info</h2>
          <div className="Vendorinfo-image-upload">
            <label className="Vendorinfo-image-label">
              <img src={profileImage} alt="Profile" />
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleImageChange}
              />
              <i className="fas fa-edit" onClick={handleEditIconClick}></i>
            </label>
          </div>

          <label>Company Name</label>
          <input type="text" name="vendorCompanyName" value={vendorData.vendorCompanyName} onChange={handleInputChange} />

          <label>Vendor Name</label>
          <input type="text" name="vendorName" value={vendorData.vendorName} onChange={handleInputChange} />

          <label>Username</label>
          <input type="text" name="vendorUsername" value={vendorData.vendorUsername} onChange={handleInputChange} />

          <label>Company Type</label>
          <input type="text" name="vendorCompanyType" value={vendorData.vendorCompanyType} onChange={handleInputChange} />

          <label>Location</label>
          <input type="text" name="vendorLocation" value={vendorData.vendorLocation} onChange={handleInputChange} />

          <div className="Vendorinfo-buttons">
            <button className="Vendorinfo-apply-btn" onClick={handleSubmit}>Apply</button>
            <button className="Vendorinfo-cancel-btn" onClick={() => setShowForm(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VendorInfo;
