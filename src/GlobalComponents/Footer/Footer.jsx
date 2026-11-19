import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  ArrowUpRight,
  Cpu,
} from "lucide-react";
import { FaLinkedinIn as Linkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer id="contact-footer" className={styles.footerWrapper}>
      <div className={styles.container}>
        <div className={styles.topGrid}>
          {/* Brand & Mission Column */}
          <div className={styles.brandCol}>
            <Link to="/" className={styles.logoBox}>
              <div className={styles.logoPod}>
                <img
                  src="/assets/logo-dark.png"
                  alt="Space Labs Logo"
                  className={styles.logoImg}
                />
              </div>
              <div className={styles.brandTitle}>
                SPACE<span className={styles.brandAccent}>.LABS</span>
              </div>
            </Link>

            <p className={styles.brandDesc}>
              Advanced engineering development studio dedicated to autonomous
              railway safety, sub-millimeter optical measurement, and multi-beam
              infrared thermal diagnostics.
            </p>

            <div className={styles.complianceBadge}>
              <ShieldCheck size={16} className={styles.badgeIcon} />
              <span>RDSO ALIGNED & IP68 RUGGEDIZED</span>
            </div>
          </div>

          {/* Railway Systems Links */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>RAILWAY SYSTEMS</h4>
            <ul className={styles.linkList}>
              <li>
                <Link to="/product1">Automatic Wheel Profile (AWPMS)</Link>
              </li>
              <li>
                <Link to="/product2">Hot Axle Box Detection (HABD)</Link>
              </li>
              <li>
                <Link to="/product3">Machine Vision Inspection (MVIS)</Link>
              </li>
              <li>
                <Link to="/product4">Condition Monitoring (CCM)</Link>
              </li>
              <li>
                <Link to="/product5">Aerial Railway Inspection</Link>
              </li>
              <li>
                <Link to="/datamap">DataMAP™ Software Suite</Link>
              </li>
            </ul>
          </div>

          {/* Quick Company Links */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>STUDIO & TALENT</h4>
            <ul className={styles.linkList}>
              <li>
                <Link to="/about">About Space Labs</Link>
              </li>
              <li>
                <Link to="/about">Engineering Charter</Link>
              </li>
              <li>
                <Link to="/about">Leadership & Team</Link>
              </li>
              <li>
                <Link to="/careers">Careers & Open Roles</Link>
              </li>
              <li>
                <Link to="/login">Admin Portal</Link>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className={styles.contactCol}>
            <h4 className={styles.colTitle}>ENGINEERING INQUIRIES</h4>
            <div className={styles.contactItem}>
              <Mail size={16} className={styles.contactIcon} />
              <a
                href="mailto:contact@space-labs.in"
                className={styles.contactLink}
              >
                contact@space-labs.in
              </a>
            </div>

            <div className={styles.contactItem}>
              <Phone size={16} className={styles.contactIcon} />
              <div className={styles.phoneNumbers}>
                <a href="tel:+919811877945">+91 98118 77945</a>
                <span>+91 (0) 120-2341065 / 66</span>
              </div>
            </div>

            <div className={styles.contactItem}>
              <MapPin size={16} className={styles.contactIcon} />
              <span className={styles.contactAddress}>
                Delhi NCR / Greater Noida, Uttar Pradesh, India
              </span>
            </div>

            <div className={styles.socialRow}>
              <a
                href="https://www.linkedin.com/company/space_labs/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
                aria-label="Space Labs on LinkedIn"
              >
                <Linkedin size={16} />
                <span>Follow on LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div className={styles.copyright}>
            © {new Date().getFullYear()} Spatially Collaborative Engineering
            Pvt. Ltd. (SPACE.LABS). All rights reserved.
          </div>
          <div className={styles.bottomMeta}>
            <span>PRECISION ENGINEERING</span>
            <span>•</span>
            <span>AUTONOMOUS TRANSIT</span>
            <span>•</span>
            <span>NEW DELHI, INDIA</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
