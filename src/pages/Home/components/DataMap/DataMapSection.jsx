import React, { useState } from "react";
import styles from "./DataMapSection.module.css";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Database,
  Search,
  AlertTriangle,
  TrendingUp,
  Server,
  ShieldCheck,
  Check,
  ArrowRight,
  Filter,
  Activity,
  Layers,
  Clock,
  Cpu,
  CheckCircle2,
  AlertCircle
} from "lucide-react";

const DATAMAP_MODULES = [
  {
    id: "train-browser",
    title: "Train Browser",
    icon: Search,
    tag: "MODULE 01 • UNIFIED EVENT BROWSING",
    subtitle: "Filterable Network-Wide Train Passage Surveillance",
    description:
      "Eliminate manual review of raw event logs across disparate detection silos. The Train Browser consolidates every train pass across your entire rail network into a single, intuitive interface with instant warning counts.",
    capabilities: [
      "Filter effortlessly by Direction, Date/Time, Route, or Train ID",
      "Immediate warning and alert counts per passage at a single glance",
      "One-click drill down into individual wheel profile and bearing readings",
      "High-speed line-scan imagery and sensor telemetry linked to each axle",
    ],
  },
  {
    id: "alarm-triage",
    title: "Alarm Management",
    icon: AlertTriangle,
    tag: "MODULE 02 • THRESHOLD TRIAGE & DISPATCH",
    subtitle: "Turn Raw Triggered Thresholds into Rapid Maintenance Actions",
    description:
      "Engineered to bridge the critical gap between an alarm threshold being breached and immediate corrective maintenance. Evaluates defect severity, data confidence, and the required timeline for operational intervention.",
    capabilities: [
      "Multi-tier triage: Advisory, Warning, and Critical Emergency Stop",
      "Confidence scoring derived from multi-beam IR and laser cross-validation",
      "Automated dispatch via SMS, email, and direct maintenance work orders",
      "Evidence audit trail with timestamped sensor telemetry and optical proof",
    ],
  },
  {
    id: "vehicle-analysis",
    title: "Vehicle Analysis",
    icon: TrendingUp,
    tag: "MODULE 03 • LONGITUDINAL WEAR TRACKING",
    subtitle: "Continuous Condition-Based Lifecycle Intelligence",
    description:
      "Track rolling stock degradation over time instead of reacting to sudden failures. Consolidates complete vehicle pass histories to monitor wear progression across every wheel, axle, and bogie.",
    capabilities: [
      "Longitudinal wear curves: flange thinning, tread hollow, and diameter loss",
      "Bearing temperature history mapped across consecutive wayside passes",
      "Predictive wheel-lathe turning schedules before safety margins are breached",
      "Eliminate premature wheel turnings and extend rolling stock service life",
    ],
  },
  {
    id: "open-architecture",
    title: "Open Architecture",
    icon: Server,
    tag: "MODULE 04 • SYSTEM HEALTH & DATA OWNERSHIP",
    subtitle: "Customer-Owned Data with Zero Proprietary Vendor Lock-In",
    description:
      "DataMAP connects with your existing railway operations systems over standard REST and MQTT interfaces. Deploy on-premises or in your secure cloud environment with 100% control over thresholds and user permissions.",
    capabilities: [
      "100% customer data ownership: configure custom thresholds and alerts",
      "Seamless integration with RDSO, TMS, ERP, and depot dispatch software",
      "Continuous wayside station health diagnostics (air purge, optic lenses, power)",
      "Supports Space Labs hardware as well as third-party wayside detectors",
    ],
  },
];

const VALUE_RIBBONS = [
  {
    icon: Database,
    title: "Unified Monitoring",
    desc: "Laser, IR, vision, and dynamic coach telemetry in one application.",
  },
  {
    icon: Clock,
    title: "Sub-2-Minute Triage",
    desc: "Complete train analysis and automated alerts dispatched in seconds.",
  },
  {
    icon: TrendingUp,
    title: "Predictive Analytics",
    desc: "Multi-pass wear curves for planned, cost-saving maintenance.",
  },
  {
    icon: ShieldCheck,
    title: "100% Data Ownership",
    desc: "Standard open APIs, full customer governance, zero vendor lock-in.",
  },
];

const DataMapSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const current = DATAMAP_MODULES[activeTab];

  return (
    <section id="datamap-section" className={styles.sectionWrapper}>
      <div className={styles.ambientGlow} />

      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.headerBox}>
          <div className={styles.tag}>
            <Database size={13} className={styles.tagIcon} />
            <span>CENTRALIZED RAIL OPERATIONS SOFTWARE</span>
          </div>

          <h2 className={styles.title}>
            DataMAP<span className={styles.titleAccent}>™</span> Centralized Intelligence Platform
          </h2>

          <p className={styles.subtitle}>
            Turning trackside hardware sensors into actionable preventative maintenance decisions.
            Consolidating laser profilometry, thermal infrared telemetry, machine vision imagery,
            and dynamic telemetry into a single, intuitive enterprise rail suite.
          </p>
        </div>

        {/* 4 Architectural Value Ribbons */}
        <div className={styles.ribbonGrid}>
          {VALUE_RIBBONS.map((rib, idx) => {
            const Icon = rib.icon;
            return (
              <div key={idx} className={styles.ribbonCard}>
                <div className={styles.ribbonIconBox}>
                  <Icon size={18} />
                </div>
                <div>
                  <h4 className={styles.ribbonTitle}>{rib.title}</h4>
                  <p className={styles.ribbonDesc}>{rib.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Module Switcher Tabs */}
        <div className={styles.tabNav}>
          {DATAMAP_MODULES.map((mod, idx) => {
            const TabIcon = mod.icon;
            const isActive = activeTab === idx;
            return (
              <button
                key={mod.id}
                onClick={() => setActiveTab(idx)}
                className={`${styles.tabBtn} ${isActive ? styles.activeTabBtn : ""}`}
                aria-label={`Switch to ${mod.title}`}
              >
                <TabIcon size={15} className={styles.tabBtnIcon} />
                <span>{mod.title}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Software Console Showcase */}
        <div className={styles.consoleFrame}>
          {/* Top Window Bar (Linear/Apple Aesthetic) */}
          <div className={styles.consoleTopBar}>
            <div className={styles.topBarLeft}>
              <span className={styles.dotRed} />
              <span className={styles.dotYellow} />
              <span className={styles.dotGreen} />
              <span className={styles.consoleId}>
                STATION-01 // DATAMAP ENTERPRISE CONSOLE v3.4
              </span>
            </div>

            <div className={styles.topBarRight}>
              <span className={styles.liveDot} />
              <span>LIVE TELEMETRY UPLINK ACTIVE</span>
            </div>
          </div>

          {/* Console Content Grid */}
          <div className={styles.consoleGrid}>
            {/* Left Narrative Column */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: -14 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 14 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                className={styles.narrativeCol}
              >
                <div className={styles.moduleTag}>
                  <span>{current.tag}</span>
                </div>

                <h3 className={styles.moduleTitle}>{current.title}</h3>
                <p className={styles.moduleSubtitle}>{current.subtitle}</p>
                <p className={styles.moduleDescription}>{current.description}</p>

                <div className={styles.bulletList}>
                  {current.capabilities.map((cap, i) => (
                    <div key={i} className={styles.bulletItem}>
                      <CheckCircle2 size={16} className={styles.checkIcon} />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Right Interactive Mockup Viewport */}
            <div className={styles.previewCol}>
              <div className={styles.previewHeader}>
                <span className={styles.previewHeading}>
                  {current.id === "train-browser" && "RECENT TRAIN PASSAGES (REAL-TIME)"}
                  {current.id === "alarm-triage" && "ACTIVE ALARM TRIAGE & CONFIDENCE QUEUE"}
                  {current.id === "vehicle-analysis" && "WHEEL FLANGE WEAR DEGRADATION CURVE"}
                  {current.id === "open-architecture" && "WAYSIDE HARDWARE HEALTH & REST/MQTT TELEMETRY"}
                </span>
                <span className={styles.filterBadge}>
                  {current.id === "train-browser" && "FILTER: MAINLINE UP"}
                  {current.id === "alarm-triage" && "STATUS: CRITICAL PRIORITY"}
                  {current.id === "vehicle-analysis" && "AXLE #08 • BOGIE-A"}
                  {current.id === "open-architecture" && "PROTOCOL: OPEN MQTT"}
                </span>
              </div>

              <AnimatePresence mode="wait">
                {/* 1. Train Browser Interactive View */}
                {current.id === "train-browser" && (
                  <motion.div
                    key="tb"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className={styles.trainList}
                  >
                    <div className={styles.trainCard}>
                      <div className={styles.trainMain}>
                        <div className={styles.trainIdRow}>
                          <span className={styles.trainNumber}>#12424</span>
                          <span className={styles.trainName}>Rajdhani Express</span>
                        </div>
                        <div className={styles.trainMeta}>
                          <span>Speed: 132 km/h</span>
                          <span>Axles: 88</span>
                          <span>Pass: 11:24 AM</span>
                        </div>
                      </div>
                      <span className={styles.statusPillSuccess}>
                        <Check size={12} />
                        ALL CLEAR
                      </span>
                    </div>

                    <div className={styles.trainCard} style={{ borderColor: "rgba(234, 88, 12, 0.4)", background: "#fffdfa" }}>
                      <div className={styles.trainMain}>
                        <div className={styles.trainIdRow}>
                          <span className={styles.trainNumber}>#22691</span>
                          <span className={styles.trainName}>Express Freight (BOXNHL)</span>
                        </div>
                        <div className={styles.trainMeta}>
                          <span>Speed: 98 km/h</span>
                          <span>Axles: 144</span>
                          <span>Pass: 11:02 AM</span>
                        </div>
                      </div>
                      <span className={styles.statusPillWarning}>
                        <AlertCircle size={12} />
                        1 WARNING
                      </span>
                    </div>

                    <div className={styles.trainCard}>
                      <div className={styles.trainMain}>
                        <div className={styles.trainIdRow}>
                          <span className={styles.trainNumber}>#12002</span>
                          <span className={styles.trainName}>Shatabdi Express</span>
                        </div>
                        <div className={styles.trainMeta}>
                          <span>Speed: 145 km/h</span>
                          <span>Axles: 64</span>
                          <span>Pass: 10:41 AM</span>
                        </div>
                      </div>
                      <span className={styles.statusPillSuccess}>
                        <Check size={12} />
                        ALL CLEAR
                      </span>
                    </div>
                  </motion.div>
                )}

                {/* 2. Alarm Triage Interactive View */}
                {current.id === "alarm-triage" && (
                  <motion.div
                    key="at"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className={styles.alarmContainer}
                  >
                    <div className={styles.alarmCard}>
                      <div className={styles.alarmHeader}>
                        <span className={styles.alarmBadge}>
                          <AlertTriangle size={13} />
                          CRITICAL BEARING HEAT ALARM
                        </span>
                        <span className={styles.alarmTime}>11:02:18 IST</span>
                      </div>

                      <div className={styles.alarmDetail}>
                        Train #22691 • Coach WGACCW 18321 • Axle #14 (Right Side Bearing)
                      </div>

                      <div className={styles.alarmMetricsRow}>
                        <div className={styles.metricBlock}>
                          <span className={styles.metricBlockLabel}>MEASURED TEMP</span>
                          <span className={styles.metricBlockVal}>318°C</span>
                        </div>
                        <div className={styles.metricBlock}>
                          <span className={styles.metricBlockLabel}>THRESHOLD</span>
                          <span className={styles.metricBlockVal} style={{ color: "#64748b" }}>&gt; 300°C</span>
                        </div>
                        <div className={styles.metricBlock}>
                          <span className={styles.metricBlockLabel}>CONFIDENCE</span>
                          <span className={styles.metricBlockVal} style={{ color: "#059669" }}>99.8%</span>
                        </div>
                      </div>

                      <div className={styles.alarmActionBanner}>
                        <Activity size={14} />
                        <span>Action Required: Detrain or physical inspection at Kanpur Central yard. SMS/Email dispatched to Duty Foreman.</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* 3. Longitudinal Wear Interactive View */}
                {current.id === "vehicle-analysis" && (
                  <motion.div
                    key="va"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className={styles.wearContainer}
                  >
                    <div className={styles.wearHeaderBox}>
                      <div>
                        <div className={styles.wheelIdentity}>COACH #18321 // WHEEL-08 (LEFT)</div>
                        <div className={styles.wheelSub}>Flange Thickness Wear Progression Across 6 Passes</div>
                      </div>
                      <span className={styles.statusPillWarning}>
                        LATHE DUE IN 14 DAYS
                      </span>
                    </div>

                    <div className={styles.wearBars}>
                      <div className={styles.wearRow}>
                        <span className={styles.wearPassInfo}>Pass 01 (01 Nov)</span>
                        <div className={styles.wearTrackBar}>
                          <div className={styles.wearFill} style={{ width: "95%" }} />
                        </div>
                        <span className={styles.wearValue}>28.5 mm</span>
                      </div>

                      <div className={styles.wearRow}>
                        <span className={styles.wearPassInfo}>Pass 03 (08 Nov)</span>
                        <div className={styles.wearTrackBar}>
                          <div className={styles.wearFill} style={{ width: "84%" }} />
                        </div>
                        <span className={styles.wearValue}>26.8 mm</span>
                      </div>

                      <div className={styles.wearRow}>
                        <span className={styles.wearPassInfo}>Pass 06 (Today)</span>
                        <div className={styles.wearTrackBar}>
                          <div className={styles.wearFill} style={{ width: "68%", background: "#ea580c" }} />
                        </div>
                        <span className={styles.wearValue} style={{ color: "#ea580c" }}>23.2 mm</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* 4. Open Architecture & Telemetry View */}
                {current.id === "open-architecture" && (
                  <motion.div
                    key="oa"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className={styles.architectureGrid}
                  >
                    <div className={styles.archCard}>
                      <div className={styles.archCardHeader}>
                        <Cpu size={16} className={styles.archIcon} />
                        <span className={styles.archStatus}>NORMAL</span>
                      </div>
                      <span className={styles.archLabel}>Air Purge Cleaning Pressure</span>
                      <span className={styles.archDetail}>6.2 Bar • Optic Nozzles Clean</span>
                    </div>

                    <div className={styles.archCard}>
                      <div className={styles.archCardHeader}>
                        <ShieldCheck size={16} className={styles.archIcon} />
                        <span className={styles.archStatus}>IP68 SEALED</span>
                      </div>
                      <span className={styles.archLabel}>Trackside Enclosure</span>
                      <span className={styles.archDetail}>Internal Temp 28°C • Zero Ingress</span>
                    </div>

                    <div className={styles.archCard}>
                      <div className={styles.archCardHeader}>
                        <Server size={16} className={styles.archIcon} />
                        <span className={styles.archStatus}>REST / MQTT</span>
                      </div>
                      <span className={styles.archLabel}>Rail Enterprise Uplink</span>
                      <span className={styles.archDetail}>TMS & RDSO Compliant APIs</span>
                    </div>

                    <div className={styles.archCard}>
                      <div className={styles.archCardHeader}>
                        <Database size={16} className={styles.archIcon} />
                        <span className={styles.archStatus}>OWNED</span>
                      </div>
                      <span className={styles.archLabel}>Customer Data Governance</span>
                      <span className={styles.archDetail}>Zero Vendor Lock-In • 100% Client Control</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Action Row */}
        <div className={styles.actionFooter}>
          <Link to="/contact" className={styles.demoBtn}>
            <span>Request DataMAP™ Enterprise Demo</span>
            <ArrowRight size={16} />
          </Link>

          <a href="#products-section" className={styles.hardwareBtn}>
            <span>View Compatible Wayside Sensor Hardware</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default DataMapSection;
