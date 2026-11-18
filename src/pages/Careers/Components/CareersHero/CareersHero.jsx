import { useState } from "react";
import JobCard from "./Card";
import styles from "./CareersHero.module.css";
import { Briefcase, Sparkles, MapPin, ChevronLeft, ChevronRight } from "lucide-react";

const CareersHero = ({ jobs, setSelectedJob, selectedJob }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 6;
  const totalPages = Math.ceil(jobs.length / jobsPerPage);

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.container}>
        {/* Header Box */}
        <div className={styles.headerBox}>
          <div className={styles.tag}>
            <Briefcase size={14} className={styles.tagIcon} />
            <span>JOIN OUR ENGINEERING STUDIO</span>
          </div>

          <h1 className={styles.title}>Shape the Future of Railways</h1>

          <p className={styles.subtitle}>
            We are solving high-stakes railway safety challenges through independent engineering, 
            applied physics, laser optics, and computer vision. Explore our current career openings below.
          </p>
        </div>

        {/* Section Title */}
        <div className={styles.openingsHeader}>
          <h2 className={styles.openingsTitle}>Active Engineering Openings</h2>
          <span className={styles.openingsCount}>{jobs.length} POSITIONS AVAILABLE</span>
        </div>

        {/* Job Cards Grid */}
        <div className={styles.jobGrid}>
          {currentJobs.map((job, index) => (
            <JobCard
              key={job._id || index}
              job={job}
              jobName={job.title}
              experience={job.experience}
              onClick={() => {
                setSelectedJob(job);
                const el = document.getElementById("job-details-view");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                }
              }}
              selectedJob={selectedJob}
            />
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className={styles.pagination}>
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={styles.pageBtn}
            >
              <ChevronLeft size={16} />
              <span>PREVIOUS</span>
            </button>
            <span className={styles.pageIndicator}>
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={styles.pageBtn}
            >
              <span>NEXT</span>
              <ChevronRight size={16} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CareersHero;
