import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
import styles from "./Products.module.css"; // Importing CSS Module
import ImageCarousel from "./Components/ImageCarousel/ImageCarousel";

const measurements = [
  { name: "High Train Speed" },
  { name: "Bearing Temperature upto 350°C" },
  { name: "Wheel Temperature upto 500°C" },
  { name: "Accurate Sensor Resolution" },
  { name: "Operating temperature from -20°C to 70°C" },
];

const measurements2 = [
  { name: "Number of Bearing Measurement Beams", value: "4 - 8" },
  { name: "Number of Wheel Measurement Beams", value: "1 - 3" },
  { name: "Number of Brake Disk Measurement Beams", value: "1 - 3" },
];

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

const Product2 = () => {
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
  const handleDownload = () => {
    window.open("/assets/RTV-WPMS-NEW.pdf", "_blank");
  };

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
          style={{
            background: "url(/assets/product2/productBg2.jpg)",
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
            HOT BOX DETECTOR
            {/* <span className={styles.heroSubtitle}>Measurement System</span> */}
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
            Hotbox detection systems play a critical role in predictive
            maintenance for rail transportation by providing continuous thermal
            monitoring of axle bearings. These sophisticated diagnostic tools
            systematically track both short-term and long-term temperature
            variations, enabling rail operators to identify subtle thermal
            anomalies that may signal impending bearing failures. By detecting
            potential mechanical issues such as overheating and locked wheel
            conditions at an early stage, these detection systems allow for
            proactive intervention.
          </p>
          <p>
            This capability not only enhances passenger and cargo safety by
            preventing catastrophic equipment failures but also optimizes rail
            infrastructure reliability. The strategic implementation of hotbox
            detection technology significantly reduces unexpected operational
            disruptions, minimizes maintenance costs, and mitigates the risk of
            costly derailments and extensive equipment repairs.
          </p>
        </motion.div>
      </div>

      <div className={styles.section}>
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
            <img
              src="/assets/product2/hbd.png"
              alt="Railway technology"
              className={styles.featureVideo}
            />
          </div>
        </div>
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
              src="/assets/product1/diagram.png"
              alt="Railway wheel measurement"
              className={styles.measurementImage}
              onClick={() => openModal("/assets/product1/diagram.png")}
            />
          </div>
          <div className={styles.measurementContent}>
            <h1>Technical Specifications: </h1>
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
            <div className={styles.measurementsGrid}>
              {measurements2.map(({ name, value }, index) => (
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
        <ImageCarousel val={2} />
        {/* CTA Section */}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={styles.ctaContainer}
      >
        {/* <button onClick={handleDownload} className={styles.brochureButton}>
          Download Brochure <Download />
        </button> */}
      </motion.div>
      {/* Image Modal */}
      <ImageModal src={selectedImage} alt="Zoomed image" onClose={closeModal} />
    </div>
  );
};

export default Product2;
