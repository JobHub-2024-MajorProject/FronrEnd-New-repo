import { useState } from "react";
import "./UpdateService.css";

const UpdateService = () => {
   const [formData, setFormData] = useState({
          Serviceimage: "",
          serviceType: "",
          vacancies: "",
          duration: "",
          salary: "",
          location: ""
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
          <div className="UpdateService">
              <div className="UpdateService-container">
                  <h2 className="UpdateService-heading">Update Services</h2>
                  <form className="UpdateService-form" onSubmit={handleSubmit}>
                      <label className="UpdateService-label">ServiceImage</label>
                      <input className="UpdateService-input" type="file" name="Serviceimage" accept="image/*" onChange={handleChange} required />
  
                      <label className="UpdateService-label">Service Type</label>
                      <input className="UpdateService-input" type="text" name="serviceType" onChange={handleChange} required />
  
                      <label className="UpdateService-label">Vacancies</label>
                      <input className="UpdateService-input" type="number" name="vacancies" onChange={handleChange} required />
  
                      <label className="UpdateService-label">Duration</label>
                      <input className="UpdateService-input" type="text" name="duration" onChange={handleChange} required />
  
                      <label className="UpdateService-label">Salary</label>
                      <input className="UpdateService-input" type="text" name="salary" onChange={handleChange} required />
  
                      <label className="UpdateService-label">Location</label>
                      <input className="UpdateService-input" type="text" name="location" onChange={handleChange} required />
  
                      <button type="submit" className="UpdateService-button">Submit</button>
                  </form>
              </div>
          </div>
      );
  };

export default UpdateService;
