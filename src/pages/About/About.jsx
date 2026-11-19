import React from "react";
import styles from "./About.module.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Target,
  Users,
  Sparkles,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Cpu,
  Eye,
  Activity,
  Layers,
  Award
} from "lucide-react";
import { FaLinkedinIn as Linkedin } from "react-icons/fa6";

const METHODOLOGY_PHASES = [
  {
    phase: "PHASE 01",
    title: "Hypothesize",
    subtitle: "Physics Simulation & Optical Metrology",
    desc: "We analyze railway mechanical and track failure modes—from wheel flange wear and tread hollow to bearing thermal runaway. Using 3D multi-body dynamics and ray-tracing optical models, we determine the exact sensor geometries required for accurate wayside capture.",
    icon: Target,
  },
  {
    phase: "PHASE 02",
    title: "Experiment",
    subtitle: "Ruggedized Prototyping & Edge AI",
    desc: "Our lab engineers develop custom multi-laser triangulation heads, high-speed line-scan optical enclosures, and thermal infrared pyrometer arrays. We design edge AI inference engines with automated air purge units to handle extreme trackside vibration and environmental dust.",
    icon: Cpu,
  },
  {
    phase: "PHASE 03",
    title: "Validate",
    subtitle: "Full-Speed Operational Mainline Testing",
    desc: "Nothing is proven until it performs on live track. We rigorously validate our systems on operational corridors at speeds up to 160+ km/h, cross-checking every micron against certified manual gauges and RDSO regulatory benchmarks.",
    icon: ShieldCheck,
  },
];

const FOUNDATIONAL_PRINCIPLES = [
  {
    index: "01",
    title: "Uncompromising Precision",
    desc: "Delivering certified ±300 μm sub-millimeter accuracy for rolling stock wheel geometry at operational mainline line speeds (160+ km/h).",
  },
  {
    index: "02",
    title: "Track-Friendly Architecture",
    desc: "Eliminating destructive track cutting and heavy civil work. Our sensors mount cleanly onto existing rail ties for rapid 1-day commissioning.",
  },
  {
    index: "03",
    title: "100% Data Ownership",
    desc: "Railroad operators retain total governance. Open REST and MQTT APIs ensure zero proprietary vendor lock-in with existing TMS/ERP software.",
  },
  {
    index: "04",
    title: "Rugged Industrial Durability",
    desc: "IP68-sealed enclosures with automated compressed air optic cleaning designed to endure extreme temperature shifts (-20°C to +70°C).",
  },
];

const LEADERSHIP_TEAM = [
  {
    name: "Dhruv Mohan",
    role: "CEO & Founder",
    department: "Executive Leadership & Rail Engineering",
    imgURL: "/assets/team/Dhruv_Mohan.JPG",
    linkedin: "https://www.linkedin.com/company/space_labs/",
    bio: "Pioneering autonomous vision systems, laser profilometry, and predictive compliance architectures for Indian and international railway networks.",
  },
  {
    name: "Isha Gupta",
    role: "Chief AI Officer",
    department: "AI Research & Computer Vision",
    imgURL: "/assets/team/Isha_Gupta.JPG",
    linkedin: "https://www.linkedin.com/company/space_labs/",
    bio: "Directing deep learning models, optical defect classification, and real-time edge computing algorithms for high-speed trackside inspection arrays.",
  },
  {
    name: "Anil Kumar",
    role: "Director of Operations",
    department: "Field Deployment & Rail Systems",
    imgURL: "/assets/team/Anil_Kumar.JPG",
    linkedin: "https://www.linkedin.com/company/space_labs/",
    bio: "Overseeing ruggedized hardware installations, field operations, workshop deployments, and client relations with railway operators and maintenance depots.",
  },
];

