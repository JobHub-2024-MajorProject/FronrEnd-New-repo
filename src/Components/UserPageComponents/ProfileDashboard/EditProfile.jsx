import React, { useState } from 'react';
import './EditProfile.css';

const EditProfile = () => {
  // State for form fields
  const [profilePhoto, setProfilePhoto] = useState(
    "https://2.bp.blogspot.com/_-kBbwqwsNbc/TUnbnIPn2oI/AAAAAAAAACY/0mQ40A2ANr4/s1600/uchiha+itachi.jpg"
  );
  const [username, setUsername] = useState("JohnDoe");
  const [fullName, setFullName] = useState("John Doe");
  const [phone, setPhone] = useState("+1234567890");
  const [email, setEmail] = useState("johndoe@example.com");
  const [address, setAddress] = useState("123 Street, City, Country");

  // Handle profile picture change
  const changePhoto = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfilePhoto(imageUrl);
    }
  };

  // Handle save action
  const saveProfile = () => {
    const updatedProfile = {
      profilePhoto,
      username,
      fullName,
      phone,
      email,
      address
    };
    console.log("Profile saved:", updatedProfile);
    alert("Profile updated successfully!");
  };

  return (
    <div className="Edit-Form-container">
      <div id="Edit-Form-container-profile-edit">
        <div className="Edit-Form-container-profile-photo">
          <img id="edit-photo" src={profilePhoto} alt="Profile Photo" />
        
        <input type="file" id="photo-input" style={{ display: "none" }} onChange={changePhoto} /> </div>
        <button onClick={() => document.getElementById('photo-input').click()} className="Profile-Change-Photo">Change Photo</button>

        <div className="Edit-Form-container-form-group">
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>

        <div className="Edit-Form-container-form-group">
          <label>Full Name:</label>
          <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
        </div>

        <div className="Edit-Form-container-form-group">
          <label>Phone:</label>
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>

        <div className="Edit-Form-container-form-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="Edit-Form-container-form-group">
          <label>Address:</label>
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>

        <button className="Edit-Form-container-save-btn" onClick={saveProfile}>Save</button>
      </div>
    </div>
  );
};

export default EditProfile;
