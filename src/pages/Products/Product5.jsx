import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  X,
  Route,
  Eye,
  AlertTriangle,
  Activity,
  MapPin,
  Layers,
} from "lucide-react";
import styles from "./Products.module.css";
import ImageCarousel from "./Components/ImageCarousel/ImageCarousel";

const useCases = [
  { icon: Route, text: "Railway track & alignment inspection" },
  { icon: Activity, text: "Overhead Equipment (OHE) & catenary monitoring" },
  { icon: Layers, text: "Bridge, tunnel & viaduct structural assessment" },
  { icon: MapPin, text: "Right-of-way & vegetation encroachment mapping" },
  { icon: AlertTriangle, text: "Post-incident & disaster damage assessment" },
  { icon: Eye, text: "Construction progress & asset audits" },
];

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

const Product5 = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0 });
  const [isSafariMobile, setIsSafariMobile] = useState(false);

  useEffect(() => {
    const ua = window.navigator.userAgent;
    const iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
    const webkit = !!ua.match(/WebKit/i);
    const isSafariIOS =
      iOS && webkit && !ua.match(/CriOS/i) && !ua.match(/FxiOS/i);

    setIsSafariMobile(isSafariIOS);
  }, []);

  const openModal = (src) => setSelectedImage(src);
  const closeModal = () => setSelectedImage(null);

  const getBackgroundStyle = (imageUrl) => {
    return {
      background: `url(${imageUrl})`,
      backgroundSize: "cover",
      backgroundPosition: isSafariMobile ? "center" : "10% 35%",
      backgroundAttachment: isSafariMobile ? "scroll" : "fixed",
    };
  };

  const carouselImages = [
    "/assets/product5/arial1.png",
    "/assets/product5/arial2.png",
    "/assets/product5/arial3.png",
  ];

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <div
          className={styles.heroOverlay}
          style={{
            background: "url(/assets/product5/Arial_nav_Banner.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: isSafariMobile ? "scroll" : "fixed",
            filter: "brightness(0.45)",
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.heroContent}
        >
          <h1 className={styles.heroTitle}>
            Autonomous Aerial
            <span className={styles.heroSubtitle}>Inspection Platform</span>
          </h1>
        </motion.div>
      </div>

      {/* What is the product? */}
      <div style={getBackgroundStyle("/assets/moon.jpg")}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.para}
        >
          <h1 style={{ textAlign: "center", marginBottom: "10px" }}>
            What is the product?
          </h1>
          <p>
            The Autonomous Aerial Inspection Platform is a long-endurance,
            mission-ready drone solution purpose-built for railway and linear
            infrastructure inspection. It combines high-resolution imaging,
            LiDAR scanning and AI-driven analytics to deliver a complete
            digital view of track, overhead equipment and surrounding
            right-of-way assets in a single autonomous flight.
          </p>
          <p>
            Pre-programmed flight corridors allow the platform to follow rail
            alignments at low altitude with centimetre-level accuracy, capturing
            geo-referenced imagery and 3D point clouds. The collected data is
            processed into actionable defect reports — identifying rail surface
            damage, missing fasteners, ballast deficiencies, OHE wear and
            vegetation intrusion — without disrupting live train operations.
          </p>
          <p>
            Designed for Indian Railways' scale and operating environment, the
            system replaces slow, manual track-walking with a repeatable,
            data-driven inspection workflow that improves safety, reduces cost
            and enables predictive maintenance across thousands of route
            kilometres.
          </p>
        </motion.div>
      </div>

      <div className={styles.section}>
        {/* Objective / Use Cases */}
        <div className={styles.featuresContainer} style={{ gap: "60px" }}>
          <div className={styles.featuresContent}>
            <h1>Objective &amp; Use Cases:</h1>
            <div
              className={styles.featuresGrid}
              style={{ gridTemplateColumns: "repeat(2, 320px)" }}
            >
              {useCases.map(({ icon: Icon, text }, index) => (
                <motion.div
                  key={index}
                  className={styles.featureItem}
                  style={{ minHeight: "100px", padding: "28px" }}
                >
                  <p className={styles.featureText}>{text}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <div>
            <img
              src="/assets/product5/Arial_section_img.png"
              alt="Aerial railway inspection"
              onClick={() =>
                openModal("/assets/product5/Arial_section_img.png")
              }
              style={{
                maxWidth: "100%",
                maxHeight: "360px",
                width: "auto",
                height: "auto",
                objectFit: "contain",
                borderRadius: "12px",
                cursor: "zoom-in",
              }}
            />
          </div>
        </div>
      </div>

      {/* Why drones? */}
      <div style={getBackgroundStyle("/assets/moon.jpg")}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.para}
        >
          <h1 style={{ textAlign: "center", marginBottom: "10px" }}>
            Why Drones?
          </h1>
          <p>
            Manual track-walking inspection is slow, hazardous and limited by
            line-of-sight. The Autonomous Aerial Inspection Platform completes
            in minutes what a survey team would take days to cover, scanning
            entire route corridors at a fraction of the cost per kilometre and
            without exposing personnel to live tracks.
          </p>
          <p>
            From the air, the system reaches embankments, cuttings, bridges
            and elevated overhead equipment that are difficult or unsafe to
            inspect from the ground. High-resolution imagery and LiDAR data
            are captured uniformly across every pass, so results are
            repeatable and directly comparable across inspection cycles.
          </p>
          <p>
            AI-assisted defect detection turns each flight into a structured,
            geo-referenced dataset — enabling trend analysis, predictive
            maintenance and faster decision-making than any manual workflow
            can deliver.
          </p>
        </motion.div>
      </div>

      <div className={styles.section}>
        {/* Product Specifications */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className={styles.measurementsContainer}
          style={{ ...getBackgroundStyle("/assets/OBJ.jpg"), top: 0 }}
        >
          <div className={styles.measurementContent}>
            <h1>Specifications &amp; Capabilities:</h1>
            <div className={styles.measurementsGrid}>
              {specifications.map(({ name, value }, index) => (
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
          <div className={styles.imageGrid}>
            <img
              src="/assets/product5/Arial_section_img2.png"
              alt="Aerial inspection capabilities"
              className={styles.measurementImage}
              onClick={() => openModal("/assets/product5/Arial_section_img2.png")}
            />
          </div>
        </motion.div>

        <div style={{ paddingTop: "20px" }}>
          <ImageCarousel images={carouselImages} />
        </div>
      </div>

      <div style={{ height: "80px" }} />

      <ImageModal src={selectedImage} alt="Zoomed image" onClose={closeModal} />
    </div>
  );
};

export default Product5;
