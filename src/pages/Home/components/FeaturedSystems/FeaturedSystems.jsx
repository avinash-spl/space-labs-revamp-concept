import React, { useState } from "react";
import styles from "./FeaturedSystems.module.css";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaTools } from "react-icons/fa";
import {
  Cpu,
  Activity,
  Eye,
  Radio,
  Plane,
  ArrowRight,
  Download,
  ShieldCheck,
  Check,
  ExternalLink
} from "lucide-react";

// Authentic Space Labs portfolio matching live site & original codebase
const SYSTEMS = [
  {
    id: "awpms",
    path: "/product1",
    tag: "SYSTEM 01 • AWPMS",
    title: "Automatic Wheel Profile Measurement System",
    subtitle: "High-Speed Laser Profilometry & Full Wheel Geometry Scanning",
    description:
      "A ruggedized, wayside automated measurement system that inspects rolling stock wheel profiles at line speeds without human intervention. Engineered with sub-millimeter precision for workshops, depots, and mainlines.",
    metrics: [
      { label: "Accuracy", value: "±300 μm" },
      { label: "Enclosure", value: "IP68 Rated" },
      { label: "Operation", value: "Bi-Directional" },
      { label: "Cleaning", value: "Air Purge Unit" },
    ],
    parameters: [
      "Wheel Profile",
      "Flange Thickness & Height",
      "Root Thickness & Tread Hollow",
      "Wheel Diameter & Width",
      "Back-to-Back Distance",
      "Flange Slope Angle",
    ],
    image: "/assets/product1/measurement.jpeg",
    diagram: "/assets/product1/diagram.png",
    brochure: "/assets/AWPMS Technical Brochure - Space.pdf",
    icon: Cpu,
  },
  {
    id: "habd",
    path: "/product2",
    tag: "SYSTEM 02 • HABD / HBD",
    title: "Hot Axle Box & Wheel Heat Detection System",
    subtitle: "Multi-Beam Infrared Thermal Telemetry for Rail Transit",
    description:
      "Advanced multi-beam non-contact infrared temperature scanner designed to detect overheated bearings and wheels before catastrophic failure occurs. Compatible with all freight, passenger, and metro rolling stock.",
    metrics: [
      { label: "Bearing Heat", value: "Upto 350°C" },
      { label: "Wheel Heat", value: "Upto 500°C" },
      { label: "Bearing Beams", value: "4 - 8 Beams" },
      { label: "Ambient Range", value: "-20°C to +70°C" },
    ],
    parameters: [
      "High Train Speed (up to 250 kmph)",
      "Bearing Temperature upto 350°C",
      "Wheel Temperature upto 500°C",
      "Accurate Sensor Resolution",
      "8 beams per sensor for full axle coverage",
      "50 readings per axle for best accuracy",
    ],
    image: "/assets/product2/hbd.png",
    diagram: "/assets/product1/diagram.png",
    brochure: "/assets/RTV-WPMS-NEW.pdf",
    icon: Activity,
  },
  {
    id: "mvis",
    path: "/product3",
    tag: "SYSTEM 03 • MVIS (WIP)",
    title: "Machine Vision Inspection System for Rolling Stock",
    subtitle: "Wayside Optical Defect Scanning for Rolling Stock",
    description:
      "Currently under active engineering development at Space Labs. Engineered for high-resolution wayside optical defect scanning, underside bogie imaging, and automated defect recognition without stopping train traffic.",
    isWIP: true,
    wipNotice:
      "Machine Vision Inspection System for Rolling Stock (MVIS) is currently under active engineering R&D at Space Labs. We are developing optical line-scan and pulsed illumination architectures for automated wayside deployment.",
    image: "/assets/product3/MVIS_Banner.jpg",
    icon: Eye,
  },
  {
    id: "ccm",
    path: "/product4",
    tag: "SYSTEM 04 • CCM (WIP)",
    title: "Coach Condition Monitoring System",
    subtitle: "Rolling Stock Dynamic Vibration & Acoustic Telemetry",
    description:
      "Currently under active engineering development at Space Labs. Engineered for continuous dynamic vibration telemetry, acoustic bearing diagnostics, and automated passenger ride comfort indexing.",
    isWIP: true,
    wipNotice:
      "Coach Condition Monitoring System (CCM) is currently under active engineering R&D at Space Labs. We are testing onboard dynamic vibration telemetry and predictive mechanical health algorithms.",
    image: "/assets/product4/CCM_better_image.png",
    icon: Radio,
  },
  {
    id: "aerial",
    path: "/product5",
    tag: "SYSTEM 05 • AERIAL",
    title: "Autonomous Aerial Inspection Platform",
    subtitle: "Autonomous Drone & Overhead Infrastructure Surveying",
    description:
      "A long-endurance, mission-ready drone solution purpose-built for railway and linear infrastructure inspection. Combines high-resolution imaging, LiDAR scanning, and AI-driven analytics without fouling the tracks.",
    metrics: [
      { label: "Flight Endurance", value: "55 min" },
      { label: "Coverage / Flight", value: "25 km" },
      { label: "Imaging Sensor", value: "100 MP" },
      { label: "LiDAR Range", value: "450 m" },
    ],
    parameters: [
      "Railway track & alignment inspection",
      "Overhead Equipment (OHE) monitoring",
      "Bridge, tunnel & viaduct structural assessment",
      "Right-of-way & vegetation encroachment",
      "Post-incident & disaster damage assessment",
      "Construction progress & asset audits",
    ],
    image: "/assets/product5/Arial_section_img.png",
    diagram: "/assets/product5/Arial_section_img2.png",
    brochure: "/assets/AWPMS Technical Brochure - Space.pdf",
    icon: Plane,
  },
];

