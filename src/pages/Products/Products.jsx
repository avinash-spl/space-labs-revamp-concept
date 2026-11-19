import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaTools } from "react-icons/fa";
import {
  Cpu,
  Activity,
  Eye,
  Radio,
  Plane,
  ArrowRight,
  Download,
  Mail,
} from "lucide-react";
import styles from "./Products.module.css";

const PORTFOLIO_SYSTEMS = [
  {
    id: "product1",
    tag: "SYSTEM 01 • LASER PROFILOMETRY",
    name: "Automatic Wheel Profile Measurement System (AWPMS)",
    desc: "Wayside automated laser profilometry inspecting rolling stock wheel geometry at line speeds up to 160+ km/h with certified ±300 μm sub-millimeter precision.",
    specs: [
      { label: "Accuracy", value: "±300 μm" },
      { label: "Speed", value: "160+ km/h" },
      { label: "Enclosure", value: "IP68 Sealed" },
    ],
    path: "/product1",
    brochure: "/assets/AWPMS Technical Brochure - Space.pdf",
    icon: Cpu,
    image: "/assets/product1/measurement.jpeg",
  },
  {
    id: "product2",
    tag: "SYSTEM 02 • THERMAL TELEMETRY",
    name: "Hot Axle Box & Wheel Heat Detection System (HABD)",
    desc: "Multi-beam infrared non-contact thermal scanner designed to detect overheated bearings (up to 350°C) and hot wheels (up to 500°C) before catastrophic failure occurs.",
    specs: [
      { label: "Bearing Heat", value: "Upto 350°C" },
      { label: "Wheel Heat", value: "Upto 500°C" },
      { label: "Sensors", value: "4-8 Beams" },
    ],
    path: "/product2",
    brochure: "/assets/RTV-WPMS-NEW.pdf",
    icon: Activity,
    image: "/assets/product2/hbd.png",
  },
  {
    id: "product3",
    tag: "SYSTEM 03 • WORK IN PROGRESS",
    name: "Machine Vision Inspection System for Rolling Stock (MVIS)",
    desc: "Machine Vision Inspection System for Rolling Stock is currently under active engineering development at Space Labs. Engineered for automated optical wayside and underside defect inspection.",
    isWIP: true,
    wipNotice:
      "Currently under active engineering development and track testing at Space Labs. Designed for high-speed underside and bogie visual defect identification without interrupting train schedules.",
    path: "/product3",
    icon: Eye,
    image: "/assets/product3/MVIS_Banner.jpg",
  },
  {
    id: "product4",
    tag: "SYSTEM 04 • WORK IN PROGRESS",
    name: "Coach Condition Monitoring System (CCM)",
    desc: "Coach Condition Monitoring System is currently under active engineering development at Space Labs. Engineered for rolling stock dynamic vibration and acoustic telemetry.",
    isWIP: true,
    wipNotice:
      "Currently under active engineering development and dynamic track validation at Space Labs. Designed for onboard dynamic vibration telemetry, acoustic bearing diagnostics, and automated ride comfort indexing.",
    path: "/product4",
    icon: Radio,
    image: "/assets/product4/CCM_better_image.png",
  },
  {
    id: "product5",
    tag: "SYSTEM 05 • AERIAL DRONE",
    name: "Autonomous Aerial Railway Inspection Platform",
    desc: "Autonomous aerial vision system engineered for overhead electrical catenary wires, mast alignments, track bed clearances, and corridor encroachments across difficult terrain.",
    specs: [
      { label: "Endurance", value: "55 min Flight" },
      { label: "LiDAR Range", value: "450 m Scan" },
      { label: "Resolution", value: "100 MP Matrix" },
    ],
    path: "/product5",
    icon: Plane,
    image: "/assets/product5/Arial_section_img.png",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

const ProductsOverview = () => {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <div className={styles.heroGlow} />

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className={styles.heroContent}
        >
          <div className={styles.heroTag}>
            <span className={styles.heroTagDot} />
            <span>RDSO ALIGNED • AUTONOMOUS RAILWAY SUITE</span>
          </div>

          <h1 className={styles.heroTitle}>
            Engineered Railway Vision & Sensor Systems
          </h1>

          <p className={styles.heroSubtitle}>
            Comprehensive wayside laser metrology, multi-beam thermal detection, optical line-scan machine vision, dynamic coach telemetry, and autonomous aerial surveying.
          </p>
        </motion.div>
      </div>

      {/* Portfolio Grid */}
      <div className={styles.section}>
        <motion.div
          className={styles.portfolioGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          style={{ display: "flex", flexDirection: "column", gap: "32px" }}
        >
          {PORTFOLIO_SYSTEMS.map((sys) => {
            const Icon = sys.icon;
            return (
              <motion.div
                key={sys.id}
                className={styles.featuresContainer}
                variants={itemVariants}
                style={{ marginBottom: "0px" }}
              >
                <div className={styles.featuresContent}>
                  <div className={styles.sectionHeader}>
                    <span className={styles.sectionTag}>{sys.tag}</span>
                    <h2 className={styles.sectionTitle} style={{ fontSize: "1.6rem" }}>
                      {sys.name}
                    </h2>
                  </div>

                  <p style={{ fontSize: "0.95rem", color: "#475569", lineHeight: "1.7" }}>
                    {sys.desc}
                  </p>

                  {sys.isWIP ? (
                    <div className={styles.workInProgress} style={{ margin: "16px 0", maxWidth: "100%", justifyContent: "flex-start" }}>
                      <FaTools size={20} />
                      <div style={{ textAlign: "left" }}>
                        <div style={{ fontWeight: 700, fontSize: "0.95rem" }}>Work in progress</div>
                        <div style={{ fontSize: "0.82rem", color: "#64748b", fontWeight: 400 }}>{sys.wipNotice}</div>
                      </div>
                    </div>
                  ) : (
                    sys.specs && (
                      <div className={styles.measurementsGrid} style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
                        {sys.specs.map((s, i) => (
                          <div key={i} className={styles.measurementCard}>
                            <span className={styles.measurementTitle}>{s.label}</span>
                            <span className={styles.measurementValue} style={{ fontSize: "1.05rem" }}>
                              {s.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    )
                  )}

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginTop: "12px" }}>
                    <Link to={sys.path} className={styles.brochureButton} style={{ padding: "11px 22px", fontSize: "0.88rem" }}>
                      <span>{sys.isWIP ? "View Development Status" : "Explore Technical Specs"}</span>
                      <ArrowRight size={15} />
                    </Link>

                    {sys.isWIP ? (
                      <Link
                        to="/contact"
                        className={styles.rfqButton}
                        style={{ padding: "11px 20px", fontSize: "0.88rem" }}
                      >
                        <Mail size={15} />
                        <span>Inquire About R&D</span>
                      </Link>
                    ) : sys.brochure ? (
                      <a
                        href={sys.brochure}
                        download
                        className={styles.rfqButton}
                        style={{ padding: "11px 20px", fontSize: "0.88rem" }}
                      >
                        <Download size={15} />
                        <span>Brochure (PDF)</span>
                      </a>
                    ) : (
                      <Link
                        to="/contact"
                        className={styles.rfqButton}
                        style={{ padding: "11px 20px", fontSize: "0.88rem" }}
                      >
                        <Mail size={15} />
                        <span>Request Consultation</span>
                      </Link>
                    )}
                  </div>
                </div>

                <div className={styles.imageGrid}>
                  <img
                    src={sys.image}
                    alt={sys.name}
                    className={styles.featureVideo}
                    style={{ height: "320px", objectFit: sys.id === "product2" ? "contain" : "cover" }}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Global RFQ Footer CTA */}
      <div className={styles.ctaContainer}>
        <Link to="/contact" className={styles.brochureButton} style={{ padding: "15px 36px" }}>
          <span>Request Detailed System RFQ & Consultation</span>
          <ArrowRight size={17} />
        </Link>
      </div>
    </div>
  );
};

export default ProductsOverview;
