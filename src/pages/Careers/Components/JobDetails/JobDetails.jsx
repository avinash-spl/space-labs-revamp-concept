import React, { useState } from "react";
import styles from "./JobDetails.module.css";
import axios from "axios";
import { toast } from "react-toastify";
import PDFResumeExtractor from "../../../../utils/PdfExtractor/PdfExtractor";

const JobDetails = ({ job }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [resume, setResume] = useState(null);
  const [resumeFileName, setResumeFileName] = useState("");
  
  // Check if application deadline has passed
  const isDeadlinePassed = job.deadline
    ? new Date(job.deadline) < new Date()
    : false;
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    linkedIn: "",
    portfolio: "",
    currentJobTitle: "",
    companyName: "",
    yearsOfExperience: "",
    highestDegree: "",
    university: "",
    fieldOfStudy: "",
    skills: "",
    startDate: "",
    noticePeriod: "",
    salaryExpectations: "",
    referralSource: "",
    jobId: job._id,
    jobName: job.title,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleResumeChange = (e) => {
    if (e.target.files[0]) {
      const file = e.target.files[0];
      // Only accept PDF files
      if (file.type !== "application/pdf") {
        toast.error("Please upload a PDF file");
        return;
      }

      // Check file size (limit to 5MB)
      if (file.size > 5 * 1024 * 1024) {
        toast.error("File size should be less than 5MB");
        return;
      }

      setResume(file);
      setResumeFileName(file.name);

      // Optional: Use the PDF extractor to automatically fill form
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Check if resume is uploaded
    if (!resume) {
      toast.error("Please upload your resume");
      setLoading(false);
      return;
    }

    // Create FormData object for multipart/form-data submission
    const submissionFormData = new FormData();

    // Add all text fields to the form data
    Object.keys(formData).forEach((key) => {
      if (
        key === "highestDegree" &&
        formData.highestDegree === "other" &&
        formData.customDegree
      ) {
        submissionFormData.append(key, formData.customDegree);
      } else {
        submissionFormData.append(key, formData[key]);
      }
    });

    // Add the resume file to the form data
    submissionFormData.append("resume", resume);

    try {
      // Send POST request to backend
      const response = await axios.post(
        "https://spacelabs-backend.vercel.app/api/forms",
        submissionFormData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Handle response, show success message
      if (response.status === 201) {
        toast.success("Application Submitted !");
        // Reset the form
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          linkedIn: "",
          portfolio: "",
          currentJobTitle: "",
          companyName: "",
          yearsOfExperience: "",
          highestDegree: "",
          university: "",
          fieldOfStudy: "",
          skills: "",
          startDate: "",
          noticePeriod: "",
          salaryExpectations: "",
          referralSource: "",
          jobId: job._id,
          jobName: job.title,
        });
        setResume(null);
        setResumeFileName("");
      }
    } catch (error) {
      // Handle error, show error message
      const errorMessage =
        error.response?.data?.error ||
        "Error submitting form. Please try again.";
      toast.error(errorMessage);
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className={styles.jobDetails}>
        <img src="/assets/logo.png" alt="" />
        <h2>{job.title}</h2>
        <h3>
          Experience: <span> {job.experience}</span>
        </h3>
        
        {job.deadline && (
          <h3>
            Application Deadline:{" "}
            <span>
              {new Date(job.deadline).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            {isDeadlinePassed && (
              <span style={{ color: "red", marginLeft: "10px", fontWeight: "bold" }}>
                (Application Closed)
              </span>
            )}
          </h3>
        )}

        {job.description && (
          <>
            <h3>About:</h3>
            <div
              dangerouslySetInnerHTML={{ __html: job.description }}
              style={{ marginBottom: "20px", lineHeight: "1.6" }}
            />
          </>
        )}

        <h3>Preferred Qualifications:</h3>
        {job.preferredQualifications ? (
          <div
            dangerouslySetInnerHTML={{ __html: job.preferredQualifications }}
            style={{ marginBottom: "20px", lineHeight: "1.6" }}
          />
        ) : (
          <p>N/A</p>
        )}

        <h3>Responsibilities</h3>
        {job.responsibilities ? (
          <div
            dangerouslySetInnerHTML={{ __html: job.responsibilities }}
            style={{ marginBottom: "20px", lineHeight: "1.6" }}
          />
        ) : (
          <p>N/A</p>
        )}

        <h3>Eligibility</h3>
        {job.eligibility ? (
          <div
            dangerouslySetInnerHTML={{ __html: job.eligibility }}
            style={{ marginBottom: "20px", lineHeight: "1.6" }}
          />
        ) : (
          <p>N/A</p>
        )}

        <h3>What we offer</h3>
        {job.whatWeOffer ? (
          <div
            dangerouslySetInnerHTML={{ __html: job.whatWeOffer }}
            style={{ marginBottom: "20px", lineHeight: "1.6" }}
          />
        ) : (
          <p>N/A</p>
        )}
        <h3>Job Type</h3>
        <ul>
          {job.jobType
            ? job.jobType
                .split("\n")
                .map((type, index) => <li key={index}>{type}</li>)
            : "N/A"}
        </ul>
        <h3>Location(s)</h3>
        <ul>
          {job.location
            ? job.location
                .split("\n")
                .map((location, index) => <li key={index}>{location}</li>)
            : "N/A"}
        </ul>
        <h3>Apply for this Position</h3>
        
        {isDeadlinePassed ? (
          <div style={{ 
            padding: "20px", 
            backgroundColor: "#ffebee", 
            border: "2px solid #f44336", 
            borderRadius: "8px",
            textAlign: "center",
            marginBottom: "20px"
          }}>
            <p style={{ color: "#d32f2f", fontSize: "18px", fontWeight: "bold", margin: 0 }}>
              Application Closed
            </p>
            <p style={{ color: "#666", marginTop: "8px", margin: 0 }}>
              The application deadline for this position has passed.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} encType="multipart/form-data">
          {/* Personal Information */}
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label>Full Name*:</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label>Email*:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label>Phone*:</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label>LinkedIn Profile:</label>
              <input
                type="url"
                name="linkedIn"
                value={formData.linkedIn}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Resume Upload */}
          <div className={styles.formGroup}>
            <label>Resume (PDF only)*:</label>
            <div className={styles.resumeUploadContainer}>
              <input
                type="file"
                accept="application/pdf"
                onChange={handleResumeChange}
                className={styles.fileInput}
                id="resumeUpload"
                required
              />
              <label htmlFor="resumeUpload" className={styles.customFileUpload}>
                Choose File
              </label>
              <span className={styles.fileName}>
                {resumeFileName || "No file chosen"}
              </span>
            </div>
          </div>

          {/* Work Experience */}
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label>Current Job Title:</label>
              <input
                type="text"
                name="currentJobTitle"
                value={formData.currentJobTitle}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formGroup}>
              <label>Company Name:</label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Education */}
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label>Highest Degree Earned*:</label>
              <select
                name="highestDegree"
                value={formData.highestDegree}
                onChange={handleChange}
              >
                <option value="">Select degree*</option>
                <option value="B.Tech">B.Tech</option>
                <option value="M.Tech">M.Tech</option>
                <option value="BSc">BSc</option>
                <option value="MSc">MSc</option>
                <option value="BCA">BCA</option>
                <option value="MCA">MCA</option>
                <option value="MBA">MBA</option>
                <option value="B.Com">B.Com</option>
                <option value="M.Com">M.Com</option>
                <option value="BE">BE</option>
                <option value="Diploma">Diploma</option>
                <option value="12th">12th</option>
                <option value="BA">BA</option>
                <option value="MA">MA</option>
                <option value="PhD">PhD</option>
                <option value="other">Other</option>
              </select>

              {formData.highestDegree === "other" && (
                <input
                  type="text"
                  name="customDegree"
                  value={formData.customDegree || ""}
                  onChange={handleChange}
                  placeholder="Enter your degree"
                  style={{ marginTop: "8px" }}
                />
              )}
            </div>
            <div className={styles.formGroup}>
              <label>Field of Study*:</label>
              <input
                type="text"
                name="fieldOfStudy"
                value={formData.fieldOfStudy}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Availability */}
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label>Start Date:</label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formGroup}>
              <label>Notice Period:</label>
              <input
                type="text"
                name="noticePeriod"
                value={formData.noticePeriod}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Additional Questions */}
          <div className={styles.formGroup}>
            <label>Skills*:</label>
            <input
              type="text"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label>Total years of Experience*:</label>
            <input
              type="text"
              name="yearsOfExperience"
              value={formData.yearsOfExperience}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label>Salary Expectations:</label>
            <input
              type="text"
              name="salaryExpectations"
              value={formData.salaryExpectations}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label>How did you hear about us?</label>
            <input
              type="text"
              name="referralSource"
              value={formData.referralSource}
              onChange={handleChange}
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className={styles.submitButton}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>

          {error && <div className={styles.errorMessage}>{error}</div>}
          </form>
        )}
      </div>
    </>
  );
};

export default JobDetails;
