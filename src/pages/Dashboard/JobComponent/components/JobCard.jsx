import React from "react";
import styles from "../styles/JobCard.module.css";

const JobCard = ({ job, openModal }) => {
  return (
    <div className={styles.card} onClick={() => openModal(job)}>
      <p>Job_id: {String(job._id).substring(17)}</p>
      <h2>{job.title}</h2>
      <p>Experience: {job.experience}</p>
    </div>
  );
};

export default JobCard;
