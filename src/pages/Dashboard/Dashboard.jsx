import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Dashboard.module.css";
import { Briefcase, BriefcaseBusiness, LogOutIcon, User } from "lucide-react";
import FormTable from "./FormComponent/FormTable";
import Jobs from "./JobComponent/Jobs";
// import Home from "./Home";
// import Profile from "./Profile";
// import Settings from "./Settings";

function Dashboard({ setUserExists }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [activeComponent, setActiveComponent] = useState("Applications");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    } else {
      setUser({ name: "John Doe", email: "john@example.com" }); // Dummy user data
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUserExists(false);
    navigate("/");
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case "Applications":
        return <FormTable />;
      case "Jobs":
        return <Jobs />;
      default:
        return "HEllo3";
    }
  };

  return (
    <div className={styles.dashboard}>
      <aside className={styles.sidebar}>
        <h2>Dashboard</h2>
        <ul>
          <li
            className={`${styles.sidebarItem} ${
              activeComponent === "Applications" ? styles.activeItem : ""
            }`}
            onClick={() => setActiveComponent("Applications")}
          >
            <User size={18} /> <span>Applications</span>
          </li>
          <li
            className={`${styles.sidebarItem} ${
              activeComponent === "Jobs" ? styles.activeItem : ""
            }`}
            onClick={() => setActiveComponent("Jobs")}
          >
            <BriefcaseBusiness size={18} />
            <span>Jobs</span>
          </li>
        </ul>
        <button className={styles.logout} onClick={handleLogout}>
          <LogOutIcon /> <span> Logout</span>
        </button>
      </aside>

      <main className={styles.content}>
        <div className={styles.componentContainer}>{renderComponent()}</div>
      </main>
    </div>
  );
}

export default Dashboard;
