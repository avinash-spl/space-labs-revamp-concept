import React from "react";
import styles from "./Card.module.css";
import { ArrowRight, MapPin, Briefcase, Clock } from "lucide-react";

const JobCard = ({ jobName, experience, onClick, selectedJob, job }) => {
  const isSelected = selectedJob && (selectedJob._id === job?._id || selectedJob.title === jobName);

  return (
    <div
      className={`${styles.cardContainer} ${isSelected ? styles.selectedCard : ""}`}
      onClick={onClick}
    >
      <div className={styles.cardHeader}>
        <div className={styles.tagBadge}>
          <Briefcase size={13} />
          <span>{job?.department || "ENGINEERING"}</span>
        </div>
        <span className={styles.jobType}>{job?.type || "Full-Time"}</span>
      </div>

      <div className={styles.cardBody}>
        <h3 className={styles.jobTitle}>{jobName}</h3>
        <p className={styles.jobSnippet}>
          {job?.description || "Explore this critical engineering role advancing autonomous railway vision at Space Labs."}
        </p>
      </div>

      <div className={styles.cardFooter}>
        <div className={styles.metaRow}>
          <div className={styles.metaItem}>
            <Clock size={13} className={styles.metaIcon} />
            <span>{experience || "2+ Years Exp"}</span>
          </div>
          <div className={styles.metaItem}>
            <MapPin size={13} className={styles.metaIcon} />
            <span>{job?.location || "Delhi NCR"}</span>
          </div>
        </div>

        <button className={styles.applyBtn} type="button">
          <span>APPLY</span>
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
};

export default JobCard;
