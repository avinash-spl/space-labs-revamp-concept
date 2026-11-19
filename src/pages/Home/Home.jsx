import React from "react";
import HeroSection from "./components/Hero/HeroSection";
import HeroFooter from "./components/HeroFooter/HeroFooter";
import HomePillars from "./components/HomePillars/HomePillars";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
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
          <div className={styles.consultCard}>
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
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
