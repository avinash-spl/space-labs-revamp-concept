import { useState } from "react";
import { motion } from "framer-motion";
import JobCard from "./Card";
import styles from "./CareersHero.module.css";
import { Briefcase, Sparkles, MapPin, ChevronLeft, ChevronRight } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.985 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
};

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
        <motion.div
          className={styles.headerBox}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.tag}>
            <Briefcase size={14} className={styles.tagIcon} />
            <span>JOIN OUR ENGINEERING STUDIO</span>
          </div>

          <h1 className={styles.title}>Shape the Future of Railways</h1>

          <p className={styles.subtitle}>
            We are solving high-stakes railway safety challenges through independent engineering, 
            applied physics, laser optics, and computer vision. Explore our current career openings below.
          </p>
        </motion.div>

        {/* Section Title */}
        <div className={styles.openingsHeader}>
          <h2 className={styles.openingsTitle}>Active Engineering Openings</h2>
          <span className={styles.openingsCount}>{jobs.length} POSITIONS AVAILABLE</span>
        </div>

        {/* Job Cards Grid */}
        <motion.div
          className={styles.jobGrid}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {currentJobs.map((job, index) => (
            <motion.div
              key={job._id || index}
              variants={itemVariants}
              style={{ display: "flex", height: "100%" }}
            >
              <JobCard
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
            </motion.div>
          ))}
        </motion.div>

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
