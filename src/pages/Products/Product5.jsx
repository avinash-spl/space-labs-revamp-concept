import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import {
  Plane,
  X,
  Download,
  ArrowRight,
  Route,
  Activity,
  Layers,
  MapPin,
  AlertTriangle,
  Eye,
  ChevronRight,
} from "lucide-react";
import styles from "./Products.module.css";
import ImageCarousel from "./Components/ImageCarousel/ImageCarousel";

// Exact authentic use cases from space-labs.in & original codebase
const useCases = [
  { icon: Route, text: "Railway track & alignment inspection" },
  { icon: Activity, text: "Overhead Equipment (OHE) & catenary monitoring" },
  { icon: Layers, text: "Bridge, tunnel & viaduct structural assessment" },
  { icon: MapPin, text: "Right-of-way & vegetation encroachment mapping" },
  { icon: AlertTriangle, text: "Post-incident & disaster damage assessment" },
  { icon: Eye, text: "Construction progress & asset audits" },
];

// Exact authentic specifications from space-labs.in & original codebase
const specifications = [
  { name: "Flight Endurance", value: "55 min" },
  { name: "Coverage per Flight", value: "25 km" },
  { name: "Imaging Sensor", value: "100 MP" },
  { name: "LiDAR Range", value: "450 m" },
  { name: "Point Density", value: "600 pts/m²" },
  { name: "Ground Sample Distance", value: "1 cm/px" },
  { name: "Wind Resistance", value: "12 m/s" },
  { name: "Operating Temperature", value: "-20°C to 50°C" },
  { name: "Communication Range", value: "30 km" },
];

const carouselImages = [
  "/assets/product5/arial1.png",
  "/assets/product5/arial2.png",
  "/assets/product5/arial3.png",
];

