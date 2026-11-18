import React, { useEffect, useState, useRef } from "react";
import styles from "./Navbar.module.css";
import { Link, useLocation } from "react-router-dom";
import {
  ChevronDown,
  Menu as MenuIcon,
  X as CloseIcon,
  Cpu,
  Activity,
  Eye,
  Radio,
  Plane,
  ArrowRight,
  ShieldCheck,
  UserCheck
} from "lucide-react";

const PRODUCTS = [
  {
    id: "product1",
    path: "/product1",
    tag: "AWPMS",
    name: "Automatic Wheel Profile System",
    desc: "Laser profilometry with 300μm precision",
    icon: Cpu,
  },
  {
    id: "product2",
    path: "/product2",
    tag: "HABD",
    name: "Hot Axle Box Detection System",
    desc: "IR thermal telemetry up to 500°C",
    icon: Activity,
  },
  {
    id: "product3",
    path: "/product3",
    tag: "MVIS",
    name: "Machine Vision Inspection",
    desc: "Underside & wayside visual defect capture",
    icon: Eye,
  },
  {
    id: "product4",
    path: "/product4",
    tag: "CCM",
    name: "Coach Condition Monitoring",
    desc: "Vibration & acoustics telemetry",
    icon: Radio,
  },
  {
    id: "product5",
    path: "/product5",
    tag: "AERIAL",
    name: "Aerial Railway Inspection",
    desc: "Drone-based catenary & track surveying",
    icon: Plane,
  },
];

const Navbar = ({ userExists }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 200);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
  }, [location.pathname]);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : ""}`}>
      <div className={styles.container}>
        {/* Logo and System Status */}
        <div className={styles.brandGroup}>
          <Link
            to="/"
            className={styles.logoLink}
            onClick={() => {
              if (location.pathname === "/") {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
          >
            <img src="/assets/logo.png" alt="Space Labs" className={styles.logoImg} />
            <div className={styles.brandText}>
              <span className={styles.brandTitle}>
                SPACE<span className={styles.brandAccent}>.LABS</span>
              </span>
              <span className={styles.brandSubtitle}>RAILWAY ENGINEERING</span>
            </div>
          </Link>

          <div className={styles.statusIndicator}>
            <span className={styles.statusDot}></span>
            <span className={styles.statusLabel}>RDSO COMPLIANT R&D</span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className={styles.desktopNav}>
          <div
            className={styles.dropdownWrapper}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`${styles.navItem} ${styles.dropdownTrigger} ${
                location.pathname.includes("/product") ? styles.activeNavItem : ""
              }`}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <span>SYSTEMS</span>
              <ChevronDown
                size={14}
                className={`${styles.chevron} ${dropdownOpen ? styles.chevronOpen : ""}`}
              />
            </button>

            {dropdownOpen && (
              <div className={styles.dropdownMenu}>
                <div className={styles.dropdownHeader}>
                  <ShieldCheck size={14} className={styles.dropdownHeaderIcon} />
                  <span>AUTONOMOUS RAILWAY INSPECTION SUITE</span>
                </div>
                <div className={styles.dropdownGrid}>
                  {PRODUCTS.map((prod) => {
                    const IconComponent = prod.icon;
                    return (
                      <Link
                        key={prod.id}
                        to={prod.path}
                        className={styles.dropdownItem}
                        onClick={() => setDropdownOpen(false)}
                      >
                        <div className={styles.itemIconBox}>
                          <IconComponent size={18} />
                        </div>
                        <div className={styles.itemContent}>
                          <div className={styles.itemHeading}>
                            <span className={styles.itemTag}>{prod.tag}</span>
                            <span className={styles.itemName}>{prod.name}</span>
                          </div>
                          <p className={styles.itemDesc}>{prod.desc}</p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
                <div className={styles.dropdownFooter}>
                  <Link to="/products" className={styles.viewAllLink}>
                    View Systems Overview & Specifications <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            to="/#capabilities"
            className={`${styles.navItem} ${location.hash === "#capabilities" ? styles.activeNavItem : ""}`}
          >
            CAPABILITIES
          </Link>

          <Link
            to="/#team"
            className={`${styles.navItem} ${location.hash === "#team" ? styles.activeNavItem : ""}`}
          >
            OUR TEAM
          </Link>

          <Link
            to="/careers"
            className={`${styles.navItem} ${location.pathname === "/careers" ? styles.activeNavItem : ""}`}
            onClick={() => {
              if (location.pathname === "/careers") {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
          >
            CAREERS
          </Link>

          <Link
            to="/contact"
            className={`${styles.navItem} ${location.pathname === "/contact" ? styles.activeNavItem : ""}`}
            onClick={() => {
              if (location.pathname === "/contact") {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
          >
            CONTACT
          </Link>
        </nav>

        {/* CTA Actions */}
        <div className={styles.actions}>
          {userExists ? (
            <Link to="/dashboard" className={styles.adminBtn}>
              <UserCheck size={15} />
              <span>DASHBOARD</span>
            </Link>
          ) : (
            <Link to="/login" className={styles.portalLink}>
              ADMIN
            </Link>
          )}

          <Link to="/contact" className={styles.ctaBtn}>
            <span>INQUIRE / RFQ</span>
            <ArrowRight size={14} />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className={styles.mobileToggle}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            {isOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className={styles.mobileDrawer}>
          <div className={styles.mobileMenu}>
            <div className={styles.mobileSectionHeader}>RAILWAY SYSTEMS</div>
            {PRODUCTS.map((prod) => (
              <Link
                key={prod.id}
                to={prod.path}
                className={styles.mobileSubItem}
                onClick={() => setIsOpen(false)}
              >
                <span className={styles.mobileTag}>{prod.tag}</span>
                <span>{prod.name}</span>
              </Link>
            ))}

            <div className={styles.mobileDivider}></div>

            <Link
              to="/#capabilities"
              className={styles.mobileNavItem}
              onClick={() => setIsOpen(false)}
            >
              CAPABILITIES
            </Link>

            <Link
              to="/#team"
              className={styles.mobileNavItem}
              onClick={() => setIsOpen(false)}
            >
              OUR TEAM
            </Link>

            <Link
              to="/careers"
              className={styles.mobileNavItem}
              onClick={() => {
                setIsOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              CAREERS
            </Link>

            <Link
              to="/contact"
              className={styles.mobileNavItem}
              onClick={() => {
                setIsOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              CONTACT
            </Link>

            <Link
              to="/login"
              className={styles.mobileNavItem}
              onClick={() => setIsOpen(false)}
            >
              ADMIN PORTAL
            </Link>

            <div className={styles.mobileCtaBox}>
              <Link
                to="/contact"
                className={styles.ctaBtnMobile}
                onClick={() => setIsOpen(false)}
              >
                REQUEST CONSULTATION / RFQ
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
