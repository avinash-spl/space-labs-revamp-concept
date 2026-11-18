import React, { useState, useEffect } from "react";
import axios from "axios";
import CareersHero from "./Components/CareersHero/CareersHero";
import JobDetails from "./Components/JobDetails/JobDetails";
import styles from "./Components/JobDetails/JobDetails.module.css";
import LifeAt from "../Home/components/LifeAt/LifeAt";

const FALLBACK_JOBS = [
  {
    _id: "job-1",
    title: "Lead Computer Vision Engineer",
    experience: "3 - 6 Years",
    department: "AI & Optics Lab",
    location: "Delhi NCR / Greater Noida",
    type: "Full-Time",
    description:
      "Architect and train deep learning models for high-speed line scan defect detection, wheel flange segmentation, and wayside rolling stock inspection.",
  },
  {
    _id: "job-2",
    title: "Laser Optics & Sensor Systems Specialist",
    experience: "2 - 5 Years",
    department: "Hardware Engineering",
    location: "Greater Noida Lab",
    type: "Full-Time",
    description:
      "Calibrate laser triangulation sensors, multi-beam infrared thermal optics, and IP68 ruggedized housings for railway track environments.",
  },
  {
    _id: "job-3",
    title: "Embedded Systems & Firmware Engineer",
    experience: "2 - 4 Years",
    department: "Edge Computing",
    location: "Delhi NCR",
    type: "Full-Time",
    description:
      "Develop real-time sensor acquisition firmware, air purge unit automation, and industrial Ethernet communication protocols.",
  },
  {
    _id: "job-4",
    title: "Mechanical Dynamics & 3D Simulation Lead",
    experience: "3 - 7 Years",
    department: "Mechanical R&D",
    location: "Greater Noida",
    type: "Full-Time",
    description:
      "Perform finite element analysis (FEA) and dynamic multi-body railway simulation to model wheel-rail interface wear and thermal dissipation.",
  },
];

const Careers = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Ensure page scrolls to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  // Smoothly scroll to job details when a job is selected
  useEffect(() => {
    if (selectedJob) {
      const timer = setTimeout(() => {
        const el = document.getElementById("job-details-view");
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 80);
      return () => clearTimeout(timer);
    }
  }, [selectedJob]);

  // Fetch jobs from backend API with fallback
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(
          "https://spacelabs-backend.vercel.app/api/jobs",
          { timeout: 4000 }
        );
        if (response.data && Array.isArray(response.data) && response.data.length > 0) {
          setJobs(response.data);
        } else {
          setJobs(FALLBACK_JOBS);
        }
      } catch (err) {
        console.warn("Using offline fallback career positions:", err.message);
        setJobs(FALLBACK_JOBS);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div style={{ backgroundColor: "var(--bg-base, #f8fafc)", minHeight: "100vh" }}>
      {loading ? (
        <div style={{ textAlign: "center", padding: "160px 24px", color: "var(--primary, #0284c7)" }}>
          Loading Careers Portal...
        </div>
      ) : (
        <CareersHero
          jobs={jobs}
          selectedJob={selectedJob}
          setSelectedJob={setSelectedJob}
        />
      )}

      {/* Show job details when a job is selected */}
      {selectedJob && (
        <div className={styles.jobDetailsSection} id="job-details-view">
          <JobDetails job={selectedJob} />
        </div>
      )}

      <LifeAt />
    </div>
  );
};

export default Careers;
