import React, { useRef } from "react";
import styles from "./HeroSection.module.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  ChevronDown,
  Sparkles,
  ShieldCheck,
  Zap,
  Activity
} from "lucide-react";

const HERO_STATS = [
  {
    value: "±300 μm",
    label: "Laser Wheel Accuracy",
    sub: "Full-speed wayside profilometry",
  },
  {
    value: "160+ km/h",
    label: "Dynamic Mainline Speed",
    sub: "High-speed rail line inspection",
  },
  {
    value: "500°C",
    label: "Thermal IR Telemetry",
    sub: "Multi-beam bearing & wheel diagnostics",
  },
  {
    value: "IP68",
    label: "All-Weather Enclosure",
    sub: "Zero civil disruption wayside deploy",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
};

const HeroSection = () => {
  const videoRef = useRef(null);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={styles.heroWrapper}>
      {/* Soft Ambient Warm Atmospheric Glows */}
      <div className={styles.ambientGlowPrimary} />
      <div className={styles.ambientGlowSecondary} />

      <motion.div
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Editorial Value Proposition Header */}
        <motion.div className={styles.headerArea} variants={itemVariants}>
          {/* Refined Pill Badge */}
          <div className={styles.pillBadge}>
            <span className={styles.liveIndicator}>
              <span className={styles.livePing} />
              <span className={styles.liveDot} />
            </span>
            <span className={styles.badgeText}>
              Autonomous Wayside Railway Intelligence
            </span>
            <span className={styles.badgeDivider}>•</span>
            <span className={styles.badgeMeta}>RDSO Aligned</span>
          </div>

          {/* Master Headline */}
          <h1 className={styles.headline}>
            Precision machine vision for{" "}
            <span className={styles.highlightText}>modern rail networks.</span>
          </h1>

          {/* Calming, High-Legibility Subheadline */}
          <p className={styles.subheadline}>
            <strong>SPACE.LABS</strong> engineers intelligent wayside sensor arrays —
            integrating sub-millimeter dynamic laser profilometry, multi-beam thermal diagnostics,
            and real-time rolling stock telemetry without halting mainline traffic.
          </p>

          {/* Fluid Action CTA Group */}
          <div className={styles.ctaGroup}>
            <button
              onClick={() => scrollToSection("products-section")}
              className={styles.primaryBtn}
            >
              <span>Explore Systems</span>
              <ArrowRight size={17} />
            </button>

            <a
              href="/assets/AWPMS Technical Brochure - Space.pdf"
              download="SpaceLabs_AWPMS_Brochure.pdf"
              className={styles.secondaryBtn}
            >
              <Download size={16} />
              <span>Technical Brochure (PDF)</span>
            </a>

            <Link to="/contact" className={styles.outlineBtn}>
              <span>Request RFQ / Demo</span>
            </Link>
          </div>
        </motion.div>

        {/* ===================================================================
            PREMIUM HARDWARE CINEMA VIEWPORT (Linear / Apple Inspired Frame)
            =================================================================== */}
        <motion.div
          className={styles.videoShowcaseContainer}
          variants={itemVariants}
        >
          <div className={styles.viewportChassis}>
            {/* Minimalist Top Control Bar */}
            <div className={styles.chassisTopBar}>
              <div className={styles.windowControls}>
                <span className={styles.macDotRed} />
                <span className={styles.macDotYellow} />
                <span className={styles.macDotGreen} />
                <span className={styles.stationLabel}>
                  STATION-01 // WAYSIDE OPTICAL STREAM
                </span>
              </div>

              <div className={styles.telemetryStatus}>
                <span className={styles.activeDot} />
                <span>160 KM/H DYNAMIC SCAN READY</span>
              </div>
            </div>

            {/* Pure Video Container */}
            <div className={styles.videoSurface}>
              <video
                ref={videoRef}
                src="/assets/railway.mp4"
                muted
                playsInline
                autoPlay
                loop
                className={styles.heroVideo}
              />

              {/* Floating Translucent Telemetry Cards (Fluid Animated Pills) */}
              <motion.div
                className={styles.floatingPillTopLeft}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className={styles.pillIconBox}>
                  <Zap size={14} className={styles.pillIcon} />
                </div>
                <div className={styles.pillContent}>
                  <span className={styles.pillTitle}>Laser Wheel Profilometry</span>
                  <span className={styles.pillStat}>Accuracy up to 300 μm</span>
                </div>
              </motion.div>

              <motion.div
                className={styles.floatingPillBottomRight}
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <div className={styles.pillIconBoxOrange}>
                  <Activity size={14} className={styles.pillIconOrange} />
                </div>
                <div className={styles.pillContent}>
                  <span className={styles.pillTitle}>Hot Box & Wheel Thermal IR</span>
                  <span className={styles.pillStat}>4–8 Beams • Up to 500°C</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Live System Specification Metric Grid */}
        <motion.div className={styles.statsGrid} variants={itemVariants}>
          {HERO_STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              className={styles.statCard}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
              <div className={styles.statSub}>{stat.sub}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Smooth Scroll Prompt */}
        <motion.button
          className={styles.scrollDown}
          onClick={() => scrollToSection("who-we-are")}
          aria-label="Scroll to architecture"
          variants={itemVariants}
        >
          <span className={styles.scrollText}>EXPLORE SYSTEM ARCHITECTURE</span>
          <ChevronDown size={17} className={styles.scrollIcon} />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
