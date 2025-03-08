import { useState, useEffect } from "react";
import './Vendor.css'; 
import ChangePassword from "../Components/VendorComponents/vendorProfileComponents/VendorPasswordChange";
import AboutUs from '../Components/HomePageComponents/AboutUs';
import FakeJobPostings from '../Components/VendorComponents/FakeJobPostings';
import VendorActionCards from "../Components/VendorComponents/VendorActionCards";
import VendorFooter from "../Components/VendorComponents/VendorFooter";
import TranslationButton from "../Components/HomePageComponents/TranslateButton";

const VendorPage = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Header animation and pop-up script
  const [showPasswordModal, setShowPasswordModal] = useState(false); // State for modal

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".Vendor-profile-menu")) {
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
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false); // Close the menu after navigation (optional)
  };

  return (
    <>
      <div>
        <header className="Vendor-header">
          <div className="Vendor-logo">
            <img src="\JobHub Logo.png" alt="Company Logo" />
          </div>
          <nav className="Vendor-nav">
            <ul className="Vendor-nav-items">
              <li>
                <a
                  href="#Post-Jobs"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("Post-Jobs");
                  }}
                >
                  Post Jobs
                </a>
              </li>
              <li>
                <a
                  href="#AboutUs"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("AboutUs");
                  }}
                >
                  AboutUs
                </a>
              </li>
              <li className="Vendor-profile-menu">
                <div
                  className="Vendor-profile-icon"
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
                <ul
                  className={`Vendor-dropdown-menu ${
                    menuOpen ? "Vendor-show-menu" : ""
                  }`}
                >
                  <li>
                    <a href="/VendorProfile">View Profile</a>
                  </li>
                  <li>
                  <a
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
                  <li>
                    <a href="#">Log Out</a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </header>

        <FakeJobPostings />

        <section id="Post-Jobs">

        <VendorActionCards />

        </section>

        <section id="AboutUs">
          <AboutUs />
        </section>
        
        <VendorFooter />
        <TranslationButton />
      </div>
      {/* Change Password Modal */}
      {showPasswordModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <ChangePassword onClose={() => setShowPasswordModal(false)} />
          </div>
        </div>
      )}
    </>
  );
};

export default VendorPage;