const FeaturedSystems = () => {
  const [activeTab, setActiveTab] = useState(0);
  const current = SYSTEMS[activeTab];
  const Icon = current.icon;

  return (
    <section id="products-section" className={styles.sectionWrapper}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.headerBox}>
          <div className={styles.tag}>
            <ShieldCheck size={14} className={styles.tagIcon} />
            <span>ENGINEERED RAILWAY SYSTEMS</span>
          </div>
          <h2 className={styles.title}>Autonomous Inspection Portfolio</h2>
          <p className={styles.subtitle}>
            Field-proven, ruggedized vision systems engineered to operate 24/7/365 in harsh track environments.
          </p>
        </div>

        {/* Tab Navigator */}
        <div className={styles.tabNav}>
          {SYSTEMS.map((sys, idx) => {
            const TabIcon = sys.icon;
            const isActive = activeTab === idx;
            return (
              <button
                key={sys.id}
                onClick={() => setActiveTab(idx)}
                className={`${styles.tabBtn} ${isActive ? styles.activeTabBtn : ""}`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabPill"
                    className={styles.tabIndicator}
                    transition={{ type: "spring", stiffness: 450, damping: 35 }}
                  />
                )}
                {!isActive && <div className={styles.tabBtnBg} />}
                <span className={styles.tabBtnContent}>
                  <TabIcon size={16} />
                  <span className={styles.tabBtnText}>{sys.tag.split("•")[1].trim()}</span>
                </span>
              </button>
            );
          })}
        </div>

        {/* System Detail Showcase Card */}
        <div className={styles.showcaseCard}>
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className={styles.cardGrid}
            >
              {/* Left Info Column */}
              <div className={styles.infoCol}>
                <div className={styles.sysTagBox}>
                  <span className={styles.sysTag}>{current.tag}</span>
                </div>

                <h3 className={styles.sysTitle}>{current.title}</h3>
                <p className={styles.sysSubtitle}>{current.subtitle}</p>
                <p className={styles.sysDesc}>{current.description}</p>

                {current.isWIP ? (
                  <div className={styles.wipBannerBox}>
                    <div className={styles.wipBannerHeader}>
                      <FaTools size={18} />
                      <span>ACTIVE ENGINEERING R&D • WORK IN PROGRESS</span>
                    </div>
                    <p className={styles.wipBannerText}>{current.wipNotice}</p>
                  </div>
                ) : (
                  <>
                    {/* Metrics Grid */}
                    <div className={styles.metricsGrid}>
                      {current.metrics?.map((m, i) => (
                        <motion.div
                          key={i}
                          className={styles.metricItem}
                          whileHover={{ y: -2, scale: 1.02 }}
                          transition={{ type: "spring", stiffness: 350, damping: 25 }}
                        >
                          <div className={styles.metricValue}>{m.value}</div>
                          <div className={styles.metricLabel}>{m.label}</div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Parameter Badges */}
                    {current.parameters && (
                      <div className={styles.paramsBox}>
                        <div className={styles.paramsTitle}>MEASURED PARAMETERS & CAPABILITIES:</div>
                        <div className={styles.paramsList}>
                          {current.parameters.map((p, i) => (
                            <motion.span
                              key={i}
                              className={styles.paramChip}
                              whileHover={{ scale: 1.03, y: -1 }}
                              transition={{ type: "spring", stiffness: 400, damping: 25 }}
                            >
                              <Check size={12} className={styles.checkIcon} />
                              <span>{p}</span>
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                )}

                {/* Action Buttons */}
                <div className={styles.actionRow}>
                  <Link to={current.path} className={styles.fullSpecBtn}>
                    <span>{current.isWIP ? "VIEW DEVELOPMENT STATUS" : "DETAILED SPECIFICATIONS"}</span>
                    <ArrowRight size={15} />
                  </Link>

                  {current.isWIP ? (
                    <Link to="/contact" className={styles.brochureBtn}>
                      <span>INQUIRE ABOUT R&D</span>
                      <ArrowRight size={15} />
                    </Link>
                  ) : (
                    <a
                      href={current.brochure}
                      download={`${current.id}_brochure.pdf`}
                      className={styles.brochureBtn}
                    >
                      <Download size={15} />
                      <span>DOWNLOAD BROCHURE</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Right Media Column */}
              <div className={styles.mediaCol}>
                <div className={styles.imageFrame}>
                  <img
                    src={current.image}
                    alt={current.title}
                    className={styles.sysImage}
                  />
                  <div className={styles.imageBorder}></div>
                  <div className={styles.imageTag}>
                    <span>{current.isWIP ? "ACTIVE ENGINEERING LAB" : "FIELD DEPLOYED HARDWARE"}</span>
                  </div>
                </div>

                {current.diagram && (
                  <div className={styles.diagramPreview}>
                    <img
                      src={current.diagram}
                      alt="System Measurement Schematic"
                      className={styles.diagramImage}
                    />
                    <span className={styles.diagramLabel}>
                      Sub-millimeter Optical Measurement Schematic
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Catalog & Software Navigation Links */}
        <div className={styles.catalogFooter}>
          <Link to="/products" className={styles.allProductsLink}>
            <span>View Complete 5-System Matrix & Specifications</span>
            <ExternalLink size={15} />
          </Link>

          <a href="#datamap-section" className={styles.allProductsLink} style={{ marginLeft: "14px" }}>
            <span>Explore DataMAP™ Software Platform</span>
            <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSystems;
