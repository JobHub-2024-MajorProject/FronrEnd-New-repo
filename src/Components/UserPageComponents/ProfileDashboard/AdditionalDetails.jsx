import React, { useState } from 'react';
import './AdditionalDetails.css';

const AdditionalDetails = () => {
    const [educationText, setEducationText] = useState('Completed the academy in 8 years. Became Chunin at the age of 11. Joined the ANBU Black Ops at the age of 11');
    const [experienceText, setExperienceText] = useState('Completed missions successfully at any cost.Thought like a Hokage at the age of 11.Slaughtered his clan for the sake of his village.');
    const [documentsText, setDocumentsText] = useState('Awakened his Sharingan at the age of 7.Joined the Akatsuki to safeguard the village.Abilities: Mangekyou Sharingan, Amaterasu, Susanoo, etc.');

    const [isEditing, setIsEditing] = useState({ education: false, experience: false, documents: false });

    const handleEdit = (section) => {
        setIsEditing((prev) => ({ ...prev, [section]: true }));
    };

    const handleSave = (section, text) => {
        if (section === 'education') {
            setEducationText(text);
        } else if (section === 'experience') {
            setExperienceText(text);
        } else if (section === 'documents') {
            setDocumentsText(text);
        }
        setIsEditing((prev) => ({ ...prev, [section]: false }));
    };

    // Function to split the text into sentences and add each sentence on a new line
    const formatText = (text) => {
        return text.split('.').map((sentence, index) => sentence.trim() && (
            <p key={index}>{sentence.trim()}.</p>
        ));
    };

    return (
        <div className='AdditionalDetails-Container'>
            <div className={`AdditionalDetails-section ${isEditing.education ? 'editing' : ''}`}>
                <strong>Add Education Details</strong>
                {!isEditing.education ? (
                    <center>{formatText(educationText)}</center>
                ) : (
                    <center><textarea 
                        className="AdditionalDetails-edit-box" 
                        defaultValue={educationText} 
                        onChange={(e) => setEducationText(e.target.value)}
                    ></textarea></center>
                )}
                <button className="AdditionalDetails-edit-btn" onClick={() => handleEdit('education')}>
                    Edit
                </button>
                {isEditing.education && (
                    <center>
                        <button className="AdditionalDetails-save-btn" onClick={() => handleSave('education', educationText)}>
                            Save
                        </button>
                    </center>
                )}
            </div>

            <div className={`AdditionalDetails-section ${isEditing.experience ? 'editing' : ''}`}>
                <strong>Add Experience</strong>
                {!isEditing.experience ? (
                    <center>{formatText(experienceText)}</center>
                ) : (
                    <center><textarea 
                        className="AdditionalDetails-edit-box" 
                        defaultValue={experienceText} 
                        onChange={(e) => setExperienceText(e.target.value)}
                    ></textarea></center>
                )}
                <button className="AdditionalDetails-edit-btn" onClick={() => handleEdit('experience')}>
                    Edit
                </button>
                {isEditing.experience && (
                    <center>
                        <button className="AdditionalDetails-save-btn" onClick={() => handleSave('experience', experienceText)}>
                            Save
                        </button>
                    </center>
                )}
            </div>

            <div className={`AdditionalDetails-section ${isEditing.documents ? 'editing' : ''}`}>
                <strong>Add Documents</strong>
                {!isEditing.documents ? (
                    <center>{formatText(documentsText)}</center>
                ) : (
                    <center><textarea 
                        className="AdditionalDetails-edit-box" 
                        defaultValue={documentsText} 
                        onChange={(e) => setDocumentsText(e.target.value)}
                    ></textarea></center>
                )}
                <button className="AdditionalDetails-edit-btn" onClick={() => handleEdit('documents')}>
                    Edit
                </button>
                {isEditing.documents && (
                    <center>
                        <button className="AdditionalDetails-save-btn" onClick={() => handleSave('documents', documentsText)}>
                            Save
                        </button>
                    </center>
                )}
            </div>
        </div>
    );
};

export default AdditionalDetails;
