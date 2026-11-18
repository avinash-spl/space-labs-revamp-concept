import React from "react";
import styles from "./OurTeam.module.css";
import { Users, ShieldCheck, Cpu, Briefcase } from "lucide-react";
import { FaLinkedinIn as Linkedin } from "react-icons/fa6";

const TEAM_MEMBERS = [
  {
    name: "Dhruv Mohan",
    designation: "CEO & Founder",
    department: "Executive Leadership & Rail Engineering",
    imgURL: "/assets/team/Dhruv_Mohan.JPG",
    linkedin: "https://www.linkedin.com/company/space_labs/",
    bio: "Pioneering autonomous vision systems, laser measurement, and predictive compliance architectures for Indian & international railways.",
  },
  {
    name: "Isha Gupta",
    designation: "Chief AI Officer",
    department: "AI Research & Computer Vision",
    imgURL: "/assets/team/Isha_Gupta.JPG",
    linkedin: "https://www.linkedin.com/company/space_labs/",
    bio: "Directing deep learning models, optical defect classification, and real-time inference on edge computing devices for trackside systems.",
  },
  {
    name: "Anil Kumar",
    designation: "Director of Operations",
    department: "Field Deployment & Rail Systems",
    imgURL: "/assets/team/Anil_Kumar.JPG",
    linkedin: "https://www.linkedin.com/company/space_labs/",
    bio: "Overseeing ruggedized hardware installations, field operations, workshop deployments, and client relations with rail operators.",
  },
];

const OurTeam = () => {
  return (
    <section id="team" className={styles.sectionWrapper}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.headerBox}>
          <div className={styles.tag}>
            <Users size={14} className={styles.tagIcon} />
            <span>LEADERSHIP & TALENT</span>
          </div>
          <h2 className={styles.title}>The Minds Behind Space Labs</h2>
          <p className={styles.subtitle}>
            A specialized collective of railway engineers, AI researchers, 3D
            simulation experts, and laser optics specialists.
          </p>
        </div>

        {/* Team Grid */}
        <div className={styles.grid}>
          {TEAM_MEMBERS.map((member, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imageBox}>
                <img
                  src={member.imgURL}
                  alt={member.name}
                  className={styles.avatar}
                />
                <div className={styles.roleBadge}>{member.designation}</div>
              </div>

              <div className={styles.content}>
                <h3 className={styles.name}>{member.name}</h3>
                <span className={styles.department}>{member.department}</span>
                <p className={styles.bio}>{member.bio}</p>

                <div className={styles.cardFooter}>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.linkedinLink}
                  >
                    <Linkedin size={15} />
                    <span>LinkedIn Profile</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
