import React, { useState } from "react";
import styles from "./DataMap.module.css";
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
  AlertCircle,
  Download,
  Share2,
  ChevronRight,
  ChevronLeft,
  ChevronsLeft,
  ChevronsRight,
  ChevronDown,
  HardDrive,
  BarChart3,
  Sliders,
  RefreshCw,
  Eye,
  Maximize2,
  MapPin,
  Bell,
  MoreHorizontal,
  Calendar,
  Grid,
  List,
  SlidersHorizontal,
  Settings,
  Zap,
  Sparkles
} from "lucide-react";

// Authentic simulated train passes matching datamap-train-browser.webp
const TRAIN_PASSAGES = [
  {
    trainId: "12597",
    leadLoco: "SBNC_0000003302",
    passedOn: "09/21/2026, 03:09",
    siteName: "Ridgeview",
    direction: "N",
    speedMph: 18.0,
    totalVehicles: 139,
    warnings: 3,
    alerts: 3,
  },
  {
    trainId: "12596",
    leadLoco: "SBNC_0000007666",
    passedOn: "09/21/2026, 02:20",
    siteName: "Ridgeview",
    direction: "S",
    speedMph: 16.2,
    totalVehicles: 41,
    warnings: 30,
    alerts: 1,
  },
  {
    trainId: "12595",
    leadLoco: "SBNC_0000006311",
    passedOn: "09/21/2026, 01:26",
    siteName: "Ridgeview",
    direction: "S",
    speedMph: 15.5,
    totalVehicles: 112,
    warnings: 3,
    alerts: 2,
  },
  {
    trainId: "12594",
    leadLoco: "SBNC_0000000058",
    passedOn: "09/20/2026, 20:50",
    siteName: "Ridgeview",
    direction: "N",
    speedMph: 19.3,
    totalVehicles: 139,
    warnings: 9,
    alerts: 0,
  },
  {
    trainId: "12593",
    leadLoco: "SBNC_0000006629",
    passedOn: "09/20/2026, 20:07",
    siteName: "Ridgeview",
    direction: "N",
    speedMph: 19.9,
    totalVehicles: 34,
    warnings: 25,
    alerts: 4,
  },
  {
    trainId: "12592",
    leadLoco: "SBNC_0000008259",
    passedOn: "09/20/2026, 19:41",
    siteName: "Ridgeview",
    direction: "S",
    speedMph: 16.2,
    totalVehicles: 103,
    warnings: 21,
    alerts: 2,
  },
  {
    trainId: "12591",
    leadLoco: "SBNC_0000004285",
    passedOn: "09/20/2026, 19:13",
    siteName: "Ridgeview",
    direction: "N",
    speedMph: 16.2,
    totalVehicles: 48,
    warnings: 33,
    alerts: 5,
  },
  {
    trainId: "12590",
    leadLoco: "SBNC_0000008056",
    passedOn: "09/20/2026, 18:00",
    siteName: "Ridgeview",
    direction: "N",
    speedMph: 19.3,
    totalVehicles: 39,
    warnings: 19,
    alerts: 10,
  },
  {
    trainId: "12589",
    leadLoco: "SBNC_0000006629",
    passedOn: "09/20/2026, 18:36",
    siteName: "Ridgeview",
    direction: "S",
    speedMph: 15.5,
    totalVehicles: 36,
    warnings: 24,
    alerts: 1,
  },
  {
    trainId: "12588",
    leadLoco: "SBNC_0000003330",
    passedOn: "09/20/2026, 18:05",
    siteName: "Ridgeview",
    direction: "N",
    speedMph: 18.0,
    totalVehicles: 140,
    warnings: 9,
    alerts: 0,
  },
];

// Authentic simulated alarms matching datamap-alarm-list.webp
const ALARM_RECORDS = [
  {
    id: "ALM-1",
    vehicleId: "SNBC_0000220104",
    wheel: "R2",
    date: "09/21/2026, 03:21",
    alarm: "Alert",
    parameter: "Flange_Thickness",
    value: "0.86 (in)",
    threshold: "0.87 (in)",
    status: "Unacknowledged",
    assignedTo: "-",
    remark: "-",
  },
  {
    id: "ALM-2",
    vehicleId: "SNBC_0000991394",
    wheel: "L1",
    date: "09/21/2026, 03:21",
    alarm: "Alert",
    parameter: "Flange_Thickness",
    value: "0.86 (in)",
    threshold: "0.87 (in)",
    status: "Unacknowledged",
    assignedTo: "-",
    remark: "-",
  },
  {
    id: "ALM-3",
    vehicleId: "BADC_0000003674",
    wheel: "R6",
    date: "09/21/2026, 03:21",
    alarm: "Warning",
    parameter: "Tread_Rollover",
    value: "0.02 (in)",
    threshold: "0.02 (in)",
    status: "Unacknowledged",
    assignedTo: "-",
    remark: "-",
  },
  {
    id: "ALM-4",
    vehicleId: "BADC_0000003674",
    wheel: "L1",
    date: "09/21/2026, 03:21",
    alarm: "Alert",
    parameter: "Tread_Rollover",
    value: "0.06 (in)",
    threshold: "0.04 (in)",
    status: "Unacknowledged",
    assignedTo: "-",
    remark: "-",
  },
  {
    id: "ALM-5",
    vehicleId: "BADC_0000003674",
    wheel: "L2",
    date: "09/21/2026, 03:21",
    alarm: "Warning",
    parameter: "Tread_Rollover",
    value: "0.03 (in)",
    threshold: "0.02 (in)",
    status: "Unacknowledged",
    assignedTo: "-",
    remark: "-",
  },
  {
    id: "ALM-6",
    vehicleId: "BADC_0000003302",
    wheel: "L3",
    date: "09/21/2026, 03:21",
    alarm: "Warning",
    parameter: "Tread_Rollover",
    value: "0.02 (in)",
    threshold: "0.02 (in)",
    status: "Unacknowledged",
    assignedTo: "-",
    remark: "-",
  },
  {
    id: "ALM-7",
    vehicleId: "FBCG_0000787198",
    wheel: "R7",
    date: "09/21/2026, 02:28",
    alarm: "Warning",
    parameter: "Flange_Height",
    value: "1.46 (in)",
    threshold: "1.44 (in)",
    status: "Unacknowledged",
    assignedTo: "-",
    remark: "-",
  },
  {
    id: "ALM-8",
    vehicleId: "FBCG_0000790282",
    wheel: "L8",
    date: "09/21/2026, 02:28",
    alarm: "Warning",
    parameter: "Flange_Height",
    value: "1.46 (in)",
    threshold: "1.44 (in)",
    status: "Unacknowledged",
    assignedTo: "-",
    remark: "-",
  },
  {
    id: "ALM-9",
    vehicleId: "TIOS_0000350018",
    wheel: "L7",
    date: "09/21/2026, 02:28",
    alarm: "Warning",
    parameter: "Tread_Hollow",
    value: "4.54 (mm)",
    threshold: "4.00 (mm)",
    status: "Unacknowledged",
    assignedTo: "-",
    remark: "-",
  },
  {
    id: "ALM-10",
    vehicleId: "TIOS_0000009220",
    wheel: "R1",
    date: "09/21/2026, 02:28",
    alarm: "Warning",
    parameter: "Flange_Height",
    value: "1.48 (in)",
    threshold: "1.44 (in)",
    status: "Unacknowledged",
    assignedTo: "-",
    remark: "-",
  },
  {
    id: "ALM-11",
    vehicleId: "TIOS_0000723786",
    wheel: "R2",
    date: "09/21/2026, 02:28",
    alarm: "Warning",
    parameter: "Tread_Hollow",
    value: "4.23 (mm)",
    threshold: "4.00 (mm)",
    status: "Unacknowledged",
    assignedTo: "-",
    remark: "-",
  },
];

