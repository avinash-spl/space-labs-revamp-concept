import React from "react";
import styles from "./HeroFooter.module.css";
import { motion } from "framer-motion";
import { Wrench, Eye, Activity, ShieldCheck } from "lucide-react";

const ARCHITECTURE_PILLARS = [
  {
    index: "01 / TRACK-FRIENDLY MOUNTING",
    title: "Minimal Site Preparation",
    desc: "Unlike complex legacy equipment, Space Labs wayside units clamp directly onto existing track sleepers and rail sections without requiring extensive civil foundation work or disruption to native railway tracks.",
    highlight: "NO TRACK CUTTING • RAPID 1-DAY INSTALLATION • IP68 RATED",
    icon: Wrench,
  },
  {
    index: "02 / OPTICAL METROLOGY",
    title: "Sub-Millimeter Dynamic Precision",
    desc: "High-speed line-scan imaging and multi-laser triangulation capture certified full wheel profiles down to ±300 μm tolerances as rolling stock passes at operational mainline transit speeds (160+ km/h).",
    highlight: "±300 μm PRECISION • 160+ KM/H MAINLINE • FULL GEOMETRY",
    icon: Eye,
  },
  {
    index: "03 / THERMAL SURVEILLANCE",
    title: "Multi-Beam Infrared Detection",
    desc: "Multi-beam optical pyrometer arrays monitor temperature curves across 4 to 8 distinct bearing zones and wheel rims, catching bearing failures and locked brakes before catastrophic damage can occur.",
    highlight: "4–8 BEAMS PER AXLE • BEARINGS 350°C • WHEELS 500°C",
    icon: Activity,
  },
  {
    index: "04 / DATA GOVERNANCE",
    title: "Open APIs & Total Data Ownership",
    desc: "Every Space Labs system transmits data over open REST and MQTT protocols. Railroad operators retain 100% ownership and full governance over alarms, rules, thresholds, and enterprise system integration.",
    highlight: "OPEN REST / MQTT • ZERO VENDOR LOCK-IN • RDSO COMPLIANT",
    icon: ShieldCheck,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.985 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const HeroFooter = () => {
  return (
    <section id="who-we-are" className={styles.sectionWrapper}>
      <div className={styles.container}>
        {/* Section Header */}
        <motion.div
          className={styles.headerBox}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.tag}>
            <ShieldCheck size={14} className={styles.tagIcon} />
            <span>TRACK-FRIENDLY WAYSIDE ARCHITECTURE</span>
          </div>
          <h2 className={styles.title}>
            Engineered for Modern Railway Demands
          </h2>
          <p className={styles.subtitle}>
            Eliminating heavy civil disruption, proprietary hardware silos, and operational bottlenecks across mainline networks.
          </p>
        </motion.div>

        {/* 4 Architecture Pillars Grid */}
        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {ARCHITECTURE_PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                className={styles.card}
                variants={cardVariants}
                whileHover={{
                  y: -1.5,
                  boxShadow: "0 10px 24px rgba(15, 23, 42, 0.06)",
                  transition: { duration: 0.2 },
                }}
              >
                <div className={styles.cardHeader}>
                  <motion.div
                    className={styles.iconCircle}
                    whileHover={{ scale: 1.08, rotate: 4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <Icon size={22} />
                  </motion.div>
                  <span className={styles.cardIndex}>{pillar.index}</span>
                </div>

                <h3 className={styles.cardTitle}>{pillar.title}</h3>
                <p className={styles.cardText}>{pillar.desc}</p>

                <div className={styles.cardHighlight}>
                  <span className={styles.highlightBadge}>{pillar.highlight}</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroFooter;
