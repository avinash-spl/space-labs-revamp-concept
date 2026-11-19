import React from "react";
import styles from "./HeroFooter.module.css";
import { Wrench, Eye, Activity, ShieldCheck, CheckCircle2 } from "lucide-react";

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

const HeroFooter = () => {
  return (
    <section id="who-we-are" className={styles.sectionWrapper}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.headerBox}>
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
        </div>

        {/* 4 Architecture Pillars Grid */}
        <div className={styles.grid}>
          {ARCHITECTURE_PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div key={idx} className={styles.card}>
                <div className={styles.cardHeader}>
                  <div className={styles.iconCircle}>
                    <Icon size={22} />
                  </div>
                  <span className={styles.cardIndex}>{pillar.index}</span>
                </div>

                <h3 className={styles.cardTitle}>{pillar.title}</h3>
                <p className={styles.cardText}>{pillar.desc}</p>

                <div className={styles.cardHighlight}>
                  <span className={styles.highlightBadge}>{pillar.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HeroFooter;
