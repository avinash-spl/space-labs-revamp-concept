import React, { useState } from "react";
import styles from "./FeaturedSystems.module.css";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
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
      "Flange Thickness & Height",
      "Root Thickness & Tread Hollow",
      "Wheel Diameter & Width",
      "Back-to-Back Distance",
      "Flange Slope Angle",
      "Full 100% Radial Profile",
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
      "Real-time Bearing Temperature",
      "Wheel Rim & Tread Heat Scan",
      "Brake Disk Temperature Beams",
      "Automated Alarm Thresholds",
      "High-Speed Train Compatibility",
      "Centralized Wayside Logging",
    ],
    image: "/assets/product2/hbd.png",
    diagram: "/assets/product1/diagram.png",
    brochure: "/assets/RTV-WPMS-NEW.pdf",
    icon: Activity,
  },
  {
    id: "mvis",
    path: "/product3",
    tag: "SYSTEM 03 • MVIS",
    title: "Machine Vision Inspection System",
    subtitle: "High-Resolution Optical Underside & Wayside Defect Scanning",
    description:
      "A high-speed optical inspection system utilizing pulsed LED illumination and line-scan cameras to capture high-definition imagery of running gear, bogies, springs, brake pads, and structural fasteners.",
    metrics: [
      { label: "Imaging", value: "Digital Line-Scan" },
      { label: "Speed", value: "Line Speed Scanning" },
      { label: "Defects", value: "Missing/Broken Parts" },
      { label: "Compliance", value: "Automated AI Audit" },
    ],
    parameters: [
      "Bogie Component Inspection",
      "Brake Pad Thickness & Wear",
      "Spring & Damper Integrity",
      "Missing Fastener Detection",
      "Foreign Object Identification",
      "Automated Visual Audit Trail",
    ],
    image: "/assets/product3/MVIS_Banner.jpg",
    diagram: "/assets/product1/diagram.png",
    brochure: "/assets/AWPMS Technical Brochure - Space.pdf",
    icon: Eye,
  },
  {
    id: "ccm",
    path: "/product4",
    tag: "SYSTEM 04 • CCM",
    title: "Condition Monitoring System",
    subtitle: "Rolling Stock Dynamic Vibration & Acoustic Telemetry",
    description:
      "Integrated telemetry suite capturing coach dynamics, track-vehicle interaction, and acoustic signatures. Predicts mechanical wear and guides precision preventative maintenance schedules.",
    metrics: [
      { label: "Sensors", value: "Vibration & Acoustics" },
      { label: "Platform", value: "Cloud Web Database" },
      { label: "Analysis", value: "Predictive Analytics" },
      { label: "Alarms", value: "Instant SMS/Email" },
    ],
    parameters: [
      "Ride Index & Comfort Telemetry",
      "Bearing Acoustic Signatures",
      "Wheel Flat & Polygonization",
      "Continuous Dynamic Health",
      "Fleet Maintenance Schedules",
      "Historical Telemetry Charts",
    ],
    image: "/assets/product4/CCM_better_image.png",
    diagram: "/assets/product1/diagram.png",
    brochure: "/assets/AWPMS Technical Brochure - Space.pdf",
    icon: Radio,
  },
  {
    id: "aerial",
    path: "/product5",
    tag: "SYSTEM 05 • AERIAL",
    title: "Aerial Railway Inspection System",
    subtitle: "Autonomous Drone & Overhead Catenary Surveying",
    description:
      "Autonomous aerial vision system engineered for overhead electrical catenary wires, mast alignments, track bed clearances, and corridor encroachments across difficult geographical terrain.",
    metrics: [
      { label: "Platform", value: "Autonomous UAV / Aerial" },
      { label: "Sensors", value: "LiDAR & 4K Optical" },
      { label: "Coverage", value: "Corridor Surveying" },
      { label: "Detection", value: "Catenary & Vegetation" },
    ],
    parameters: [
      "Overhead Wire Height & Stagger",
      "Mast & Insulator Inspection",
      "Vegetation Encroachment Map",
      "Right-of-Way Encroachments",
      "Track Geometry Photogrammetry",
      "Automated Flight Mission Logs",
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

                {/* Metrics Grid */}
                <div className={styles.metricsGrid}>
                  {current.metrics.map((m, i) => (
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

                {/* Action Buttons */}
                <div className={styles.actionRow}>
                  <Link to={current.path} className={styles.fullSpecBtn}>
                    <span>DETAILED SPECIFICATIONS</span>
                    <ArrowRight size={15} />
                  </Link>

                  <a
                    href={current.brochure}
                    download={`${current.id}_brochure.pdf`}
                    className={styles.brochureBtn}
                  >
                    <Download size={15} />
                    <span>DOWNLOAD BROCHURE</span>
                  </a>
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
                    <span>FIELD DEPLOYED HARDWARE</span>
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

        {/* Bottom Catalog Link */}
        <div className={styles.catalogFooter}>
          <Link to="/products" className={styles.allProductsLink}>
            <span>View Complete 5-System Matrix & Parametric Comparison</span>
            <ExternalLink size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSystems;