const ImageModal = ({ src, alt, onClose }) => {
  return (
    <AnimatePresence>
      {src && (
        <motion.div
          className={styles.modalOverlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className={styles.modalContent}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.closeButton}
              onClick={onClose}
              aria-label="Close image modal"
            >
              <X size={20} />
            </button>
            <img src={src} alt={alt} className={styles.modalImage} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Product5 = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [paraRef, paraInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [featRef, featInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [whyRef, whyInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [specsRef, specsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [isSafariMobile, setIsSafariMobile] = useState(false);

  useEffect(() => {
    const ua = window.navigator.userAgent;
    const iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
    const webkit = !!ua.match(/WebKit/i);
    const isSafariIOS = iOS && webkit && !ua.match(/CriOS/i) && !ua.match(/FxiOS/i);
    setIsSafariMobile(isSafariIOS);
  }, []);

  const openModal = (src) => setSelectedImage(src);
  const closeModal = () => setSelectedImage(null);

  return (
    <div className={styles.container}>
      {/* Breadcrumb Navigation */}
      <div className={styles.breadcrumbBar}>
        <div className={styles.breadcrumbs}>
          <Link to="/" className={styles.crumbLink}>Home</Link>
          <ChevronRight size={14} className={styles.crumbSep} />
          <Link to="/products" className={styles.crumbLink}>Systems</Link>
          <ChevronRight size={14} className={styles.crumbSep} />
          <span className={styles.crumbCurrent}>Autonomous Aerial Railway Inspection Platform</span>
        </div>
      </div>

      {/* Hero Section */}
      <div className={styles.hero}>
        <div
          className={styles.heroOverlay}
          style={{
            backgroundImage: "url(/assets/product5/Arial_nav_Banner.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: isSafariMobile ? "scroll" : "fixed",
            opacity: 0.2,
          }}
        />
        <div className={styles.heroGlow} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={styles.heroContent}
        >
          <div className={styles.heroTag}>
            <span className={styles.heroTagDot} />
            <span>SYSTEM 05 • AUTONOMOUS DRONE SURVEYING</span>
          </div>

          <h1 className={styles.heroTitle}>
            Autonomous Aerial
            <span className={styles.heroSubtitle}>Inspection Platform</span>
          </h1>
        </motion.div>
      </div>

      {/* What is the product? */}
      <section className={styles.narrativeSection}>
        <motion.div
          ref={paraRef}
          initial={{ opacity: 0, y: 20 }}
          animate={paraInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className={styles.para}
        >
          <div className={styles.paraCard} style={{ gridColumn: "1 / -1" }}>
            <div className={styles.paraCardHeader}>
              <span className={styles.paraNum}>01</span>
              <h3 className={styles.sectionTitle} style={{ fontSize: "1.4rem" }}>
                What is the product?
              </h3>
            </div>
            <p className={styles.paraText}>
              The Autonomous Aerial Inspection Platform is a long-endurance, mission-ready
              drone solution purpose-built for railway and linear infrastructure inspection.
              It combines high-resolution imaging, LiDAR scanning and AI-driven analytics
              to deliver a complete digital view of track, overhead equipment, structures
              and right-of-way — all without fouling the line or putting boots on the ballast.
            </p>
            <p className={styles.paraText} style={{ marginTop: "12px" }}>
              Designed to meet the stringent safety and operational requirements of modern
              rail networks, the platform replaces manual visual patrols with a repeatable,
              data-driven inspection workflow that improves safety, reduces cost and enables
              predictive maintenance across thousands of route kilometres.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Objective & Use Cases */}
      <div className={styles.section}>
        <motion.div
          ref={featRef}
          className={styles.featuresContainer}
          initial={{ opacity: 0, y: 28, scale: 0.985 }}
          animate={featInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.featuresContent}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTag}>OPERATIONAL OBJECTIVES</span>
              <h2 className={styles.sectionTitle}>Objective & Use Cases:</h2>
            </div>

            <div className={styles.featuresGrid}>
              {useCases.map(({ icon: Icon, text }, index) => (
                <motion.div
                  key={index}
                  className={styles.featureItem}
                  whileHover={{ y: -1 }}
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                >
                  <div className={styles.featureIconBox}>
                    <Icon size={18} />
                  </div>
                  <p className={styles.featureText}>{text}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className={styles.imageGrid}>
            <img
              src="/assets/product5/Arial_section_img.png"
              alt="Aerial railway inspection overview"
              className={styles.featureVideo}
              style={{ objectFit: "contain", background: "#f8fafc", padding: "12px", cursor: "zoom-in" }}
              onClick={() => openModal("/assets/product5/Arial_section_img.png")}
            />
          </div>
        </motion.div>
      </div>

      {/* Why Drones? */}
      <section className={styles.narrativeSection}>
        <motion.div
          ref={whyRef}
          initial={{ opacity: 0, y: 20 }}
          animate={whyInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className={styles.para}
        >
          <div className={styles.paraCard} style={{ gridColumn: "1 / -1" }}>
            <div className={styles.paraCardHeader}>
              <span className={styles.paraNum}>02</span>
              <h3 className={styles.sectionTitle} style={{ fontSize: "1.4rem" }}>
                Why Drones?
              </h3>
            </div>
            <p className={styles.paraText}>
              Manual track-walking inspection is slow, hazardous and limited by line-of-sight.
              The Autonomous Aerial Inspection Platform completes in minutes what a survey
              team would take days to cover, scanning entire route corridors at a fraction
              of the cost per kilometre and without exposing personnel to live tracks.
            </p>
            <p className={styles.paraText} style={{ marginTop: "12px" }}>
              From the air, the system reaches embankments, cuttings, bridges and elevated
              overhead equipment that are difficult or unsafe to inspect from the ground.
              High-resolution imagery and LiDAR data are captured uniformly across every pass,
              so results are repeatable and directly comparable across inspection cycles.
            </p>
            <p className={styles.paraText} style={{ marginTop: "12px" }}>
              AI-assisted defect detection turns each flight into a structured, geo-referenced
              dataset — enabling trend analysis, predictive maintenance and faster decision-making
              than any manual workflow can deliver.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Specifications & Capabilities */}
      <div className={styles.section}>
        <motion.div
          ref={specsRef}
          className={styles.measurementsContainer}
          initial={{ opacity: 0, y: 28, scale: 0.985 }}
          animate={specsInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.measurementContent}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTag}>MISSION PARAMETERS</span>
              <h2 className={styles.sectionTitle}>Specifications & Capabilities:</h2>
            </div>

            <div className={styles.measurementsGrid}>
              {specifications.map(({ name, value }, index) => (
                <motion.div
                  key={name}
                  className={styles.measurementCard}
                  whileHover={{ y: -1.5 }}
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                >
                  <span className={styles.measurementTitle}>{name}</span>
                  <span className={styles.measurementValue}>{value}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className={styles.imageGrid}>
            <img
              src="/assets/product5/Arial_section_img2.png"
              alt="Aerial inspection capabilities schematic"
              className={styles.measurementImage}
              onClick={() => openModal("/assets/product5/Arial_section_img2.png")}
            />
          </div>
        </motion.div>

        {/* Carousel */}
        <div style={{ paddingTop: "20px" }}>
          <ImageCarousel images={carouselImages} />
        </div>
      </div>

      {/* Action Row */}
      <div className={styles.ctaContainer}>
        <Link to="/contact" className={styles.brochureButton}>
          <span>Inquire / Request Aerial Surveying RFQ</span>
          <ArrowRight size={16} />
        </Link>
      </div>

      {/* Image Modal */}
      <ImageModal
        src={selectedImage}
        alt="Zoomed aerial imagery"
        onClose={closeModal}
      />
    </div>
  );
};

export default Product5;