const CULTURE_HIGHLIGHTS = [
  "Advanced 3D Modeling & Rail Dynamic Simulation Labs",
  "High-Precision Laser Metrology & High-Speed Optical R&D",
  "Edge AI Inference & Deep Learning Tensor Optimization",
  "Supportive, Merit-Driven Engineering Culture",
  "Direct Impact on National Rail Safety & Transit Reliability",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.985 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const About = () => {
  return (
    <div className={styles.pageWrapper}>
      {/* Breadcrumb Navigation */}
      <div className={styles.breadcrumbBar}>
        <div className={styles.container}>
          <div className={styles.breadcrumbs}>
            <Link to="/" className={styles.crumbLink}>Home</Link>
            <ChevronRight size={14} className={styles.crumbSep} />
            <span className={styles.crumbCurrent}>Studio & Principles</span>
          </div>
        </div>
      </div>

      {/* Hero Header */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.tag}>
            <Target size={14} className={styles.tagIcon} />
            <span>ADVANCED RAIL ENGINEERING STUDIO</span>
          </div>

          <h1 className={styles.title}>
            Autonomous Wayside Vision & <br />
            <span className={styles.titleAccent}>Railway Metrology</span>
          </h1>

          <p className={styles.subtitle}>
            <strong>SPACE.LABS</strong> is an advanced engineering development studio built on the axiom
            that creative freedom, scientific rigor, and technological independence lead to safer,
            higher-performing railway networks.
          </p>
        </div>
      </section>

      {/* Methodology Section (Hypothesize, Experiment, Validate) */}
      <section className={styles.methodologySection}>
        <div className={styles.container}>
          <motion.div
            className={styles.sectionHeaderBox}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.sectionTag}>
              <Award size={14} />
              <span>THE ENGINEERING CHARTER</span>
            </div>
            <h2 className={styles.sectionTitle}>Our Three-Phase Methodology</h2>
            <p className={styles.sectionSubtitle}>
              We believe transformative railway engineering requires a disciplined scientific loop:
              rigorous hypothesis, physical experimentation, and empirical track validation.
            </p>
          </motion.div>

          <motion.div
            className={styles.methodologyGrid}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
          >
            {METHODOLOGY_PHASES.map((phase, idx) => {
              const Icon = phase.icon;
              return (
                <motion.div
                  key={idx}
                  className={styles.methodologyCard}
                  variants={itemVariants}
                  whileHover={{ y: -1.5, transition: { duration: 0.2 } }}
                >
                  <div className={styles.phaseBadge}>{phase.phase}</div>
                  <div className={styles.phaseIconBox}>
                    <Icon size={20} />
                  </div>
                  <h3 className={styles.phaseTitle}>{phase.title}</h3>
                  <div className={styles.phaseSubtitle}>{phase.subtitle}</div>
                  <p className={styles.phaseDesc}>{phase.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Foundational Principles */}
      <section className={styles.principlesSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.sectionHeaderBox}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.sectionTag}>
              <ShieldCheck size={14} />
              <span>OPERATING VALUES</span>
            </div>
            <h2 className={styles.sectionTitle}>Engineered for Extreme Railway Demands</h2>
            <p className={styles.sectionSubtitle}>
              Our foundational design rules ensure zero-compromise precision, rugged durability, and total data governance.
            </p>
          </motion.div>

          <motion.div
            className={styles.principlesGrid}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
          >
            {FOUNDATIONAL_PRINCIPLES.map((principle, idx) => (
              <motion.div
                key={idx}
                className={styles.principleCard}
                variants={itemVariants}
                whileHover={{ y: -1.5, transition: { duration: 0.2 } }}
              >
                <div className={styles.principleIndex}>{principle.index}</div>
                <h4 className={styles.principleTitle}>{principle.title}</h4>
                <p className={styles.principleDesc}>{principle.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className={styles.teamSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.sectionHeaderBox}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.sectionTag}>
              <Users size={14} />
              <span>LEADERSHIP & TALENT</span>
            </div>
            <h2 className={styles.sectionTitle}>The Engineers Behind Space Labs</h2>
            <p className={styles.sectionSubtitle}>
              Our multidisciplinary studio brings together rail veterans, optical physicists, and machine learning researchers.
            </p>
          </motion.div>

          <motion.div
            className={styles.teamGrid}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
          >
            {LEADERSHIP_TEAM.map((member, idx) => (
              <motion.div
                key={idx}
                className={styles.teamCard}
                variants={itemVariants}
                whileHover={{ y: -1.5, transition: { duration: 0.2 } }}
              >
                <div className={styles.avatarWrapper}>
                  <img
                    src={member.imgURL}
                    alt={member.name}
                    className={styles.avatarImg}
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.parentElement.classList.add(styles.avatarFallback);
                    }}
                  />
                </div>
                <div className={styles.memberInfo}>
                  <div className={styles.memberHeaderRow}>
                    <div>
                      <h3 className={styles.memberName}>{member.name}</h3>
                      <div className={styles.memberRole}>{member.role}</div>
                      <div className={styles.memberDept}>{member.department}</div>
                    </div>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.linkedinLink}
                      aria-label={`${member.name} on LinkedIn`}
                    >
                      <Linkedin size={15} />
                    </a>
                  </div>
                  <p className={styles.memberBio}>{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Studio Culture & Life at Space Labs */}
      <section className={styles.cultureSection}>
        <div className={styles.container}>
          <div className={styles.cultureBox}>
            <div className={styles.cultureTextCol}>
              <div className={styles.cultureTag}>
                <Sparkles size={14} />
                <span>STUDIO CULTURE</span>
              </div>
              <h2 className={styles.cultureTitle}>Life at Space Labs</h2>
              <p className={styles.cultureLead}>
                Our team is comprised of specialists in <strong>3D modeling and simulation</strong>, 
                <strong> laser and camera-based optics</strong>, <strong>computer vision</strong>, and 
                <strong> artificial intelligence</strong>. Our culture is built on respect, scientific curiosity, and a shared passion for excellence.
              </p>
              <p className={styles.cultureBody}>
                We believe engineering should feel like a second home—where bold ideas are tested with rigor,
                collaboration happens organically, and every team member makes an indelible mark on critical transit safety.
              </p>

              <div className={styles.cultureList}>
                {CULTURE_HIGHLIGHTS.map((item, idx) => (
                  <div key={idx} className={styles.cultureItem}>
                    <CheckCircle2 size={16} className={styles.cultureCheck} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className={styles.cultureActions}>
                <Link to="/careers" className={styles.careersBtn}>
                  <span>Explore Open Careers</span>
                  <ArrowRight size={15} />
                </Link>
                <Link to="/contact" className={styles.contactBtn}>
                  <span>Schedule Consultation</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
