import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <div className="Profile-content">
      <div id="profile" className="Profile-section active">
        <h2>Basic Details</h2>
        <div className="Profile-profile-photo">
          <img 
            src="https://2.bp.blogspot.com/_-kBbwqwsNbc/TUnbnIPn2oI/AAAAAAAAACY/0mQ40A2ANr4/s1600/uchiha+itachi.jpg" 
            alt="Profile Photo" 
          />
        </div>
        <p><strong>UserName:</strong> Uchiha Itachi</p>
        <p><strong>Full Name:</strong> Itachi Uchiha</p>
        <p><strong>Mobile:</strong> +91-123456789</p>
        <p><strong>Email:</strong> ItachiUchiha@gmail.com</p>
        <p><strong>Address:</strong>The Village hidden in th leaf</p>
      </div>

      <div className="Profile-section">
        <h2>Education Details</h2>
        <p>Completed the academy in 8 years</p>
        <p>Became Chunin at the age of 11</p>
        <p>Joined the ANBU Black Ops at the age of 11</p>
      </div>

      <div className="Profile-section">
        <h2>Experience</h2>
        <p><strong>Completed missions successfully at any cost.</strong></p>
        <p><strong>Thought like a Hokage at the age of 11.</strong></p>
        <p><strong>Slaughtered his clan for the sake of his village.</strong></p>
      </div>

      <div className="Profile-section">
        <h2>Additional Documents</h2>
        <p><strong>Awakened his Sharingan at the age of 7.</strong></p>
        <p><strong>Joined the Akatsuki to safeguard the village.</strong></p>
        <p><strong>Abilities: Mangekyou Sharingan, Amaterasu, Susanoo, etc.</strong></p>
      </div>
    </div>
  );
};

export default Profile;
