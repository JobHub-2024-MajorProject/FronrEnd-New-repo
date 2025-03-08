import { useState } from "react";
import "./UpdateJob.css";

const UpdateJob = () => {
   const [formData, setFormData] = useState({
          jobImage: "",
          jobDescription: "",
          jobType: "",
          vacancies: "",
          salary: "",
          location: "",
          experience: "",
          skills: "",
          accommodations: ""
          
      });
  
      const handleChange = (e) => {
          const { name, value, type, files } = e.target;
          setFormData((prev) => ({
              ...prev,
              [name]: type === "file" ? files[0] : value
          }));
      };
  
      const handleSubmit = (e) => {
          e.preventDefault();
          console.log("Form Data Submitted:", formData);
      };
  
      return (
          <div className="UpdateJob">
              <div className="UpdateJob-container">
                  <h2 className="UpdateJob-heading">Update Jobs</h2>
                  <form className="UpdateJob-form" onSubmit={handleSubmit}>
                      <label className="UpdateJob-label">Job Image</label>
                      <input className="UpdateJob-input" type="file" name="jobImage" accept="image/*" onChange={handleChange} required />
  
                      <label className="UpdateJob-label">Job Description</label>
                      <textarea className="UpdateJob-textarea" name="jobDescription" onChange={handleChange} required></textarea>
  
                      <label className="UpdateJob-label">Vacancies</label>
                      <input className="UpdateJob-input" type="number" name="vacancies" onChange={handleChange} required />
  
                      <label className="UpdateJob-label">Salary</label>
                      <input className="UpdateJob-input" type="text" name="salary" onChange={handleChange} required />
  
                      <label className="UpdateJob-label">Location</label>
                      <input className="UpdateJob-input" type="text" name="location" onChange={handleChange} required />
  
                      <label className="UpdateJob-label">Experience</label>
                      <input className="UpdateJob-input" type="text" name="experience" onChange={handleChange} required />
  
                      <label className="UpdateJob-label">Skills</label>
                      <input className="UpdateJob-input" type="text" name="skills" onChange={handleChange} required />
  
                      <label className="UpdateJob-label">Accommodations</label>
                      <input className="UpdateJob-input" type="text" name="accommodations" onChange={handleChange} />

                      <button type="submit" className="UpdateJob-button">Submit</button>
                  </form>
              </div>
          </div>
      );
  };

export default UpdateJob;
