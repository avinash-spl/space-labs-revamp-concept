import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import {
  Gauge,
  Shield,
  Zap,
  PenTool as Tool,
  Database,
  Cloud,
  Wind,
  Cpu,
  X,
  Download,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import styles from "./Products.module.css";
import ImageCarousel from "./Components/ImageCarousel/ImageCarousel";

// Exact authentic measurements from space-labs.in & original codebase
const measurements = [
  { name: "Wheel Profile", value: "Full Profile" },
  { name: "Flange Thickness", value: "Dynamic Measurement" },
  { name: "Flange Height", value: "Dynamic Measurement" },
  { name: "Root Thickness", value: "Dynamic Measurement" },
  { name: "Tread Hollow", value: "Dynamic Measurement" },
  { name: "Wheel Diameter", value: "Dynamic Measurement" },
  { name: "Back-to-back", value: "Dynamic Measurement" },
  { name: "Flange Slope", value: "Dynamic Measurement" },
  { name: "Wheel Width", value: "Dynamic Measurement" },
];

// Exact authentic features from space-labs.in & original codebase
const features = [
  { icon: Tool, text: "Easy Maintenance" },
  { icon: Zap, text: "Quick Installation" },
  { icon: Wind, text: "Air Purge Unit for system cleaning" },
  { icon: Shield, text: "IP68 rated protection" },
  { icon: Database, text: "Digital Imaging acquisition" },
  { icon: Cloud, text: "Web-based database" },
  { icon: Cpu, text: "System accuracy up to 300 microns" },
  { icon: Gauge, text: "Bi-directional System" },
];

const narrativeParagraphs = [
  "Rolling stock faults pose a severe danger to railway safety. With increased rail traffic and train operations, it is critical to monitor the condition of rolling stock in order to discover defects that might lead to serious accidents. Because of increased train traffic density, manual inspection has become a time-consuming task. Furthermore, manual inspection methods for measuring wheel profile (or wheel flaws) rely heavily on human involvement, resulting in greater labour costs, poor reproducibility, and manual mistakes.",
  "Wheel Profile Measurement Systems are used to determine the wheel profiles of moving trains. These systems examine wheels for preventative maintenance, maintenance scheduling, derailment prevention, and track and rail damage caused by overly worn wheels.",
  "The WPMS system is a rugged system that can be used in difficult areas including workshops, depots, and yards. It features an extremely resilient construction that allows it to operate for lengthy periods of time without human interaction.",
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

const Product1 = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [paraRef, paraInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [featRef, featInView] = useInView({ triggerOnce: true, threshold: 0.1 });
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
      {/* Hero Section */}
      <div className={styles.hero}>
        <div
          className={styles.heroOverlay}
          style={{
            backgroundImage: "url(/assets/product1/measurement.jpeg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: isSafariMobile ? "scroll" : "fixed",
            opacity: 0.14,
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
            <span>SYSTEM 01 • LASER PROFILOMETRY</span>
          </div>

          <h1 className={styles.heroTitle}>
            Automatic Wheel Profile
            <span className={styles.heroSubtitle}>Measurement System</span>
          </h1>
        </motion.div>
      </div>

      {/* Narrative Section with Authentic Space Labs Description */}
      <section className={styles.narrativeSection}>
        <motion.div
          ref={paraRef}
          initial={{ opacity: 0, y: 20 }}
          animate={paraInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className={styles.para}
        >
          {narrativeParagraphs.map((text, idx) => (
            <motion.div
              key={idx}
              className={styles.paraCard}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
            >
              <div className={styles.paraCardHeader}>
                <span className={styles.paraNum}>0{idx + 1}</span>
              </div>
              <p className={styles.paraText}>{text}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Features & Video Section */}
      <div className={styles.section}>
        <motion.div
          ref={featRef}
          className={styles.featuresContainer}
          initial={{ opacity: 0, y: 24 }}
          animate={featInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.featuresContent}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTag}>OPERATIONAL CAPABILITIES</span>
              <h2 className={styles.sectionTitle}>Features:</h2>
            </div>

            <div className={styles.featuresGrid}>
              {features.map(({ icon: Icon, text }, index) => (
                <motion.div
                  key={index}
                  className={styles.featureItem}
                  whileHover={{ y: -2, scale: 1.01 }}
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
            <video
              src="/assets/product1.mp4"
              alt="Railway laser profilometry dynamic scan"
              className={styles.featureVideo}
              autoPlay
              playsInline
              muted
              loop
              controls={false}
            />
          </div>
        </motion.div>

        {/* Measurements Section */}
        <motion.div
          ref={specsRef}
          className={styles.measurementsContainer}
          initial={{ opacity: 0, y: 24 }}
          animate={specsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.imageGrid}>
            <img
              src="/assets/product1/measurement.jpeg"
              alt="Railway wheel measurement schematic"
              className={styles.measurementImage}
              onClick={() => openModal("/assets/product1/measurement.jpeg")}
            />
          </div>

          <div className={styles.measurementContent}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTag}>METROLOGY PARAMETERS</span>
              <h2 className={styles.sectionTitle}>Measurements:</h2>
            </div>

            <div className={styles.measurementsGrid}>
              {measurements.map(({ name, value }, index) => (
                <motion.div
                  key={name}
                  className={styles.measurementCard}
                  whileHover={{ y: -2, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                >
                  <span className={styles.measurementTitle}>{name}</span>
                  <span className={styles.measurementValue}>{value}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Hardware Installation Carousel */}
        <ImageCarousel val={1} />
      </div>

      {/* Action Row */}
      <div className={styles.ctaContainer}>
        <a
          href="/assets/AWPMS Technical Brochure - Space.pdf"
          download="SpaceLabs_AWPMS_Brochure.pdf"
          className={styles.brochureButton}
        >
          <Download size={18} />
          <span>Download Brochure</span>
        </a>

        <Link to="/contact" className={styles.rfqButton}>
          <span>Inquire / Request Consultation</span>
          <ArrowRight size={16} />
        </Link>
      </div>

      {/* Image Zoom Modal */}
      <ImageModal
        src={selectedImage}
        alt="Zoomed measurement image"
        onClose={closeModal}
      />
    </div>
  );
};

export default Product1;
