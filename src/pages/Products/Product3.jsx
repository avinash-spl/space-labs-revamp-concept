import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaTools } from "react-icons/fa";
import { ArrowRight, ShieldCheck, Mail, ChevronRight } from "lucide-react";
import styles from "./Products.module.css";

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
      {/* Breadcrumb Navigation */}
      <div className={styles.breadcrumbBar}>
        <div className={styles.breadcrumbs}>
          <Link to="/" className={styles.crumbLink}>Home</Link>
          <ChevronRight size={14} className={styles.crumbSep} />
          <Link to="/products" className={styles.crumbLink}>Systems</Link>
          <ChevronRight size={14} className={styles.crumbSep} />
          <span className={styles.crumbCurrent}>Machine Vision Inspection (MVIS)</span>
        </div>
      </div>

      {/* Hero Section */}
      <div className={styles.hero}>
        <div
          className={styles.heroOverlay}
          style={{
            backgroundImage: "url(/assets/product3/MVIS_Banner.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: isSafariMobile ? "scroll" : "fixed",
            opacity: 0.22,
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
            <span>SYSTEM 03 • ACTIVE R&D</span>
          </div>

          <h1 className={styles.heroTitle}>
            Machine Vision Inspection System
            <span className={styles.heroSubtitle}>
              for Rolling Stock (MVIS)
            </span>
          </h1>
        </motion.div>
      </div>

      {/* Authentic Work in progress notice */}
      <section className={styles.workInProgressSection}>
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className={styles.workInProgressCard}
        >
          <div className={styles.wipIconWrapper}>
            <FaTools size={28} />
          </div>

          <div className={styles.wipBadge}>
            <FaTools size={12} />
            <span>WORK IN PROGRESS</span>
          </div>

          <h2 className={styles.wipTitle}>System Under Active Development</h2>

          <p className={styles.wipDescription}>
            The Machine Vision Inspection System for Rolling Stock (MVIS) is currently
            under active engineering development and track testing at Space Labs.
            Engineered for high-resolution optical defect identification, wayside
            chassis imaging, and autonomous inspection without interrupting train schedules.
          </p>

          <div className={styles.wipActions}>
            <Link to="/contact" className={styles.brochureButton}>
              <Mail size={16} />
              <span>Inquire About R&D & Early Access</span>
            </Link>

            <Link to="/products" className={styles.rfqButton}>
              <span>Explore Deployed Railway Systems</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Product3;
