import React, { useState } from 'react';
import './JobFilters.css';

const JobFilters = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const clearFilters = () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => (checkbox.checked = false));
  };

  const applyFilters = () => {
    alert('Filters Applied!');
  };

  return (
    <div className="job-filter-container">
      <div className="job-filter-header">
        <h2>Filter Jobs</h2>
        <button className="job-filter-clear-btn" onClick={clearFilters}>
          Clear All
        </button>
      </div>

      <div className="job-filter-section">
        <div
          className="job-filter-section-title"
          onClick={() => toggleSection('qualification')}
        >
          Job Qualification
          <span className={`job-filter-arrow ${activeSection === 'qualification' ? 'up' : ''}`}>▼</span>
        </div>
        {activeSection === 'qualification' && (
          <div className="job-filter-options">
            <label className="job-filter-checkbox-label">
              <input type="checkbox" /> 10th
            </label>
            <label className="job-filter-checkbox-label">
              <input type="checkbox" /> 12th
            </label>
            <label className="job-filter-checkbox-label">
              <input type="checkbox" /> Uneducated
            </label>
          </div>
        )}
      </div>

      <div className="job-filter-section">
        <div
          className="job-filter-section-title"
          onClick={() => toggleSection('jobCategories')}
        >
          Job Categories
          <span className={`job-filter-arrow ${activeSection === 'jobCategories' ? 'up' : ''}`}>▼</span>
        </div>
        {activeSection === 'jobCategories' && (
          <div className="job-filter-options">
            <label className="job-filter-checkbox-label">
              <input type="checkbox" /> Agriculture
            </label>
            <label className="job-filter-checkbox-label">
              <input type="checkbox" /> Labour
            </label>
            <label className="job-filter-checkbox-label">
              <input type="checkbox" /> Petrol Bunks
            </label>
            <label className="job-filter-checkbox-label">
              <input type="checkbox" /> Sales Person
            </label>
            <label className="job-filter-checkbox-label">
              <input type="checkbox" /> Delivery Jobs
            </label>
            <label className="job-filter-checkbox-label">
              <input type="checkbox" /> Cooks
            </label>
            <label className="job-filter-checkbox-label">
              <input type="checkbox" /> Drivers
            </label>
            <label className="job-filter-checkbox-label">
              <input type="checkbox" /> Construction
            </label>
          </div>
        )}
      </div>

      <div className="job-filter-section">
        <div
          className="job-filter-section-title"
          onClick={() => toggleSection('salary')}
        >
          Salary
          <span className={`job-filter-arrow ${activeSection === 'salary' ? 'up' : ''}`}>▼</span>
        </div>
        {activeSection === 'salary' && (
          <div className="job-filter-options">
            <label className="job-filter-checkbox-label">
              <input type="checkbox" /> Less than $1000
            </label>
            <label className="job-filter-checkbox-label">
              <input type="checkbox" /> $1000 - $5000
            </label>
            <label className="job-filter-checkbox-label">
              <input type="checkbox" /> $5000 - $10000
            </label>
            <label className="job-filter-checkbox-label">
              <input type="checkbox" /> More than $10000
            </label>
          </div>
        )}
      </div>

      <div className="job-filter-section">
        <div
          className="job-filter-section-title"
          onClick={() => toggleSection('experience')}
        >
          Experience
          <span className={`job-filter-arrow ${activeSection === 'experience' ? 'up' : ''}`}>▼</span>
        </div>
        {activeSection === 'experience' && (
          <div className="job-filter-options">
            <label className="job-filter-checkbox-label">
              <input type="checkbox" /> New/Fresher
            </label>
            <label className="job-filter-checkbox-label">
              <input type="checkbox" /> 1-3 Years
            </label>
            <label className="job-filter-checkbox-label">
              <input type="checkbox" /> 3-5 Years
            </label>
            <label className="job-filter-checkbox-label">
              <input type="checkbox" /> 5+ Years
            </label>
          </div>
        )}
      </div>

      <div className="job-filter-section">
        <div
          className="job-filter-section-title"
          onClick={() => toggleSection('jobType')}
        >
          Job Type
          <span className={`job-filter-arrow ${activeSection === 'jobType' ? 'up' : ''}`}>▼</span>
        </div>
        {activeSection === 'jobType' && (
          <div className="job-filter-options">
            <label className="job-filter-checkbox-label">
              <input type="checkbox" /> Part Time
            </label>
            <label className="job-filter-checkbox-label">
              <input type="checkbox" /> Full Time
            </label>
            <label className="job-filter-checkbox-label">
              <input type="checkbox" /> Contract Based
            </label>
            <label className="job-filter-checkbox-label">
              <input type="checkbox" /> Daily Based
            </label>
          </div>
        )}
      </div>

      <button className="job-filter-apply-btn" onClick={applyFilters}>
        Apply
      </button>
    </div>
  );
};

export default JobFilters;
