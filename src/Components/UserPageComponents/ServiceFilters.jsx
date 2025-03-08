import React, { useState } from 'react';
import './ServiceFilters.css';

const ServiceFilters = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [maxPrice, setMaxPrice] = useState(5000); // Default max price

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const handleCheckboxChange = (event) => {
    const { checked, value } = event.target;
    setSelectedFilters((prevFilters) =>
      checked ? [...prevFilters, value] : prevFilters.filter((item) => item !== value)
    );
  };

  const handleApplyFilters = () => {
    if (selectedFilters.length === 0 && maxPrice === 0) {
      alert("No filters selected!");
      return;
    }
  
    let queryParams = [];
  
    // Add selected filters to the query parameters
    if (selectedFilters.length > 0) {
      queryParams.push(`filters=${selectedFilters.join(",")}`);
    }
  
    // Add maxPrice filter if it's selected
    if (maxPrice > 0) {
      queryParams.push(`maxPrice=${maxPrice}`);
    }
  
    // Construct the final URL
    const newUrl = `http://localhost:8086/userpage/services?${queryParams.join("&")}`;
  
    console.log("Applying Filters:", { selectedFilters, maxPrice });
    console.log("Generated API URL:", newUrl);
  
    // Update the API URL to fetch new results (assuming you have setApiUrl)
    console.log(newUrl); // ✅ This triggers useEffect to fetch new data
  };
  

  const clearFilters = () => {
    setSelectedFilters([]);
    setMaxPrice(5000); // Reset price range
    document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => (checkbox.checked = false));
  };

  return (
    <div className="servicefilter-container">
      <div className="servicefilter-header">
        <h2>Filter Services</h2>
        <button className="servicefilter-clear-btn" onClick={clearFilters}>
          Clear All
        </button>
      </div>

      {/* Service Type Filter */}
      <div className="servicefilter-section">
        <div className="servicefilter-section-title" onClick={() => toggleSection('ServiceType')}>
          Service Type
          <span className={`servicefilter-arrow ${activeSection === 'ServiceType' ? 'up' : ''}`}>▼</span>
        </div>
        {activeSection === 'ServiceType' && (
          <div className="servicefilter-options">
            {["Movers & Packers", "Home Cleaning", "Food Delivery", "Repair Services"].map((type) => (
              <label className="servicefilter-checkbox-label" key={type}>
                <input type="checkbox" value={type} onChange={handleCheckboxChange} /> {type}
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Location Filter (Cities in South India) */}
      <div className="servicefilter-section">
        <div className="servicefilter-section-title" onClick={() => toggleSection('Location')}>
          Location
          <span className={`servicefilter-arrow ${activeSection === 'Location' ? 'up' : ''}`}>▼</span>
        </div>
        {activeSection === 'Location' && (
          <div className="servicefilter-options">
            {["Bangalore", "Chennai", "Hyderabad", "Kochi", "Coimbatore", "Visakhapatnam", "Mysore", "Madurai"]
              .map((city) => (
                <label className="servicefilter-checkbox-label" key={city}>
                  <input type="checkbox" value={city} onChange={handleCheckboxChange} /> {city}
                </label>
              ))}
          </div>
        )}
      </div>

      {/* Price Range Filter */}
      <div className="servicefilter-section">
        <div className="servicefilter-section-title" onClick={() => toggleSection('Charges')}>
          Charges (Max Price: ₹{maxPrice})
          <span className={`servicefilter-arrow ${activeSection === 'Charges' ? 'up' : ''}`}>▼</span>
        </div>
        {activeSection === 'Charges' && (
          <div className="servicefilter-options">
            <input
              type="range"
              min="500"
              max="20000"
              step="500"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
          </div>
        )}
      </div>

      {/* Experience Filter */}
      <div className="servicefilter-section">
        <div className="servicefilter-section-title" onClick={() => toggleSection('Experience')}>
          Experience
          <span className={`servicefilter-arrow ${activeSection === 'Experience' ? 'up' : ''}`}>▼</span>
        </div>
        {activeSection === 'Experience' && (
          <div className="servicefilter-options">
            {["Fresher", "1-3 Years", "3-5 Years", "5+ Years"].map((exp) => (
              <label className="servicefilter-checkbox-label" key={exp}>
                <input type="checkbox" value={exp} onChange={handleCheckboxChange} /> {exp}
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Selected Filters List */}
      {selectedFilters.length > 0 && (
        <div className="selected-filters">
          <strong>Selected Filters:</strong> {selectedFilters.join(", ")}
        </div>
      )}

      <button className="servicefilter-apply-btn" onClick={handleApplyFilters}>
        Apply
      </button>
    </div>
  );
};

export default ServiceFilters;
