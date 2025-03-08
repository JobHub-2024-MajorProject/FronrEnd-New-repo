import React, { useState } from "react";
import "./VendorProfile.css";
import VendorInfo from "./vendorProfileComponents/VendorInfo";
import VendorContactDetails from "./vendorProfileComponents/VendorContact";
import VendorAbout from "./vendorProfileComponents/VendorAbout";
import TranslationButton from "../HomePageComponents/TranslateButton";

const VendorProfile = () => {
  const [verified, setVerified] = useState(false);
  const [activeTab, setActiveTab] = useState("vendorInfo");
  const [bannerImage, setBannerImage] = useState("https://wallpaperaccess.com/full/6442860.jpg");

  const handleVerify = () => {
    setVerified(true);
  };

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  const changeBanner = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setBannerImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
    <div className="Recruiter-Profile-profile-container">
      <div className="Recruiter-Profile-banner">
        <img src={bannerImage} alt="Banner" />
        <label className="Recruiter-Profile-edit-icon">
          <i className="fas fa-edit"></i>
          <input type="file" accept="image/*" onChange={changeBanner} />
        </label>
      </div>
      
      <div className="Recruiter-Profile-profile-info">
        <img
          className="Recruiter-Profile-profile-pic"
          src="https://images7.alphacoders.com/105/thumb-1920-1054068.png"
          alt="Profile Picture"
        />
        <div className="Recruiter-Profile-profile-details">
          <h2>
            Fiona White {verified && <span className="Recruiter-Profile-verified">✔ Verified</span>}
          </h2>
          <p className="Recruiter-Profile-rating">★★★★★ <i>(10 Reviews)</i></p>
        </div>
        {!verified && (
          <button className="Recruiter-Profile-Verify-btn" onClick={handleVerify}>
            Verify Now
          </button>
        )}
      </div>

      <nav className="Recruiter-Profile-tabs">
        {[
          { id: "vendorInfo", label: "Vendor Info" },
          { id: "contactDetails", label: "Contact Details" },
          { id: "about", label: "About" },
        ].map((tab) => (
          <button
            key={tab.id}
            className={`Recruiter-Profile-tab-link ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => openTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      <div className={`Recruiter-Profile-tab-content ${activeTab === "vendorInfo" ? "active" : ""}`}>
        <VendorInfo />
      </div>
      <div className={`Recruiter-Profile-tab-content ${activeTab === "contactDetails" ? "active" : ""}`}>
        <VendorContactDetails />
      </div>
      <div className={`Recruiter-Profile-tab-content ${activeTab === "about" ? "active" : ""}`}>
        <VendorAbout />
      </div>
    </div>
    <TranslationButton />
    </>
  );
};

export default VendorProfile;