const CONNECTED_SENSORS = [
  {
    id: "wheelmap",
    title: "Wheel Profile Measurement (AWPMS / WheelMAP)",
    tag: "DYNAMIC LASER METROLOGY",
    desc: "Automated multi-laser profilometry scanning rolling stock wheel geometry at speeds up to 160+ km/h with ±300 μm precision.",
    specs: "±300 μm Accuracy • Bi-Directional • IP68 Sealed",
    image: "/assets/datamap/system-wheelmap.webp",
    link: "/product1",
  },
  {
    id: "heatmap",
    title: "Hot Axle Box & Wheel Heat (HABD / BearingMAP)",
    tag: "MULTI-BEAM INFRARED THERMAL",
    desc: "Multi-beam non-contact pyrometer scanner capturing bearing temperatures up to 350°C and hot wheels up to 500°C.",
    specs: "4–8 Beams / Axle • 500°C Limit • Track-Friendly Mounting",
    image: "/assets/datamap/system-heatmap.webp",
    link: "/product2",
  },
  {
    id: "brakemap",
    title: "Brake Shoe & Vision Telemetry (BrakeMAP)",
    tag: "OPTICAL & WEAR MONITORING",
    desc: "Continuous optical inspection evaluating brake shoe thickness, angle alignment, and dynamic friction wear across bogies.",
    specs: "Automated Air Purge • Real-Time Triage • Edge AI",
    image: "/assets/datamap/system-brakemap.webp",
    link: "/product3",
  },
];

const METRICS_CARDS = [
  {
    label: "Telemetry Ingestion Rate",
    value: "< 120 ms",
    detail: "Edge sensor to central DataMAP console latency",
  },
  {
    label: "Measurement Precision",
    value: "±300 μm",
    detail: "Full wheel profile laser triangulation accuracy",
  },
  {
    label: "Line Speed Rating",
    value: "160+ km/h",
    detail: "Mainline dynamic high-speed train inspection",
  },
  {
    label: "Data Architecture",
    value: "REST / MQTT",
    detail: "100% open standards, zero proprietary lock-in",
  },
];

const WHEEL_OPTIONS = ["L1", "R1", "L2", "R2", "L3", "R3", "L4", "R4", "L5", "R5", "L6", "R6"];

