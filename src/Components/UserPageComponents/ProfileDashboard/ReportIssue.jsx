import React, { useState } from "react";
import "./ReportIssue.css";

const ReportIssue = () => {
    const [reportType, setReportType] = useState("");
    const [company, setCompany] = useState("");
    const [issue, setIssue] = useState("");

    return (
        <div className="Report-issue-form-container">
            <center><h2>Report an Issue</h2></center>
            <form>
                <div className="Report-issue-field">
                    <label htmlFor="username">User Name</label>
                    <input type="text" id="username" required />
                </div>
                <div className="Report-issue-field">
                    <label htmlFor="reportType">Report Type</label>
                    <select id="reportType" onChange={(e) => setReportType(e.target.value)}>
                        <option value="">Select Type</option>
                        <option value="error">Report an Error</option>
                        <option value="company">Report a Company</option>
                    </select>
                </div>
                {reportType === "error" && (
                    <div className="Report-issue-field">
                        <label htmlFor="description">Description</label>
                        <textarea id="description"></textarea>
                        <button type="submit" className="Report-issue-button">Apply</button>
                    </div>
                )}
                {reportType === "company" && (
                    <>
                        <div className="Report-issue-field">
                            <label htmlFor="company">Select Company</label>
                            <select id="company" onChange={(e) => setCompany(e.target.value)}>
                                <option value="">Select Company</option>
                                <option value="Company A">Company A</option>
                                <option value="Company B">Company B</option>
                            </select>
                        </div>
                        {company && (
                            <div className="Report-issue-field">
                                <label htmlFor="issue">Select Issue</label>
                                <select id="issue" onChange={(e) => setIssue(e.target.value)}>
                                    <option value="">Select Issue</option>
                                    <option value="Delay in Service">Delay in Service</option>
                                    <option value="Overcharging">Overcharging</option>
                                    <option value="others">Others</option>
                                </select>
                            </div>
                        )}
                        {issue === "others" && (
                            <div className="Report-issue-field">
                                <label htmlFor="otherIssue">Type of Issue</label>
                                <input type="text" id="otherIssue" />
                            </div>
                        )}
                        {company && (
                            <div className="Report-issue-field">
                                <label htmlFor="companyDesc">Description</label>
                                <textarea id="companyDesc"></textarea>
                                <button type="submit" className="Report-issue-button">Apply</button>
                            </div>
                        )}
                    </>
                )}
            </form>
        </div>
    );
};

export default ReportIssue;
