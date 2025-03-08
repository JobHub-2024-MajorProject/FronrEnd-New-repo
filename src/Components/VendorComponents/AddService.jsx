import { useState } from "react";
import axios from "axios"; // Import Axios for API calls
import "./AddService.css";

const AddService = () => {
  const [formData, setFormData] = useState({
    image: "", // Default empty string for image URL
    serviceType: "",
    location: "", // Default selected location
    charges: "",
    timing: "",
    description: "",
  });

  // Predefined locations for the dropdown
  const locations = ["Hyderabad", "Chennai", "Bangalore", "Delhi", "Mumbai", "Pune"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure a default image is set if none is provided
    const dataToSend = {
      ...formData,
      image: formData.image || "https://i.pinimg.com/736x/37/48/df/3748df25a0cf09f77a33e640a898ddfa.jpg", // Default image URL
    };

    try {
      console.log("Sending JSON Data:", dataToSend); // Debugging
      const response = await axios.post("http://localhost:8086/services/add", dataToSend, {
        headers: { "Content-Type": "application/json" }, // Send data as JSON
      });
      console.log("Success:", response.data);
      alert("Service added successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to add service.");
    }
  };

  return (
    <div className="AddService">
      <div className="AddService-container">
        <h2 className="AddService-heading">Add Service</h2>
        <form className="AddService-form" onSubmit={handleSubmit}>
          <label className="AddService-label">Service Image URL (Optional)</label>
          <input className="AddService-input" type="text" name="image" onChange={handleChange} placeholder="Enter image URL" />

          <label className="AddService-label">Service Type</label>
          <input className="AddService-input" type="text" name="serviceType" onChange={handleChange} required />

          <label className="AddService-label">Location</label>
          <select className="AddService-input" name="location" onChange={handleChange} required>
            {locations.map((loc) => (
              <option key={loc} value={loc}>{loc}</option>
            ))}
          </select>

          <label className="AddService-label">Charges</label>
          <input className="AddService-input" type="text" name="charges" onChange={handleChange} required />

          <label className="AddService-label">Timing</label>
          <input className="AddService-input" type="text" name="timing" onChange={handleChange} required />

          <label className="AddService-label">Description</label>
          <textarea className="AddService-input" name="description" onChange={handleChange} required />

          <button type="submit" className="AddService-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddService;