const DataMap = () => {
  // Navigation & Console state
  const [activeModule, setActiveModule] = useState("trains"); // "trains", "alarms", "vehicles", "settings"
  const [selectedSite, setSelectedSite] = useState("Ridgeview");
  const [units, setUnits] = useState("Imperial"); // "Imperial" or "Metric"
  
  // Module 1 Train Browser state
  const [trainSubTab, setTrainSubTab] = useState("Trains"); // "Trains" or "Vehicles"
  const [trainSearchQuery, setTrainSearchQuery] = useState("");
  const [selectedTrain, setSelectedTrain] = useState(TRAIN_PASSAGES[0]);
  const [trainDetailOpen, setTrainDetailOpen] = useState(false);

  // Module 2 Alarm Browser state
  const [alarmSubTab, setAlarmSubTab] = useState("Alarms"); // "Alarms" or "Unattended"
  const [alarmSearchQuery, setAlarmSearchQuery] = useState("");
  const [alarmFilterType, setAlarmFilterType] = useState("ALL");
  const [alarmList, setAlarmList] = useState(ALARM_RECORDS);

  // Module 3 Vehicle Analysis state
  const [selectedWheel, setSelectedWheel] = useState("L1");
  const [compareOption, setCompareOption] = useState("Companion Wheel");

  // Filtered Trains
  const filteredTrains = TRAIN_PASSAGES.filter((t) => {
    return (
      t.trainId.includes(trainSearchQuery) ||
      t.leadLoco.toLowerCase().includes(trainSearchQuery.toLowerCase())
    );
  });

  // Filtered Alarms
  const filteredAlarms = alarmList.filter((a) => {
    const matchesQuery =
      a.vehicleId.toLowerCase().includes(alarmSearchQuery.toLowerCase()) ||
      a.parameter.toLowerCase().includes(alarmSearchQuery.toLowerCase());
    const matchesType =
      alarmFilterType === "ALL" ? true : a.alarm === alarmFilterType;
    return matchesQuery && matchesType;
  });

  const getCompanionWheel = (w) => {
    const side = w[0];
    const num = w.slice(1);
    return side === "L" ? `R${num}` : `L${num}`;
  };

  const handleAcknowledge = (id) => {
    setAlarmList((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: "Acknowledged" } : item
      )
    );
  };

  return (
    <div className={styles.pageWrapper}>
      {/* Top Breadcrumb Navigation */}
      <div className={styles.breadcrumbBar}>
        <div className={styles.container}>
          <div className={styles.breadcrumbs}>
            <Link to="/" className={styles.crumbLink}>Home</Link>
            <ChevronRight size={14} className={styles.crumbSep} />
            <span className={styles.crumbCurrent}>DataMAP™ Platform</span>
          </div>
        </div>
      </div>

      {/* Main Page Header with Authentic infravis.tech DataMAP Backdrop */}
      <section className={styles.heroSection}>
        <div className={styles.heroBackdrop}>
          <img
            src="/assets/datamap/system-datamap.webp"
            alt="DataMAP Enterprise Rail Telemetry"
            className={styles.heroBgImg}
          />
          <div className={styles.heroScrim} />
        </div>

        {/* Ambient Floating Atmospheric Glow Orbs */}
        <div className={styles.ambientGlowOrb1} />
        <div className={styles.ambientGlowOrb2} />

        <div className={styles.container} style={{ position: "relative", zIndex: 2 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.badgeRow}>
              <div className={styles.tag}>
                <Database size={14} className={styles.tagIcon} />
                <span>CENTRALIZED RAIL OPERATIONS SOFTWARE</span>
              </div>
              <div className={styles.statusPill}>
                <span className={styles.livePulse} />
                <span>SYSTEM ONLINE // v3.4 ENTERPRISE</span>
              </div>
            </div>

            <h1 className={styles.title}>
              DataMAP<span className={styles.titleAccent}>™</span> Operations Platform
            </h1>

            <p className={styles.subtitle}>
              Turning wayside hardware sensor telemetry into actionable, preventative maintenance decisions.
              Consolidating laser profilometry (AWPMS), thermal infrared scans (HABD), high-speed vision (MVIS),
              and dynamic telemetry (CCM) into a unified enterprise railway intelligence console.
            </p>

            {/* Quick Action Ribbon */}
            <div className={styles.heroActions}>
              <motion.a
                href="#datamap-console"
                className={styles.primaryActionBtn}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span>Launch Interactive Console</span>
                <ArrowRight size={16} />
              </motion.a>
              <motion.a
                href="/assets/AWPMS Technical Brochure - Space.pdf"
                download="SpaceLabs_DataMAP_Specs.pdf"
                className={styles.secondaryActionBtn}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download size={15} />
                <span>Download Architecture Spec (PDF)</span>
              </motion.a>
              <Link to="/products" className={styles.tertiaryActionBtn}>
                <Layers size={15} />
                <span>View Hardware Sensor Matrix</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* High-Level Platform Metrics Strip */}
      <section className={styles.metricsSection}>
        <div className={styles.container}>
          <div className={styles.metricsGrid}>
            {METRICS_CARDS.map((metric, idx) => (
              <motion.div
                key={idx}
                className={styles.metricCard}
                initial={{ opacity: 0, y: 26, scale: 0.985 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -1.5, transition: { duration: 0.2 } }}
              >
                <div className={styles.metricValue}>{metric.value}</div>
                <div className={styles.metricLabel}>{metric.label}</div>
                <div className={styles.metricDetail}>{metric.detail}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          THE AUTHENTIC INTERACTIVE DATAMAP SOFTWARE CONSOLE (MATCHING INFRAVIS)
          ========================================================================= */}
      <section className={styles.consoleSection} id="datamap-console">
        <div className={styles.container}>
          <div className={styles.sectionHeadingBox}>
            <div>
              <div className={styles.subTag}>LIVE INTERACTIVE APPLICATION</div>
              <h2 className={styles.sectionHeading}>DataMAP™ Live Telemetry Console</h2>
              <p className={styles.sectionLead}>
                Interact with the operational software suite. Filter network-wide train passages, inspect live defect alarms, and analyze dynamic wheel cross-section profiles.
              </p>
            </div>

            {/* Quick Switcher for Primary Software Modules */}
            <div className={styles.moduleSwitcher}>
              <motion.button
                onClick={() => setActiveModule("trains")}
                className={`${styles.moduleSwitchBtn} ${activeModule === "trains" ? styles.moduleSwitchBtnActive : ""}`}
                whileTap={{ scale: 0.95 }}
              >
                <Activity size={14} />
                <span>Train Browser</span>
              </motion.button>
              <motion.button
                onClick={() => setActiveModule("alarms")}
                className={`${styles.moduleSwitchBtn} ${activeModule === "alarms" ? styles.moduleSwitchBtnActive : ""}`}
                whileTap={{ scale: 0.95 }}
              >
                <AlertTriangle size={14} />
                <span>Alarm Browser</span>
              </motion.button>
              <motion.button
                onClick={() => setActiveModule("vehicles")}
                className={`${styles.moduleSwitchBtn} ${activeModule === "vehicles" ? styles.moduleSwitchBtnActive : ""}`}
                whileTap={{ scale: 0.95 }}
              >
                <Sliders size={14} />
                <span>Vehicle Analysis</span>
              </motion.button>
              <motion.button
                onClick={() => setActiveModule("settings")}
                className={`${styles.moduleSwitchBtn} ${activeModule === "settings" ? styles.moduleSwitchBtnActive : ""}`}
                whileTap={{ scale: 0.95 }}
              >
                <Settings size={14} />
                <span>Open APIs</span>
              </motion.button>
            </div>
          </div>

          {/* Master Software Chassis Frame (Exact Dark Design of DataMAP) */}
          <div className={styles.masterChassis}>
            {/* Top Navigation Bar of the Software */}
            <header className={styles.softwareTopBar}>
              <div className={styles.softwareLogoBox}>
                <span className={styles.softwareLogoText}>DataMAP</span>
                <span className={styles.softwareLogoBadge}>v3.4</span>
              </div>

              {/* Center Radar Scanner Live Telemetry HUD */}
              <div className={styles.radarStatusPill}>
                <div className={styles.radarPingCircle} />
                <span className={styles.radarLiveDot} />
                <span className={styles.radarText}>LIVE SENSOR TELEMETRY UPLINK ACTIVE</span>
              </div>

              <div className={styles.softwareTopControls}>
                {/* Site Dropdown */}
                <div className={styles.controlPill}>
                  <MapPin size={13} className={styles.amberPin} />
                  <span className={styles.controlLabel}>{selectedSite}</span>
                  <ChevronDown size={13} className={styles.mutedChevron} />
                </div>

                {/* Detector Type Dropdown */}
                <div className={styles.controlPill}>
                  <span className={styles.controlLabel}>Select Detector Type</span>
                  <ChevronDown size={13} className={styles.mutedChevron} />
                </div>

                {/* Units Imperial / Metric Toggle */}
                <motion.button
                  onClick={() => setUnits(units === "Imperial" ? "Metric" : "Imperial")}
                  className={styles.unitsPill}
                  title="Click to toggle Units (Imperial/Metric)"
                  whileTap={{ scale: 0.92 }}
                >
                  <span className={styles.unitsSub}>UNITS</span>
                  <span className={styles.unitsVal}>{units}</span>
                </motion.button>

                {/* Notifications Bell with 99+ Badge */}
                <div className={styles.bellPill}>
                  <Bell size={15} />
                  <span className={styles.bellBadge}>99+</span>
                </div>

                {/* User Avatar Circle */}
                <div className={styles.avatarPill}>
                  <span>SA</span>
                </div>
              </div>
            </header>

            {/* Software Body Grid: Left Slim Rail + Right Active Workspace */}
            <div className={styles.softwareBody}>
              {/* Left Slim Vertical Icon Rail */}
              <aside className={styles.softwareSidebar}>
                <motion.button
                  onClick={() => setActiveModule("trains")}
                  className={`${styles.railIconBtn} ${activeModule === "trains" ? styles.railIconBtnActive : ""}`}
                  title="Train Browser"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.92 }}
                >
                  <Activity size={18} />
                </motion.button>
                <motion.button
                  onClick={() => setActiveModule("alarms")}
                  className={`${styles.railIconBtn} ${activeModule === "alarms" ? styles.railIconBtnActive : ""}`}
                  title="Alarm Browser"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.92 }}
                >
                  <AlertTriangle size={18} />
                </motion.button>
                <motion.button
                  onClick={() => setActiveModule("vehicles")}
                  className={`${styles.railIconBtn} ${activeModule === "vehicles" ? styles.railIconBtnActive : ""}`}
                  title="Vehicle Analysis"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.92 }}
                >
                  <Sliders size={18} />
                </motion.button>
                <motion.button
                  onClick={() => setActiveModule("settings")}
                  className={`${styles.railIconBtn} ${activeModule === "settings" ? styles.railIconBtnActive : ""}`}
                  title="Diagnostics & Open APIs"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.92 }}
                >
                  <Settings size={18} />
                </motion.button>
              </aside>

              {/* Main Active Software Workspace with Fluid AnimatePresence Transitions */}
              <main className={styles.softwareMainArea}>
                <AnimatePresence mode="wait">
                  {/* =========================================================
                      VIEW 1: TRAIN BROWSER (EXACT MATCH TO datamap-train-browser)
                      ========================================================= */}
                  {activeModule === "trains" && (
                    <motion.div
                      key="trains"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
                      className={styles.workspaceWrapper}
                    >
                      {/* Sub-Header Bar */}
                      <div className={styles.subHeaderBar}>
                        <div className={styles.subHeaderLeft}>
                          <div className={styles.moduleTitleRow}>
                            <h3 className={styles.moduleTitle}>Train Browser</h3>
                            <motion.div
                              whileHover={{ rotate: 180 }}
                              transition={{ duration: 0.4 }}
                            >
                              <RefreshCw size={13} className={styles.refreshIcon} />
                            </motion.div>
                          </div>
                          <div className={styles.tabLinksRow}>
                            <button
                              onClick={() => setTrainSubTab("Trains")}
                              className={`${styles.tabLink} ${trainSubTab === "Trains" ? styles.tabLinkActive : ""}`}
                            >
                              Trains
                            </button>
                            <button
                              onClick={() => setTrainSubTab("Vehicles")}
                              className={`${styles.tabLink} ${trainSubTab === "Vehicles" ? styles.tabLinkActive : ""}`}
                            >
                              Vehicles
                            </button>
                          </div>
                        </div>

                        <div className={styles.subHeaderRight}>
                          <motion.button
                            className={styles.exportsBtn}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.96 }}
                          >
                            <Download size={13} />
                            <span>Exports</span>
                            <ChevronDown size={13} />
                          </motion.button>
                        </div>
                      </div>

                      {/* Filter Controls Row */}
                      <div className={styles.filterBar}>
                        <div className={styles.filterFieldBox}>
                          <span>Train ID</span>
                          <ChevronDown size={12} className={styles.mutedChevron} />
                        </div>

                        <div className={styles.searchBox}>
                          <Search size={14} className={styles.searchIconMuted} />
                          <input
                            type="text"
                            placeholder="Search by Train ID"
                            value={trainSearchQuery}
                            onChange={(e) => setTrainSearchQuery(e.target.value)}
                            className={styles.softwareInput}
                          />
                        </div>

                        <div className={styles.filterPillSelect}>
                          <Calendar size={13} className={styles.mutedCalendar} />
                          <span>Select Date Range</span>
                        </div>

                        <div className={styles.filterPillSelect}>
                          <span>Detector Type</span>
                          <ChevronDown size={12} className={styles.mutedChevron} />
                        </div>

                        <button className={styles.moreFiltersBtn}>
                          <Filter size={13} />
                          <span>More Filters</span>
                        </button>

                        <div className={styles.viewToggleGroup}>
                          <button className={`${styles.viewBtn} ${styles.viewBtnActive}`}>
                            <Grid size={13} />
                          </button>
                          <button className={styles.viewBtn}>
                            <List size={13} />
                          </button>
                        </div>
                      </div>

                      {/* Data Table */}
                      <div className={styles.tableScrollBox}>
                        <table className={styles.softwareTable}>
                          <thead>
                            <tr>
                              <th>Train ID</th>
                              <th>Lead Loco</th>
                              <th>Passed On</th>
                              <th>Site Name</th>
                              <th>Direction</th>
                              <th>Speed ({units === "Imperial" ? "mph" : "km/h"})</th>
                              <th>Total Vehicles</th>
                              <th>WheelMAP</th>
                              <th>Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {filteredTrains.map((tr) => {
                              const isSelected = selectedTrain?.trainId === tr.trainId;
                              const displaySpeed =
                                units === "Imperial"
                                ? tr.speedMph.toFixed(1)
                                : (tr.speedMph * 1.60934).toFixed(1);

                              return (
                                <tr
                                  key={tr.trainId}
                                  onClick={() => {
                                    setSelectedTrain(tr);
                                    setTrainDetailOpen(true);
                                  }}
                                  className={`${styles.tableDataRow} ${
                                    isSelected ? styles.tableDataRowSelected : ""
                                  }`}
                                >
                                  <td>
                                    <div className={styles.trainIdPill}>
                                      <span className={styles.amberText}>{tr.trainId}</span>
                                      <ChevronDown size={11} className={styles.mutedChevron} />
                                    </div>
                                  </td>
                                  <td>
                                    <span className={styles.leadLocoText}>{tr.leadLoco}</span>
                                  </td>
                                  <td>
                                    <span className={styles.dateText}>{tr.passedOn}</span>
                                  </td>
                                  <td>
                                    <span className={styles.siteText}>{tr.siteName}</span>
                                  </td>
                                  <td>
                                    <span className={styles.dirText}>{tr.direction}</span>
                                  </td>
                                  <td>
                                    <span className={styles.speedText}>{displaySpeed}</span>
                                  </td>
                                  <td>
                                    <span className={styles.vehiclesText}>{tr.totalVehicles}</span>
                                  </td>
                                  <td>
                                    <div className={styles.dualBadgeGroup}>
                                      <span className={styles.warnBadge}>
                                        {tr.warnings < 10 ? `0${tr.warnings}` : tr.warnings} Warnings
                                      </span>
                                      {tr.alerts > 0 ? (
                                        <span className={styles.alertBadge}>
                                          {tr.alerts < 10 ? `0${tr.alerts}` : tr.alerts}{" "}
                                          {tr.alerts === 1 ? "Alert" : "Alerts"}
                                        </span>
                                      ) : (
                                        <span className={styles.zeroBadge}>00 Alerts</span>
                                      )}
                                    </div>
                                  </td>
                                  <td>
                                    <button
                                      className={styles.moreActionBtn}
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        setSelectedTrain(tr);
                                        setTrainDetailOpen(true);
                                      }}
                                    >
                                      <MoreHorizontal size={15} />
                                    </button>
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>

                      {/* Selected Train Drawer with Framer Motion AnimatePresence */}
                      <AnimatePresence>
                        {trainDetailOpen && selectedTrain && (
                          <motion.div
                            initial={{ opacity: 0, height: 0, y: -8 }}
                            animate={{ opacity: 1, height: "auto", y: 0 }}
                            exit={{ opacity: 0, height: 0, y: -8 }}
                            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                            className={styles.passageInspectionDrawer}
                          >
                            <div className={styles.drawerTop}>
                              <div className={styles.drawerTitleBox}>
                                <span className={styles.inspectBadge}>INSPECT PASSAGE TELEMETRY</span>
                                <h4>Train #{selectedTrain.trainId} — {selectedTrain.leadLoco}</h4>
                                <span className={styles.drawerMeta}>
                                  Passed: {selectedTrain.passedOn} • Site: {selectedTrain.siteName} (Direction {selectedTrain.direction})
                                </span>
                              </div>
                              <button
                                onClick={() => setTrainDetailOpen(false)}
                                className={styles.drawerCloseBtn}
                              >
                                ×
                              </button>
                            </div>

                            <div className={styles.drawerBodyGrid}>
                              <div className={styles.drawerMetricItem}>
                                <span>Total Axles Ingested</span>
                                <strong>{selectedTrain.totalVehicles * 4} Axles</strong>
                              </div>
                              <div className={styles.drawerMetricItem}>
                                <span>Dynamic Transit Speed</span>
                                <strong>{selectedTrain.speedMph} mph ({Math.round(selectedTrain.speedMph * 1.609)} km/h)</strong>
                              </div>
                              <div className={styles.drawerMetricItem}>
                                <span>Wheel Geometry Alarms</span>
                                <strong className={selectedTrain.alerts > 0 ? styles.alertText : styles.okText}>
                                  {selectedTrain.warnings} Warnings • {selectedTrain.alerts} Critical Alerts
                                </strong>
                              </div>
                              <div className={styles.drawerMetricItem}>
                                <span>Telemetry Confidence</span>
                                <strong className={styles.okText}>99.6% Sub-Millimeter</strong>
                              </div>
                            </div>

                            <div className={styles.drawerFooterRow}>
                              <motion.button
                                onClick={() => setActiveModule("vehicles")}
                                className={styles.jumpToVehicleBtn}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.97 }}
                              >
                                <span>Inspect Axle Cross-Sections in Vehicle Analysis</span>
                                <ArrowRight size={13} />
                              </motion.button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  )}

                  {/* =========================================================
                      VIEW 2: ALARM BROWSER (EXACT MATCH TO datamap-alarm-list)
                      ========================================================= */}
                  {activeModule === "alarms" && (
                    <motion.div
                      key="alarms"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
                      className={styles.workspaceWrapper}
                    >
                      {/* Sub-Header Bar with Global Alarm Stats */}
                      <div className={styles.subHeaderBar}>
                        <div className={styles.subHeaderLeft}>
                          <div className={styles.moduleTitleRow}>
                            <h3 className={styles.moduleTitle}>Alarm Browser</h3>
                            <motion.div
                              whileHover={{ rotate: 180 }}
                              transition={{ duration: 0.4 }}
                            >
                              <RefreshCw size={13} className={styles.refreshIcon} />
                            </motion.div>
                          </div>
                          <div className={styles.tabLinksRow}>
                            <button
                              onClick={() => setAlarmSubTab("Alarms")}
                              className={`${styles.tabLink} ${alarmSubTab === "Alarms" ? styles.tabLinkActive : ""}`}
                            >
                              Alarms (1825)
                            </button>
                            <button
                              onClick={() => setAlarmSubTab("Unattended")}
                              className={`${styles.tabLink} ${alarmSubTab === "Unattended" ? styles.tabLinkActive : ""}`}
                            >
                              Unattended Alarms (171427)
                            </button>
                          </div>
                        </div>

                        <div className={styles.alarmStatsGroup}>
                          <div className={styles.statBox}>
                            <span className={styles.statLabel}>Warnings</span>
                            <span className={styles.statValue}>74844</span>
                          </div>
                          <div className={styles.statBox}>
                            <span className={styles.statLabel}>Alerts</span>
                            <span className={styles.statValue}>81587</span>
                          </div>
                          <motion.button
                            className={styles.exportsBtn}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.96 }}
                          >
                            <Download size={13} />
                            <span>Exports</span>
                            <ChevronDown size={13} />
                          </motion.button>
                        </div>
                      </div>

                      {/* Filter Row */}
                      <div className={styles.filterBar}>
                        <div className={styles.filterFieldBox}>
                          <span>Vehicle ID</span>
                          <ChevronDown size={12} className={styles.mutedChevron} />
                        </div>

                        <div className={styles.searchBox}>
                          <Search size={14} className={styles.searchIconMuted} />
                          <input
                            type="text"
                            placeholder="Search by Vehicle ID"
                            value={alarmSearchQuery}
                            onChange={(e) => setAlarmSearchQuery(e.target.value)}
                            className={styles.softwareInput}
                          />
                        </div>

                        <div className={styles.filterPillSelect}>
                          <Calendar size={13} className={styles.mutedCalendar} />
                          <span>Select Date Range</span>
                        </div>

                        <div className={styles.filterPillSelect}>
                          <select
                            value={alarmFilterType}
                            onChange={(e) => setAlarmFilterType(e.target.value)}
                            className={styles.alarmTypeSelect}
                          >
                            <option value="ALL">Alarm Type (All)</option>
                            <option value="Alert">Alerts Only</option>
                            <option value="Warning">Warnings Only</option>
                          </select>
                        </div>

                        <button className={styles.moreFiltersBtn}>
                          <Filter size={13} />
                          <span>More Filters</span>
                        </button>
                      </div>

                      {/* Alarm Data Table */}
                      <div className={styles.tableScrollBox}>
                        <table className={styles.softwareTable}>
                          <thead>
                            <tr>
                              <th>Vehicle ID</th>
                              <th>Wheel</th>
                              <th>Date</th>
                              <th>Alarm</th>
                              <th>Parameters</th>
                              <th>Value</th>
                              <th>Threshold</th>
                              <th>Status</th>
                              <th>Assigned To</th>
                              <th>Remark</th>
                              <th>Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {filteredAlarms.map((a) => (
                              <tr key={a.id} className={styles.tableDataRow}>
                                <td>
                                  <span className={styles.amberText}>{a.vehicleId}</span>
                                </td>
                                <td>
                                  <span className={styles.wheelBadge}>{a.wheel}</span>
                                </td>
                                <td>
                                  <span className={styles.dateText}>{a.date}</span>
                                </td>
                                <td>
                                  {a.alarm === "Alert" ? (
                                    <span className={styles.tablePillAlert}>Alert</span>
                                  ) : (
                                    <span className={styles.tablePillWarn}>Warning</span>
                                  )}
                                </td>
                                <td>
                                  <span className={styles.paramText}>{a.parameter}</span>
                                </td>
                                <td>
                                  <span className={styles.monoValue}>{a.value}</span>
                                </td>
                                <td>
                                  <span className={styles.monoValueMuted}>{a.threshold}</span>
                                </td>
                                <td>
                                  <motion.button
                                    onClick={() => handleAcknowledge(a.id)}
                                    className={
                                      a.status === "Acknowledged"
                                        ? styles.ackPillDone
                                        : styles.ackPillPending
                                    }
                                    title="Click to acknowledge alarm"
                                    whileTap={{ scale: 0.92 }}
                                  >
                                    {a.status === "Acknowledged" ? "✓ Acknowledged" : a.status}
                                  </motion.button>
                                </td>
                                <td>
                                  <span className={styles.mutedDash}>{a.assignedTo}</span>
                                </td>
                                <td>
                                  <span className={styles.mutedDash}>{a.remark}</span>
                                </td>
                                <td>
                                  <button className={styles.moreActionBtn}>
                                    <MoreHorizontal size={15} />
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      {/* Pagination Bar */}
                      <div className={styles.paginationBar}>
                        <span className={styles.paginationTotal}>
                          Total: {filteredAlarms.length} Records
                        </span>
                        <div className={styles.paginationControls}>
                          <span className={styles.recordsPerPage}>100 Records per page v</span>
                          <div className={styles.pageButtons}>
                            <button className={styles.pageArrow}><ChevronsLeft size={13} /></button>
                            <button className={styles.pageArrow}><ChevronLeft size={13} /></button>
                            <span className={styles.pageNum}>1 of 19</span>
                            <button className={styles.pageArrow}><ChevronRight size={13} /></button>
                            <button className={styles.pageArrow}><ChevronsRight size={13} /></button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* =========================================================
                      VIEW 3: VEHICLE ANALYSIS (MATCHING datamap-vehicle-detail)
                      ========================================================= */}
                  {activeModule === "vehicles" && (
                    <motion.div
                      key="vehicles"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
                      className={styles.workspaceWrapper}
                    >
                      {/* Sub-Header */}
                      <div className={styles.subHeaderBar}>
                        <div className={styles.subHeaderLeft}>
                          <h3 className={styles.moduleTitle}>Vehicle Analysis</h3>
                        </div>
                        <div className={styles.subHeaderRight}>
                          <div className={styles.controlPill}>
                            <span className={styles.controlLabel}>Parameters: Wheel Profile</span>
                            <ChevronDown size={13} className={styles.mutedChevron} />
                          </div>
                        </div>
                      </div>

                      {/* Compare Radio Options & View Profile Button */}
                      <div className={styles.vehicleCompareBar}>
                        <span className={styles.compareLabel}>Compare:</span>
                        {[
                          "Companion Wheel",
                          "Any Wheel on Same Vehicle",
                          "Wheel Standards",
                          "Previous passes",
                        ].map((opt) => (
                          <label key={opt} className={styles.radioLabel}>
                            <input
                              type="radio"
                              name="compareRadio"
                              checked={compareOption === opt}
                              onChange={() => setCompareOption(opt)}
                              className={styles.radioInput}
                            />
                            <span className={styles.radioText}>{opt}</span>
                          </label>
                        ))}

                        <motion.button
                          className={styles.viewProfileBtn}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <RefreshCw size={13} />
                          <span>View Wheel Profile</span>
                        </motion.button>
                      </div>

                      {/* Wheel Selector Button Strip (L1, R1, L2, R2...) with micro-animations */}
                      <div className={styles.wheelStrip}>
                        {WHEEL_OPTIONS.map((w) => {
                          const isSelected = selectedWheel === w;
                          const isCompanion = getCompanionWheel(selectedWheel) === w;
                          return (
                            <motion.button
                              key={w}
                              onClick={() => setSelectedWheel(w)}
                              className={`${styles.wheelBtn} ${
                                isSelected
                                  ? styles.wheelBtnActive
                                  : isCompanion
                                  ? styles.wheelBtnCompanion
                                  : ""
                              }`}
                              whileHover={{ scale: 1.08 }}
                              whileTap={{ scale: 0.92 }}
                            >
                              <span>{w}</span>
                            </motion.button>
                          );
                        })}
                      </div>

                      {/* Main Interactive Diagram & Chart Grid */}
                      <div className={styles.vehicleChartGrid}>
                        {/* Left: Railcar Bogie Schematic (Select a Wheel) */}
                        <div className={styles.bogieSchematicCard}>
                          <div className={styles.bogieHeading}>Select a Wheel</div>
                          <div className={styles.bogieFrame}>
                            {/* Railcar Schematic Top-Down Vector */}
                            <svg viewBox="0 0 120 280" className={styles.bogieSvg}>
                              {/* Railcar Body Center */}
                              <rect
                                x="44"
                                y="20"
                                width="32"
                                height="240"
                                rx="6"
                                fill="#262626"
                                stroke="#404040"
                                strokeWidth="1.5"
                              />
                              {/* Axle 1 */}
                              <line x1="20" y1="45" x2="100" y2="45" stroke="#0284c7" strokeWidth="3" />
                              <rect
                                x="12"
                                y="30"
                                width="12"
                                height="30"
                                rx="3"
                                fill={selectedWheel === "L1" ? "#38bdf8" : "#525252"}
                                stroke={selectedWheel === "L1" ? "#38bdf8" : "#0284c7"}
                                strokeWidth={selectedWheel === "L1" ? "2.5" : "1.5"}
                                cursor="pointer"
                                onClick={() => setSelectedWheel("L1")}
                              />
                              <rect
                                x="96"
                                y="30"
                                width="12"
                                height="30"
                                rx="3"
                                fill={selectedWheel === "R1" ? "#38bdf8" : "#ea580c"}
                                stroke="#ea580c"
                                strokeWidth={selectedWheel === "R1" ? "2.5" : "1.5"}
                                cursor="pointer"
                                onClick={() => setSelectedWheel("R1")}
                              />

                              {/* Axle 2 */}
                              <line x1="20" y1="85" x2="100" y2="85" stroke="#525252" strokeWidth="2" />
                              <rect
                                x="12"
                                y="70"
                                width="12"
                                height="30"
                                rx="3"
                                fill={selectedWheel === "L2" ? "#38bdf8" : "#404040"}
                                stroke={selectedWheel === "L2" ? "#38bdf8" : "#525252"}
                                strokeWidth={selectedWheel === "L2" ? "2.5" : "1"}
                                cursor="pointer"
                                onClick={() => setSelectedWheel("L2")}
                              />
                              <rect
                                x="96"
                                y="70"
                                width="12"
                                height="30"
                                rx="3"
                                fill={selectedWheel === "R2" ? "#38bdf8" : "#404040"}
                                stroke={selectedWheel === "R2" ? "#38bdf8" : "#525252"}
                                strokeWidth={selectedWheel === "R2" ? "2.5" : "1"}
                                cursor="pointer"
                                onClick={() => setSelectedWheel("R2")}
                              />

                              {/* Axle 3 */}
                              <line x1="20" y1="125" x2="100" y2="125" stroke="#525252" strokeWidth="2" />
                              <rect
                                x="12"
                                y="110"
                                width="12"
                                height="30"
                                rx="3"
                                fill={selectedWheel === "L3" ? "#38bdf8" : "#404040"}
                                stroke={selectedWheel === "L3" ? "#38bdf8" : "none"}
                                strokeWidth="2"
                                cursor="pointer"
                                onClick={() => setSelectedWheel("L3")}
                              />
                              <rect
                                x="96"
                                y="110"
                                width="12"
                                height="30"
                                rx="3"
                                fill={selectedWheel === "R3" ? "#38bdf8" : "#404040"}
                                stroke={selectedWheel === "R3" ? "#38bdf8" : "none"}
                                strokeWidth="2"
                                cursor="pointer"
                                onClick={() => setSelectedWheel("R3")}
                              />

                              {/* Center Bolster */}
                              <rect x="36" y="145" width="48" height="30" rx="4" fill="#333333" />

                              {/* Axle 4 */}
                              <line x1="20" y1="195" x2="100" y2="195" stroke="#525252" strokeWidth="2" />
                              <rect
                                x="12"
                                y="180"
                                width="12"
                                height="30"
                                rx="3"
                                fill={selectedWheel === "L4" ? "#38bdf8" : "#404040"}
                                stroke={selectedWheel === "L4" ? "#38bdf8" : "none"}
                                strokeWidth="2"
                                cursor="pointer"
                                onClick={() => setSelectedWheel("L4")}
                              />
                              <rect
                                x="96"
                                y="180"
                                width="12"
                                height="30"
                                rx="3"
                                fill={selectedWheel === "R4" ? "#38bdf8" : "#404040"}
                                stroke={selectedWheel === "R4" ? "#38bdf8" : "none"}
                                strokeWidth="2"
                                cursor="pointer"
                                onClick={() => setSelectedWheel("R4")}
                              />

                              {/* Axle 5 */}
                              <line x1="20" y1="235" x2="100" y2="235" stroke="#525252" strokeWidth="2" />
                              <rect
                                x="12"
                                y="220"
                                width="12"
                                height="30"
                                rx="3"
                                fill={selectedWheel === "L5" ? "#38bdf8" : "#404040"}
                                stroke={selectedWheel === "L5" ? "#38bdf8" : "none"}
                                strokeWidth="2"
                                cursor="pointer"
                                onClick={() => setSelectedWheel("L5")}
                              />
                              <rect
                                x="96"
                                y="220"
                                width="12"
                                height="30"
                                rx="3"
                                fill={selectedWheel === "R5" ? "#38bdf8" : "#404040"}
                                stroke={selectedWheel === "R5" ? "#38bdf8" : "none"}
                                strokeWidth="2"
                                cursor="pointer"
                                onClick={() => setSelectedWheel("R5")}
                              />
                            </svg>
                          </div>
                          <div className={styles.bogieLegend}>
                            <span className={styles.cyanDot}>●</span>
                            <span>Primary ({selectedWheel})</span>
                            <span className={styles.amberDot}>●</span>
                            <span>Companion ({getCompanionWheel(selectedWheel)})</span>
                          </div>
                        </div>

                        {/* Right: High-Precision Coordinate Profile Chart */}
                        <div className={styles.profileChartCard}>
                          {/* Legend */}
                          <div className={styles.chartLegendRow}>
                            <div className={styles.legendItem}>
                              <span className={styles.cyanDot}>●</span>
                              <span>{selectedWheel} Primary Wheel</span>
                            </div>
                            <div className={styles.legendItem}>
                              <span className={styles.amberDot}>●</span>
                              <span>{getCompanionWheel(selectedWheel)} Companion Wheel</span>
                            </div>
                          </div>

                          {/* Interactive SVG Coordinate Grid */}
                          <div className={styles.coordinateGridCanvas}>
                            <svg
                              viewBox="0 0 580 280"
                              className={styles.coordSvg}
                              preserveAspectRatio="none"
                            >
                              <defs>
                                <pattern
                                  id="gridPattern"
                                  width="58"
                                  height="28"
                                  patternUnits="userSpaceOnUse"
                                >
                                  <path
                                    d="M 58 0 L 0 0 0 28"
                                    fill="none"
                                    stroke="#262626"
                                    strokeWidth="0.8"
                                  />
                                </pattern>

                                <filter id="laserBeamGlow" x="-30%" y="-30%" width="160%" height="160%">
                                  <feGaussianBlur stdDeviation="3.5" result="blur" />
                                  <feMerge>
                                    <feMergeNode in="blur" />
                                    <feMergeNode in="SourceGraphic" />
                                  </feMerge>
                                </filter>
                              </defs>

                              {/* Background Grid */}
                              <rect width="580" height="280" fill="url(#gridPattern)" />

                              {/* Zero Axis Line */}
                              <line
                                x1="40"
                                y1="140"
                                x2="560"
                                y2="140"
                                stroke="#404040"
                                strokeWidth="1.5"
                              />

                              {/* Y-Axis Coordinate Labels */}
                              <text x="12" y="35" fill="#737373" fontSize="10">40.00</text>
                              <text x="12" y="88" fill="#737373" fontSize="10">20.00</text>
                              <text x="18" y="143" fill="#737373" fontSize="10">0.00</text>
                              <text x="6" y="195" fill="#737373" fontSize="10">-20.00</text>
                              <text x="6" y="248" fill="#737373" fontSize="10">-40.00</text>

                              {/* X-Axis Coordinate Labels */}
                              <text x="50" y="272" fill="#737373" fontSize="10">0.00</text>
                              <text x="210" y="272" fill="#737373" fontSize="10">50.00</text>
                              <text x="370" y="272" fill="#737373" fontSize="10">100.00</text>
                              <text x="520" y="272" fill="#737373" fontSize="10">150.00</text>

                              {/* Overlaid Profile Curves */}
                              {/* Curve 1: Primary Wheel (Cyan #38bdf8) */}
                              <path
                                d="M 60,260 L 60,80 C 60,60 85,50 100,52 C 115,54 125,75 140,110 C 160,140 220,148 300,150 C 380,152 460,154 480,165 C 495,175 498,210 498,260"
                                fill="none"
                                stroke="#38bdf8"
                                strokeWidth="2.8"
                              />

                              {/* Curve 2: Companion Wheel (Amber #ea580c) */}
                              <path
                                d="M 60,260 L 60,84 C 60,64 85,53 100,55 C 115,57 125,79 140,112 C 160,142 220,150 300,152 C 380,154 460,156 480,168 C 495,178 498,212 498,260"
                                fill="none"
                                stroke="#ea580c"
                                strokeWidth="2"
                                strokeDasharray="4 2"
                              />
                            </svg>
                          </div>

                          {/* Geometry Measurement Points */}
                          <div className={styles.geometryReadouts}>
                            <div className={styles.readoutItem}>
                              <span className={styles.readoutLabel}>Flange Height</span>
                              <span className={styles.readoutVal}>28.4 mm (1.12 in)</span>
                            </div>
                            <div className={styles.readoutItem}>
                              <span className={styles.readoutLabel}>Flange Thickness</span>
                              <span className={styles.readoutVal}>22.1 mm (0.87 in)</span>
                            </div>
                            <div className={styles.readoutItem}>
                              <span className={styles.readoutLabel}>Tread Hollow</span>
                              <span className={styles.readoutVal}>1.2 mm (0.05 in)</span>
                            </div>
                            <div className={styles.readoutItem}>
                              <span className={styles.readoutLabel}>Back-to-Back</span>
                              <span className={styles.readoutVal}>1599.8 mm (62.98 in)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* =========================================================
                      VIEW 4: SETTINGS & OPEN APIS
                      ========================================================= */}
                  {activeModule === "settings" && (
                    <motion.div
                      key="settings"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
                      className={styles.workspaceWrapper}
                    >
                      <div className={styles.subHeaderBar}>
                        <h3 className={styles.moduleTitle}>REST & MQTT Telemetry Gateways</h3>
                      </div>

                      <div className={styles.settingsGrid}>
                        <div className={styles.apiCard}>
                          <h4>Live Webhook Event Payload</h4>
                          <pre className={styles.jsonBox}>
{`{
  "event_id": "EVT-2026-99410",
  "station_code": "SPACELABS-WS-01",
  "site_name": "${selectedSite}",
  "timestamp": "${new Date().toISOString()}",
  "train": {
    "number": "12597",
    "speed_${units === "Imperial" ? "mph" : "kmh"}": ${units === "Imperial" ? 18.0 : 29.0},
    "axle_count": 88
  },
  "triage_verdict": "CRITICAL",
  "alarms": [
    {
      "sensor": "WHEELMAP_LASER",
      "wheel_id": "${selectedWheel}",
      "param": "Flange_Thickness",
      "value": 21.8,
      "severity": "ALERT"
    }
  ]
}`}
                          </pre>
                        </div>

                        <div className={styles.apiCard}>
                          <h4>Station Health Telemetry</h4>
                          <div className={styles.healthTelemetryList}>
                            <div className={styles.healthRow}>
                              <span>Air Purge Pressure</span>
                              <strong className={styles.okText}>7.4 BAR (NOMINAL)</strong>
                            </div>
                            <div className={styles.healthRow}>
                              <span>Laser Optic Transparency</span>
                              <strong className={styles.okText}>99.6% (CLEAN)</strong>
                            </div>
                            <div className={styles.healthRow}>
                              <span>Edge Gateway Latency</span>
                              <strong className={styles.okText}>84 ms</strong>
                            </div>
                            <div className={styles.healthRow}>
                              <span>Wayside Power Reserve</span>
                              <strong className={styles.okText}>230V AC (UPS 4.5h)</strong>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </main>
            </div>
          </div>
        </div>
      </section>

      {/* Connected Wayside Systems Ingestion Section */}
      <section className={styles.connectedSensorsSection}>
        <div className={styles.container}>
          <div className={styles.connectedHeader}>
            <div className={styles.tag}>
              <Layers size={14} className={styles.tagIcon} />
              <span>DATA INGESTION ECOSYSTEM</span>
            </div>
            <h2 className={styles.connectedTitle}>Integrated Wayside Sensor Hardware</h2>
            <p className={styles.connectedSubtitle}>
              DataMAP consolidates telemetry across our complete suite of track-friendly wayside hardware sensors.
            </p>
          </div>

          <div className={styles.sensorsGrid}>
            {CONNECTED_SENSORS.map((s, idx) => (
              <motion.div
                key={s.id}
                className={styles.sensorItemCard}
                initial={{ opacity: 0, y: 28, scale: 0.985 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -1.5, transition: { duration: 0.2 } }}
              >
                <div className={styles.sensorImgFrame}>
                  <img src={s.image} alt={s.title} className={styles.sensorItemImg} />
                  <span className={styles.sensorItemTag}>{s.tag}</span>
                </div>
                <div className={styles.sensorItemBody}>
                  <h3 className={styles.sensorItemTitle}>{s.title}</h3>
                  <p className={styles.sensorItemDesc}>{s.desc}</p>
                  <div className={styles.sensorItemSpecs}>{s.specs}</div>
                  <Link to={s.link} className={styles.sensorItemLink}>
                    <span>View System Specs</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Engineering Consultation CTA */}
      <section className={styles.bottomCtaSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.bottomCtaBox}
            initial={{ opacity: 0, y: 28, scale: 0.985 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.ctaTextCol}>
              <h3 className={styles.ctaHeading}>Deploy DataMAP™ Across Your Rail Network</h3>
              <p className={styles.ctaSubtitle}>
                Schedule a live interactive engineering walkthrough with our software architects. Connect your existing trackside detectors or evaluate with Space Labs wayside sensors.
              </p>
            </div>
            <div className={styles.ctaBtnCol}>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                <Link to="/contact" className={styles.ctaWhiteBtn}>
                  <span>Request Technical Consultation</span>
                  <ArrowRight size={15} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DataMap;
