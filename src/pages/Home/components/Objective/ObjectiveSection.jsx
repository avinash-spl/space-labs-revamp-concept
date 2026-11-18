import React from "react";
import style from "./ObjectiveSection.module.css";
import Cards from "./Cards";
import { ShieldCheck, Compass } from "lucide-react";

const ObjectiveSection = () => {
  return (
    <section id="capabilities" className={style.container}>
      <div className={style.innerContainer}>
        {/* Section Heading */}
        <div className={style.headerBox}>
          <div className={style.tag}>
            <ShieldCheck size={14} className={style.tagIcon} />
            <span>FOUNDATIONAL PRINCIPLES</span>
          </div>
          <h2 className={style.title}>Engineered for Extreme Railway Demands</h2>
          <p className={style.subtitle}>
            Our core operating values ensure zero-compromise precision, rugged hardware reliability, and sustainable growth.
          </p>
        </div>

        {/* Cards */}
        <Cards />
      </div>
    </section>
  );
};

export default ObjectiveSection;
