import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
} from "lucide-react";
import styles from "./Products.module.css"; // Importing CSS Module

import { FaTools } from "react-icons/fa";

const measurements = [
  { name: "Full Wheel Profile", value: "100%" },
  { name: "Flange Thickness", value: "28.5mm" },
  { name: "Flange Height", value: "30.0mm" },
  { name: "Root Thickness", value: "45.2mm" },
  { name: "Tread Hollow", value: "0.4mm" },
  { name: "Wheel Diameter", value: "920mm" },
  { name: "Back-to-back", value: "1360mm" },
  { name: "Flange Slope", value: "65°" },
  { name: "Wheel Width", value: "135mm" },
];

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
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeButton} onClick={onClose}>
              <X size={24} />
            </button>
            <img src={src} alt={alt} className={styles.modalImage} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Product3 = () => {
  const [isSafariMobile, setIsSafariMobile] = useState(false);

  useEffect(() => {
    // Detect Safari on iOS
    const ua = window.navigator.userAgent;
    const iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
    const webkit = !!ua.match(/WebKit/i);
    const isSafariIOS =
      iOS && webkit && !ua.match(/CriOS/i) && !ua.match(/FxiOS/i);

    setIsSafariMobile(isSafariIOS);
  }, []);

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <div
          className={styles.heroOverlay}
          style={{
            background: "url(/assets/product3/MVIS_Banner.jpg)",
            backgroundSize: "cover",
            backgroundAttachment: isSafariMobile ? "scroll" : "fixed",
            filter: "brightness(0.5)",
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.heroContent}
        >
          <h1 className={styles.heroTitle}>
            Machine Vision Inspection System
            <span className={styles.heroSubtitle}>
              for Rolling Stock (MVIS)
            </span>
          </h1>
        </motion.div>
      </div>
      <div className={styles.workInProgress}>
        <FaTools />
        Work in progress
      </div>

      {/* Commented out sections remain commented, but with Safari fixes applied */}
      {/* <div style={getBackgroundStyle("/assets/moon.jpg")}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.para}
        >
          <p>
            Rolling stock faults pose a severe danger to railway safety. With
            increased rail traffic and train operations, it is critical to
            monitor the condition of rolling stock in order to discover defects
            that might lead to serious accidents. Because of increased train
            traffic density, manual inspection has become a time-consuming task.
            Furthermore, manual inspection methods for measuring wheel profile
            (or wheel flaws) rely heavily on human involvement, resulting in
            greater labour costs, poor reproducibility, and manual mistakes.
          </p>
          <p>
            Wheel Profile Measurement System systems are used to determine the
            wheel profiles of moving trains. These systems examine wheels for
            preventative maintenance, maintenance scheduling, derailment
            prevention, and track and rail damage caused by overly worn wheels.
          </p>
          <p>
            The WPMS system is a rugged system that can be used in difficult
            areas including workshops, depots, and yards. It features an
            extremely resilient construction that allows it to operate for
            lengthy periods of time without human interaction.
          </p>
        </motion.div>
        <ImageCarousel val={1} />
      </div> */}

      {/* <div className={styles.section}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className={styles.measurementsContainer}
          style={getBackgroundStyle("/assets/OBJ.jpg")}
        >
          <div className={styles.imageGrid}>
            <img
              src="/assets/product1/measurement.jpeg"
              alt="Railway wheel measurement"
              className={styles.measurementImage}
              onClick={() => openModal("/assets/product1/measurement.jpeg")}
            />
          </div>
          <div className={styles.measurementContent}>
            <h1>Measurements:</h1>
            <div className={styles.measurementsGrid}>
              {measurements.map(({ name, value }, index) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={styles.measurementCard}
                >
                  <h3 className={styles.measurementTitle}>{name}</h3>
                  <div className={styles.measurementValue}>{value}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

    
        <div className={styles.featuresContainer}>
          <div className={styles.featuresContent}>
            <h1>Features:</h1>
            <div className={styles.featuresGrid}>
              {features.map(({ icon: Icon, text }, index) => (
                <motion.div key={index} className={styles.featureItem}>
                  <p className={styles.featureText}>{text}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <div className={styles.imageGrid}>
            <video
              src="/assets/product1.mp4"
              alt="Railway technology"
              className={styles.featureVideo}
              autoPlay
              playsInline
              muted
              loop
            />
          </div>
        </div>

   
      </div> */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={styles.ctaContainer}
      >
        <button onClick={handleDownload} className={styles.brochureButton}>
          Download Brochure <Download />
        </button>
      </motion.div> */}
      {/* Image Modal */}
      {/* <ImageModal src={selectedImage} alt="Zoomed image" onClose={closeModal} /> */}
    </div>
  );
};

export default Product3;
