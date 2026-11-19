import React from "react";
import HeroSection from "./components/Hero/HeroSection";
import HeroFooter from "./components/HeroFooter/HeroFooter";
import HomePillars from "./components/HomePillars/HomePillars";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Mail, ShieldCheck } from "lucide-react";

const Home = () => {
  return (
    <main>
      <HeroSection />
      <HeroFooter />
      <HomePillars />

      {/* Direct Engineering Consultation Banner */}
      <section className={styles.bottomConsultSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.consultCard}
            initial={{ opacity: 0, y: 28, scale: 0.985 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.consultLeft}>
              <div className={styles.consultTag}>
                <ShieldCheck size={14} />
                <span>DIRECT ENGINEERING ACCESS</span>
              </div>
              <h2 className={styles.consultTitle}>
                Consult With Our Wayside Rail Specialists
              </h2>
              <p className={styles.consultDesc}>
                Whether you need technical brochures, custom track mounting feasibility studies,
                or a dedicated DataMAP™ software demonstration, our engineering team in Greater Noida is ready to assist.
              </p>
            </div>
            <div className={styles.consultRight}>
              <Link to="/contact" className={styles.consultBtn}>
                <Mail size={16} />
                <span>Request Consultation</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Home;
