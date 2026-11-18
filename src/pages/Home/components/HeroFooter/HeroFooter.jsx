import React from "react";
import styles from "./HeroFooter.module.css";
import { Compass, ShieldCheck, Eye, Zap } from "lucide-react";

const HeroFooter = () => {
  return (
    <section id="who-we-are" className={styles.sectionWrapper}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.headerBox}>
          <div className={styles.tag}>
            <Compass size={14} className={styles.tagIcon} />
            <span>WHO WE ARE</span>
          </div>
          <h2 className={styles.title}>
            Spatially Collaborative Engineering Studio
          </h2>
          <p className={styles.subtitle}>
            Independent R&D for next-generation railway safety, automated compliance, and real-time vision.
          </p>
        </div>

        {/* Narrative Cards */}
        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.iconCircle}>
                <Zap size={22} />
              </div>
              <span className={styles.cardIndex}>01 / PHILOSOPHY</span>
            </div>
            <h3 className={styles.cardTitle}>Creative Independence</h3>
            <p className={styles.cardText}>
              <strong>SPACE.LABS</strong> is an Advanced Engineering development studio built on the axiom
              that creative freedom and independence lead to better, more innovative railways.
            </p>
            <div className={styles.cardHighlight}>
              <span className={styles.highlightBadge}>R&D HYPOTHESIZE</span>
              <span className={styles.highlightArrow}>→</span>
              <span className={styles.highlightBadge}>EXPERIMENT</span>
              <span className={styles.highlightArrow}>→</span>
              <span className={styles.highlightBadge}>VALIDATE</span>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.iconCircle}>
                <Eye size={22} />
              </div>
              <span className={styles.cardIndex}>02 / MISSION</span>
            </div>
            <h3 className={styles.cardTitle}>Automated Vision & Compliance</h3>
            <p className={styles.cardText}>
              Spatially Collaborative Engineering (<strong>SPACE.LABS</strong>) focuses on developing optical vision
              systems, laser triangulation, and infrared telemetry for automated compliance and predictive maintenance.
            </p>
            <div className={styles.techPillList}>
              <span className={styles.techPill}>Laser Profilometry</span>
              <span className={styles.techPill}>IR Heat Scanning</span>
              <span className={styles.techPill}>Wayside Analytics</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroFooter;
