import React, { useState, useEffect } from 'react';
import './UserPage.css'; 
import FakeJobsBanner from "../Components/UserPageComponents/FakeJobsBanner"; 
import SearchBar from '../Components/UserPageComponents/Search';
import JobPostings from '../Components/UserPageComponents/JobPostings';
import JobFilters from '../Components/UserPageComponents/JobFilters';
import ServiceFilters from '../Components/UserPageComponents/ServiceFilters';
import ServicePostings from '../Components/UserPageComponents/ServicePostings';
import ContactUs from '../Components/HomePageComponents/ContactUs';
import Footer from "../Components/HomePageComponents/Footer";
import TranslateButton from "../Components/HomePageComponents/TranslateButton";
import UserPasswordChange from '../Components/UserPageComponents/ProfileDashboard/UserPasswordChange';


const UserPage = () => {
  const [activeSection, setActiveSection] = useState('jobs'); // Default section: Jobs
  const [menuOpen, setMenuOpen] = useState(false); //Header animation and pop-up script
  const [showPasswordModal, setShowPasswordModal] = useState(false); // State for modal

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".UserHeader-profile-menu")) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false); // Close the menu after navigation (optional)
  };

  return (
    <>
      <div>
        <header className="UserHeader-header">
          <div className="UserHeader-logo">
            <img 
              src="\JobHub Logo.png" 
              alt="Company Logo" 
            />
          </div>
          <nav className="UserHeader-nav">
            <ul className="UserHeader-nav-items">
              <li>
                <a
                  href="#Job-Categories"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('Job-Categories');
                  }}
                >
                  Find Jobs
                </a>
              </li>
              <li>
                <a
                  href="#contactus"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('contactus');
                  }}
                >
                  Contact Us
                </a>
              </li>
              <li className="UserHeader-profile-menu">
                <div 
                  className="UserHeader-profile-icon" 
                  onClick={(e) => {
                    e.stopPropagation();
                    setMenuOpen(!menuOpen);
                  }}
                >
                  <img 
                    src="https://th.bing.com/th/id/R.f7470eacea2efde5b99fb7a09e250df0?rik=GOmJa80fdr46sA&riu=http%3a%2f%2fimages6.fanpop.com%2fimage%2fphotos%2f35000000%2fSasuke-uchiha-sasuke-35007847-1000-1294.jpg&ehk=7Y0iwLsrdQwdY12MZSd8e3%2bZGocPTmHTr2XRHp5VuAQ%3d&risl=&pid=ImgRaw&r=0" 
                    alt="Profile"
                  />
                </div>
                <ul className={`UserHeader-dropdown-menu ${menuOpen ? "UserHeader-show-menu" : ""}`}>
                  <li><a href="/ProfileDashboard" >View Profile</a></li>
                  <li><a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setMenuOpen(false); // Close dropdown menu
                      setShowPasswordModal(true); // Open the modal on click
                    }}
                  >
                    Change Password
                  </a>
                  </li>
                  <li><a href="#">Log Out</a></li>
                </ul>
              </li>
            </ul>
          </nav>
        </header>

        <SearchBar />
        <FakeJobsBanner />

        <section id="Job-Categories">
          <div className="Category-container">
            <div
              className={`Category-section ${activeSection === 'jobs' ? 'active' : ''}`}
              onClick={() => setActiveSection('jobs')}
            >
              Jobs
            </div>
            <div
              className={`Category-section ${activeSection === 'services' ? 'active' : ''}`}
              onClick={() => setActiveSection('services')}
            >
              Services
            </div>
          </div>

          <div className="Category-layout-container">
            <div className="Category-filters-container">
              {activeSection === 'jobs' ? <JobFilters /> : <ServiceFilters />}
            </div>
            <div className="Category-postings-container">
              {activeSection === 'jobs' ? <JobPostings /> : <ServicePostings />}
            </div>
          </div>
        </section>

        <section id="contactus">
          <ContactUs />
        </section>

        <Footer />
        <TranslateButton />
      </div>
      {/* Change Password Modal */}
      {showPasswordModal && (
        <div className="Userpage-modal-overlay">
          <div className="Userpage-modal-content">
            <UserPasswordChange onClose={() => setShowPasswordModal(false)}/>
          </div>
        </div>
      )}
    </>
  );
};

export default UserPage;
