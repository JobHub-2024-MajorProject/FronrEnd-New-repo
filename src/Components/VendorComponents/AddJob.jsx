import React, { useState } from "react";
import "./AddJob.css";
import axios from "axios"; 

const Addjob = () => {
    const [formData, setFormData] = useState({
        jobImage: "",
        jobTitle: "",
        jobDescription: "",
        vacancies: "",
        salary: "",
        location: "",
        experience: "",
        education: "",
        skills: "",
        accommodations: "",
        jobType: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Convert skills & accommodations to arrays (split by comma)
        const formattedData = {
            ...formData,
            skills: formData.skills ? formData.skills.split(",").map(skill => skill.trim()) : [],
            accommodations: formData.accommodations ? formData.accommodations.split(",").map(acc => acc.trim()) : [],
        };

        // If no image is provided, use the default image URL
        if (!formattedData.jobImage) {
            formattedData.jobImage = "https://i.pinimg.com/736x/37/48/df/3748df25a0cf09f77a33e640a898ddfa.jpg";
        }

        try {
            const response = await axios.post("http://localhost:8086/jobs/add", formattedData, {
                headers: { "Content-Type": "application/json" }, // ✅ Send JSON, not FormData
            });

            console.log("Success:", response.data);
            alert("Job added successfully!");
        } catch (error) {
            console.error("Error:", error);
            alert("Failed to add job.");
        }
    };

    return (
        <div className="Addjob">
            <div className="Addjob-container">
                <h2 className="Addjob-heading">Job Posting</h2>
                <form className="Addjob-form" onSubmit={handleSubmit}>
                    <label className="Addjob-label">Job Image URL</label>
                    <input className="Addjob-input" type="text" name="jobImage" onChange={handleChange} placeholder="Enter image URL"/>

                    <label className="Addjob-label">Job Title</label>
                    <input className="Addjob-input" type="text" name="jobTitle" onChange={handleChange} required />

                    <label className="Addjob-label">Job Type</label>
                    <input className="Addjob-input" type="text" name="jobType" onChange={handleChange} required />

                    <label className="Addjob-label">Job Description</label>
                    <textarea className="Addjob-textarea" name="jobDescription" onChange={handleChange} required></textarea>

                    <label className="Addjob-label">Vacancies</label>
                    <input className="Addjob-input" type="number" name="vacancies" onChange={handleChange} required />

                    <label className="Addjob-label">Salary</label>
                    <input className="Addjob-input" type="text" name="salary" onChange={handleChange} required />

                    <label className="Addjob-label">Location</label>
                    <input className="Addjob-input" type="text" name="location" onChange={handleChange} required />

                    <label className="Addjob-label">Experience</label>
                    <input className="Addjob-input" type="text" name="experience" onChange={handleChange} required />

                    <label className="Addjob-label">Education</label>
                    <input className="Addjob-input" type="text" name="education" onChange={handleChange} required />

                    <label className="Addjob-label">Skills (comma-separated)</label>
                    <input className="Addjob-input" type="text" name="skills" onChange={handleChange} placeholder="e.g. Java, React, SQL" required />

                    <label className="Addjob-label">Accommodations (comma-separated)</label>
                    <input className="Addjob-input" type="text" name="accommodations" onChange={handleChange} placeholder="e.g. Food, Transport"/>

                    <button type="submit" className="Addjob-button">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Addjob;
