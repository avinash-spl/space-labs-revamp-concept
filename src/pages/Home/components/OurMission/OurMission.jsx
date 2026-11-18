import React from "react";
import styles from "./OurMission.module.css";
import { Target, Compass, Award, Cpu } from "lucide-react";

const OurMission = () => {
  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.container}>
        <div className={styles.card}>
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
            <div className={styles.pillar}>
              <div className={styles.pillarStep}>PHASE 01</div>
              <h4 className={styles.pillarTitle}>Hypothesize</h4>
              <p className={styles.pillarDesc}>
                Identify failure modes in railway mechanical & track infrastructure through physics simulation and optical models.
              </p>
            </div>
            <div className={styles.pillar}>
              <div className={styles.pillarStep}>PHASE 02</div>
              <h4 className={styles.pillarTitle}>Experiment</h4>
              <p className={styles.pillarDesc}>
                Develop ruggedized laser sensors, high-speed camera arrays, and custom AI neural models tested under extreme track conditions.
              </p>
            </div>
            <div className={styles.pillar}>
              <div className={styles.pillarStep}>PHASE 03</div>
              <h4 className={styles.pillarTitle}>Validate</h4>
              <p className={styles.pillarDesc}>
                Verify sub-millimeter tolerances (300μm) and high-speed operational compliance with RDSO and international railway standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
