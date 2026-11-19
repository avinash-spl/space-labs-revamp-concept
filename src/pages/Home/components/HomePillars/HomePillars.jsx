import React from "react";
import styles from "./HomePillars.module.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Layers,
  Database,
  ShieldCheck,
  Briefcase,
  ArrowRight,
  Cpu,
  Activity,
  Eye,
  Server,
  Users
} from "lucide-react";

const PILLARS = [
  {
    id: "systems",
    tag: "TRACKSIDE HARDWARE",
    title: "Wayside Sensor Systems",
    desc: "Sub-millimeter laser profilometry (AWPMS), multi-beam infrared thermal detection (HABD), machine vision (MVIS), and aerial drone surveys designed for mainline transit up to 160+ km/h.",
    highlights: ["±300 μm Laser Accuracy", "IP68 Sealed Enclosures", "Minimal Civil Preparation"],
    link: "/products",
    linkText: "Explore Systems Matrix",
    icon: Cpu,
    accent: "#ea580c",
  },
  {
    id: "datamap",
    tag: "CENTRAL RAIL SOFTWARE",
    title: "DataMAP™ Operations Suite",
    desc: "Unifying wayside hardware telemetry into an intuitive enterprise console. Features network-wide train passage surveillance, multi-tier alarm triage, and longitudinal wheel wear analytics.",
    highlights: ["Sub-2-Minute Triage", "Predictive Wear Curves", "100% Data Ownership"],
    link: "/datamap",
    linkText: "Open DataMAP™ Platform",
    icon: Database,
    accent: "#0284c7",
  },
  {
    id: "about",
    tag: "STUDIO & METHODOLOGY",
    title: "The Engineering Charter",
    desc: "Built on a rigorous three-phase scientific methodology: Hypothesize, Experiment, and Validate. Discover our foundational operating principles, leadership team, and studio culture.",
    highlights: ["Scientific Rigor", "RDSO Alignment", "Experienced Leadership"],
    link: "/about",
    linkText: "Discover Studio Principles",
    icon: ShieldCheck,
    accent: "#059669",
  },
  {
    id: "careers",
    tag: "TALENT & IMPACT",
    title: "Careers at Space Labs",
    desc: "Join an elite multidisciplinary team of optical physicists, computer vision researchers, and railway mechanical engineers solving high-stakes national infrastructure challenges.",
    highlights: ["Greater Noida R&D Lab", "Active Open Positions", "Direct Safety Impact"],
    link: "/careers",
    linkText: "View Open Engineering Roles",
    icon: Briefcase,
    accent: "#7c3aed",
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

const HomePillars = () => {
  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.container}>
        {/* Section Header */}
        <motion.div
          className={styles.headerBox}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.tag}>
            <Layers size={14} className={styles.tagIcon} />
            <span>PLATFORM ARCHITECTURE & MODULES</span>
          </div>
          <h2 className={styles.title}>Unified Railway Intelligence Ecosystem</h2>
          <p className={styles.subtitle}>
            Explore our dedicated technology modules. From tie-mounted trackside sensors to centralized enterprise operations analytics.
          </p>
        </motion.div>

        {/* 4 Pillars Grid with Staggered Entrance and Micro-Hover */}
        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.id}
                className={styles.card}
                variants={cardVariants}
                whileHover={{
                  y: -1.5,
                  boxShadow: "0 8px 22px rgba(15, 23, 42, 0.06)",
                  transition: { duration: 0.2 },
                }}
              >
                <div className={styles.cardTop}>
                  <motion.div
                    className={styles.iconBox}
                    style={{ color: pillar.accent }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon size={22} />
                  </motion.div>
                  <span className={styles.cardTag}>{pillar.tag}</span>
                </div>

                <h3 className={styles.cardTitle}>{pillar.title}</h3>
                <p className={styles.cardDesc}>{pillar.desc}</p>

                <div className={styles.highlightList}>
                  {pillar.highlights.map((h, idx) => (
                    <span key={idx} className={styles.highlightBadge}>
                      {h}
                    </span>
                  ))}
                </div>

                <div className={styles.cardFooter}>
                  <Link to={pillar.link} className={styles.cardLink}>
                    <span>{pillar.linkText}</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default HomePillars;
