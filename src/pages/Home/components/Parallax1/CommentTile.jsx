import React from "react";
import "./CommentTile.css";
import { Quote } from "lucide-react";
import { FaLinkedinIn as Linkedin } from "react-icons/fa6";

const CommentTile = () => {
  return (
    <div className="founder-quote-card">
      <div className="founder-quote-grid">
        {/* Founder Photo & Bio Column */}
        <div className="founder-profile">
          <div className="founder-avatar-wrapper">
            <img
              src="/assets/team/Dhruv_Mohan-Passport.JPG"
              alt="Dhruv Mohan"
              className="founder-avatar"
            />
            <div className="founder-badge">FOUNDER & CEO</div>
          </div>
          <h4 className="founder-name">Dhruv Mohan</h4>
          <p className="founder-title">Chief Executive Officer & Founder</p>
          <a
            href="https://www.linkedin.com/company/space_labs/"
            target="_blank"
            rel="noopener noreferrer"
            className="founder-linkedin"
          >
            <Linkedin size={15} />
            <span>Connect on LinkedIn</span>
          </a>
        </div>

        {/* Quote Content Column */}
        <div className="founder-content">
          <div className="quote-icon-box">
            <Quote size={28} />
          </div>
          <blockquote className="founder-statement">
            "At <strong>SPACE.LABS</strong>, we believe technology is a force
            for transformation, pushing the boundaries of what’s possible to
            create advanced solutions that empower industries and shape the
            future. With precision, integrity, and bold thinking, we innovate
            with purpose—solving tomorrow’s railway challenges today."
          </blockquote>
          <p className="founder-statement-sub">
            "Our commitment to sustainability, security, and scalability ensures
            that every breakthrough leads to a smarter, more connected world.
            Collaboration, curiosity, and excellence drive us, because the
            future isn’t something we wait for—it’s something we build."
          </p>
          <div className="quote-footer">
            <span className="quote-tag">SPACE LABS LEADERSHIP CHARTER</span>
            <span className="quote-status">NEW DELHI • INDIA</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentTile;
