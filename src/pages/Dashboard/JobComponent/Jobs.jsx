import React, { useState, useEffect } from "react";
import axios from "axios";
import JobCard from "./components/JobCard";
import JobModal from "./components/JobModal";
import styles from "./styles/JobCard.module.css";
import AddJobModal from "./components/AddJobModal"; // Import new modal
import { CgAdd } from "react-icons/cg";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [addModalOpen, setAddModalOpen] = useState(false);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const res = await axios.get(
        "https://spacelabs-backend.vercel.app/api/jobs"
      );
      setJobs(res.data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  const openModal = (job) => {
    setSelectedJob(job);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedJob(null);
  };

  return (
    <div className={styles.container}>
      <h1>
        Job Listings{" "}
        <button
          className={styles.addJobBtn}
          onClick={() => setAddModalOpen(true)}
        >
          Add New
        </button>
      </h1>

      <div className={styles.jobGrid}>
        {jobs.map((job) => (
          <JobCard key={job._id} job={job} openModal={openModal} />
        ))}
      </div>

      {modalOpen && (
        <JobModal
          job={selectedJob}
          closeModal={closeModal}
          fetchJobs={fetchJobs}
        />
      )}

      {addModalOpen && (
        <AddJobModal
          closeModal={() => setAddModalOpen(false)}
          fetchJobs={fetchJobs}
        />
      )}
    </div>
  );
};

export default Jobs;
