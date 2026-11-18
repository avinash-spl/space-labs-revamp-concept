import React from "react";
import styles from "./LifeAt.module.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, ArrowUp, CheckCircle2 } from "lucide-react";

const CULTURE_HIGHLIGHTS = [
  "Advanced 3D Modeling & Simulation R&D",
  "High-Precision Laser & Camera Optics",
  "Edge AI Inference & Deep Learning Labs",
  "Supportive, Merit-Driven Engineering Culture",
  "Direct Impact on National Rail Safety",
];

const LifeAt = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.container}>
        <div className={styles.contentGrid}>
          {/* Text Side */}
          <motion.div
            className={styles.textBox}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.tag}>
              <Sparkles size={14} className={styles.tagIcon} />
              <span>STUDIO CULTURE</span>
            </div>

            <h2 className={styles.title}>Life at Space Labs</h2>

            <p className={styles.leadText}>
              Our team is comprised of specialists in <strong>3D modeling and simulation</strong>, 
              <strong> laser and camera-based optics</strong>, <strong>computer vision</strong>, and 
              <strong> artificial intelligence</strong>. Our culture is built on respect, growth, and a shared passion for excellence.
            </p>

            <p className={styles.bodyText}>
              At Space-labs, we believe work should feel like a second home—where innovation thrives, 
              collaboration is natural, and every voice matters. Join us, and be part of a company that 
              invests in your success while fostering a positive, dynamic, and fulfilling environment.
            </p>

            <div className={styles.highlightsList}>
              {CULTURE_HIGHLIGHTS.map((item, idx) => (
                <div key={idx} className={styles.highlightItem}>
                  <CheckCircle2 size={16} className={styles.checkIcon} />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className={styles.ctaBox}>
              <Link to="/careers" className={styles.careerBtn}>
                <span>EXPLORE OPEN ROLES</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>

          {/* Photo Side */}
          <motion.div
            className={styles.imageColumn}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.imageCard}>
              <img
                src="/assets/team/Office_Grp_New.png"
                alt="Space Labs Team Culture"
                className={styles.teamPhoto}
              />
              <div className={styles.imageOverlay}></div>
              <div className={styles.photoCaption}>
                <span className={styles.captionTag}>SPACE LABS TEAM</span>
                <span className={styles.captionTitle}>Research & Development Lab</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Back to top button */}
        <div className={styles.backToTopContainer}>
          <button onClick={scrollToTop} className={styles.backToTopBtn}>
            <ArrowUp size={16} />
            <span>BACK TO TOP</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default LifeAt;
