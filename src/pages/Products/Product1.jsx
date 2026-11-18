import React, { useState, useEffect } from "react";
import { AnimatePresence, color, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
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
import styles from "./Products.module.css";
import ImageCarousel from "./Components/ImageCarousel/ImageCarousel";
import DownloadButton from "./Components/DownloadButton/DownloadButton";

const measurements = [
  { name: "Wheel Profile" },
  { name: "Flange Thickness" },
  { name: "Flange Height" },
  { name: "Root Thickness" },
  { name: "Tread Hollow" },
  { name: "Wheel Diameter" },
  { name: "Back-to-back" },
  { name: "Flange Slope" },
  { name: "Wheel Width" },
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

const Product1 = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0 });
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

  const openModal = (src) => setSelectedImage(src);
  const closeModal = () => setSelectedImage(null);
  // Safari-friendly background styles
  const getBackgroundStyle = (imageUrl) => {
    return {
      background: `url(${imageUrl})`,
      backgroundSize: "cover",
      backgroundPosition: isSafariMobile ? "center" : "10% 35%",
      backgroundAttachment: isSafariMobile ? "scroll" : "fixed",
    };
  };

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <div
          className={styles.heroOverlay}
          style={isSafariMobile ? { backgroundAttachment: "scroll" } : {}}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.heroContent}
        >
          <h1 className={styles.heroTitle}>
            Automatic Wheel Profile
            <span className={styles.heroSubtitle}>Measurement System</span>
          </h1>
        </motion.div>
      </div>
      <div style={getBackgroundStyle("/assets/moon.jpg")}>
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
            Wheel Profile Measurement Systems are used to determine the wheel
            profiles of moving trains. These systems examine wheels for
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
      </div>

      <div className={styles.section}>
        {/* features */}
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
              controls={false}
            />
          </div>
        </div>
        {/* Measurements Section */}
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
                  <h3
                    className={styles.measurementTitle}
                    style={value ? {} : { color: "#2b2b2bcc" }}
                  >
                    {name}
                  </h3>
                  {value && (
                    <div className={styles.measurementValue}>{value}</div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <ImageCarousel val={1} />

        {/* CTA Section */}
      </div>

      <DownloadButton src={"/assets/AWPMS Technical Brochure - Space.pdf"} />
      {/* Image Modal */}
      <ImageModal src={selectedImage} alt="Zoomed image" onClose={closeModal} />
    </div>
  );
};

export default Product1;
