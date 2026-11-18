import React from "react";
import styles from "./OurMission.module.css";
import { motion } from "framer-motion";
import { Target, Compass, Award, Cpu } from "lucide-react";

const OurMission = () => {
  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.container}>
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.tag}>
            <Target size={14} className={styles.tagIcon} />
            <span>ENGINEERING CHARTER</span>
          </div>

          <h2 className={styles.headline}>Our Mission & Axiom</h2>

          <p className={styles.missionText}>
            <strong>SPACE.LABS</strong> is an Advanced Engineering development studio built on the axiom
            that creative freedom and independence lead to better, more innovative railways.
          </p>

          <p className={styles.subText}>
            We believe that transformative engineering takes rigorous methodology—<strong>hypothesize</strong>, 
            <strong> experiment</strong>, and <strong>validate</strong>—and we take immense pride in delivering 
            uncompromising operational excellence to the global rail transit ecosystem.
          </p>

          <div className={styles.pillarsGrid}>
            <motion.div
              className={styles.pillar}
              whileHover={{ y: -4, transition: { type: "spring", stiffness: 350 } }}
            >
              <div className={styles.pillarStep}>PHASE 01</div>
              <h4 className={styles.pillarTitle}>Hypothesize</h4>
              <p className={styles.pillarDesc}>
                Identify failure modes in railway mechanical & track infrastructure through physics simulation and optical models.
              </p>
            </motion.div>
            <motion.div
              className={styles.pillar}
              whileHover={{ y: -4, transition: { type: "spring", stiffness: 350 } }}
            >
              <div className={styles.pillarStep}>PHASE 02</div>
              <h4 className={styles.pillarTitle}>Experiment</h4>
              <p className={styles.pillarDesc}>
                Develop ruggedized laser sensors, high-speed camera arrays, and custom AI neural models tested under extreme track conditions.
              </p>
            </motion.div>
            <motion.div
              className={styles.pillar}
              whileHover={{ y: -4, transition: { type: "spring", stiffness: 350 } }}
            >
              <div className={styles.pillarStep}>PHASE 03</div>
              <h4 className={styles.pillarTitle}>Validate</h4>
              <p className={styles.pillarDesc}>
                Verify sub-millimeter tolerances (300μm) and high-speed operational compliance with RDSO and international railway standards.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurMission;
