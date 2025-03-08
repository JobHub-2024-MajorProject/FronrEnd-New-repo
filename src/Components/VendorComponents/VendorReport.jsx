import React, { useState } from "react";
import PropTypes from "prop-types";
import "./VendorReport.css";

const VendorReport = ({ totalJobs, totalServices, hiredCandidates, totalApplications, jobListings }) => {
  const [jobs, setJobs] = useState(jobListings);
  const [jobToClose, setJobToClose] = useState(null);

  const handleCloseJob = (jobId) => {
    setJobToClose(jobId);
  };

  const confirmCloseJob = () => {
    setJobs(jobs.map(job =>
      job.id === jobToClose ? { ...job, status: "Closed" } : job
    ));
    setJobToClose(null);
  };

  return (
    <div className="VendorReport">
      <h1>Recruiter Report Analysis</h1>

      <div className="statistics">
        <div className="stat-card">
          <h2>{totalJobs}</h2>
          <p>Total Jobs Posted</p>
        </div>
        <div className="stat-card">
          <h2>{totalServices}</h2>
          <p>Total Services Posted</p>
        </div>
        <div className="stat-card">
          <h2>{hiredCandidates}</h2>
          <p>Candidates Hired</p>
        </div>
        <div className="stat-card">
          <h2>{totalApplications}</h2>
          <p>Total Applications Received</p>
        </div>
      </div>

      <div className="job-history">
        <h2>Job Listings</h2>
        <table>
          <thead>
            <tr>
              <th>Job ID</th>
              <th>Posted Date</th>
              <th>Job Title</th>
              <th>Applicants</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {jobs.length > 0 ? (
              jobs.map((job) => (
                <tr key={job.id}>
                  <td>{job.id}</td>
                  <td>{job.postedDate}</td>
                  <td>{job.title}</td>
                  <td>{job.applicants}</td>
                  <td>
                    {job.status}{" "}
                    {job.status === "Open" && (
                      <button className="Job-Confirmation-close-icon" onClick={() => handleCloseJob(job.id)}>❌</button>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="no-jobs">No jobs posted yet.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Close Job Confirmation Popup */}
      {jobToClose !== null && (
        <div className="Close-Job-Confirmation-popup-overlay">
          <div className="Close-Job-Confirmation-popup">
            <p>Are you sure you want to close the job?</p>
            <button className="Close-Job-Confirmation-yes-btn" onClick={confirmCloseJob}>Yes</button>
            <button className="Close-Job-Confirmation-no-btn" onClick={() => setJobToClose(null)}>No</button>
          </div>
        </div>
      )}
    </div>
  );
};

VendorReport.propTypes = {
  totalJobs: PropTypes.number.isRequired,
  totalServices: PropTypes.number.isRequired,
  hiredCandidates: PropTypes.number.isRequired,
  totalApplications: PropTypes.number.isRequired,
  jobListings: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      postedDate: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      applicants: PropTypes.number.isRequired,
      status: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default VendorReport;
