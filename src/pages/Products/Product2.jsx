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
  Activity,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import styles from "./Products.module.css";
import ImageCarousel from "./Components/ImageCarousel/ImageCarousel";

// Exact authentic specifications from space-labs.in & original codebase
const measurements = [
  { name: "High Train Speed", value: "Up to 250 kmph" },
  { name: "Bearing Temperature", value: "Upto 350°C" },
  { name: "Wheel Temperature", value: "Upto 500°C" },
  { name: "Accurate Sensor Resolution", value: "High Precision" },
  { name: "Operating Temperature", value: "-20°C to 70°C" },
];

const measurements2 = [
  { name: "Number of Bearing Measurement Beams", value: "4 - 8 Beams" },
  { name: "Number of Wheel Measurement Beams", value: "1 - 3 Beams" },
  { name: "Number of Brake Disk Measurement Beams", value: "1 - 3 Beams" },
];

// Exact authentic features from space-labs.in & original codebase
const features = [
  { icon: Tool, text: "Designed for compatibility with all Railway Systems." },
  { icon: Zap, text: "Easy to install and maintain" },
  { icon: Wind, text: "IP68 trackside equipment" },
  { icon: Shield, text: "Operating temperature from -20℃ to 70℃" },
  { icon: Database, text: "Self diagnosis feature" },
  { icon: Cloud, text: "Bidirectional operation up to 250 kmph" },
  { icon: Gauge, text: "8 beams per sensor for full axle coverage" },
  { icon: Gauge, text: "50 readings per axle for best in class accuracy" },
];

const narrativeParagraphs = [
  "Hotbox detection systems play a critical role in predictive maintenance for rail transportation by providing continuous thermal monitoring of axle bearings. These sophisticated diagnostic tools systematically track both short-term and long-term temperature variations, enabling rail operators to identify subtle thermal anomalies that may signal impending bearing failures. By detecting potential mechanical issues such as overheating and locked wheel conditions at an early stage, these detection systems allow for proactive intervention.",
  "This capability not only enhances passenger and cargo safety by preventing catastrophic equipment failures but also optimizes rail infrastructure reliability. The strategic implementation of hotbox detection technology significantly reduces unexpected operational disruptions, minimizes maintenance costs, and mitigates the risk of costly derailments and extensive equipment repairs.",
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

const Product2 = () => {
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
      {/* Breadcrumb Navigation */}
      <div className={styles.breadcrumbBar}>
        <div className={styles.breadcrumbs}>
          <Link to="/" className={styles.crumbLink}>Home</Link>
          <ChevronRight size={14} className={styles.crumbSep} />
          <Link to="/products" className={styles.crumbLink}>Systems</Link>
          <ChevronRight size={14} className={styles.crumbSep} />
          <span className={styles.crumbCurrent}>Hot Axle Box Detection (HABD)</span>
        </div>
      </div>

      {/* Hero Section */}
      <div className={styles.hero}>
        <div
          className={styles.heroOverlay}
          style={{
            backgroundImage: "url(/assets/product2/productBg2.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: isSafariMobile ? "scroll" : "fixed",
            opacity: 0.16,
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
            <span>SYSTEM 02 • THERMAL TELEMETRY & IR SENSING</span>
          </div>

          <h1 className={styles.heroTitle}>
            HOT BOX DETECTOR
            <span className={styles.heroSubtitle}>
              Hot Axle Box & Wheel Heat Detection System (HABD)
            </span>
          </h1>
        </motion.div>
      </div>

      {/* Narrative Section with Authentic Space Labs Description */}
      <section className={styles.narrativeSection}>
        <motion.div
          ref={paraRef}
          initial={{ opacity: 0, y: 28, scale: 0.985 }}
          animate={paraInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className={styles.para}
        >
          {narrativeParagraphs.map((text, idx) => (
            <motion.div
              key={idx}
              className={styles.paraCard}
              whileHover={{ y: -1.5, transition: { duration: 0.2 } }}
            >
              <div className={styles.paraCardHeader}>
                <span className={styles.paraNum}>0{idx + 1}</span>
              </div>
              <p className={styles.paraText}>{text}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Features Section */}
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
              <span className={styles.sectionTag}>THERMAL SENSING CAPABILITIES</span>
              <h2 className={styles.sectionTitle}>Features:</h2>
            </div>

            <div className={styles.featuresGrid}>
              {features.map(({ icon: Icon, text }, index) => (
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
              src="/assets/product2/hbd.png"
              alt="Hot Axle Box Detection hardware installation"
              className={styles.featureVideo}
              style={{ objectFit: "contain", background: "#f8fafc", padding: "16px" }}
            />
          </div>
        </motion.div>

        {/* Technical Specifications Section */}
        <motion.div
          ref={specsRef}
          className={styles.measurementsContainer}
          initial={{ opacity: 0, y: 28, scale: 0.985 }}
          animate={specsInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.imageGrid}>
            <img
              src="/assets/product1/diagram.png"
              alt="HABD system measurement schematic"
              className={styles.measurementImage}
              onClick={() => openModal("/assets/product1/diagram.png")}
            />
          </div>

          <div className={styles.measurementContent}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTag}>THERMAL METRICS</span>
              <h2 className={styles.sectionTitle}>Technical Specifications:</h2>
            </div>

            <div className={styles.measurementsGrid}>
              {measurements.map(({ name, value }, index) => (
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

            <div className={styles.measurementsGrid} style={{ marginTop: "12px" }}>
              {measurements2.map(({ name, value }, index) => (
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

        {/* Installation Carousel */}
        <ImageCarousel val={2} />
      </div>

      {/* Action Row */}
      <div className={styles.ctaContainer}>
        <a
          href="/assets/RTV-WPMS-NEW.pdf"
          download="SpaceLabs_HABD_Brochure.pdf"
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

export default Product2;
