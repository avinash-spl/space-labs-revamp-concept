import React, { useState } from "react";
import styles from "./ContactForm.module.css";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  ShieldCheck,
  Cpu,
  Clock,
  CheckCircle2,
  FileText
} from "lucide-react";

const INQUIRY_TYPES = [
  "Automatic Wheel Profile System (AWPMS)",
  "Hot Axle Box Detection (HABD)",
  "Machine Vision Inspection (MVIS)",
  "Coach Condition Monitoring (CCM)",
  "Aerial Railway Inspection",
  "Custom Railway R&D Project",
  "General Partnership / Inquiry",
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    inquiryType: INQUIRY_TYPES[0],
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        {/* Page Header */}
        <div className={styles.headerBox}>
          <div className={styles.tag}>
            <Mail size={14} className={styles.tagIcon} />
            <span>ENGINEERING CONSULTATION & RFQ</span>
          </div>
          <h1 className={styles.title}>Partner With Space Labs</h1>
          <p className={styles.subtitle}>
            Inquire about system specifications, request custom field demonstrations, or schedule an engineering consultation with our railway experts.
          </p>
        </div>

        <div className={styles.contentGrid}>
          {/* Left Column: Contact Info & Reliability Metrics */}
          <div className={styles.infoColumn}>
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>Direct Contact Channels</h3>

              <div className={styles.infoItem}>
                <div className={styles.infoIconBox}>
                  <Mail size={18} />
                </div>
                <div>
                  <div className={styles.infoLabel}>OFFICIAL EMAIL</div>
                  <a href="mailto:contact@space-labs.in" className={styles.infoValue}>
                    contact@space-labs.in
                  </a>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.infoIconBox}>
                  <Phone size={18} />
                </div>
                <div>
                  <div className={styles.infoLabel}>DIRECT TELEPHONE</div>
                  <a href="tel:+919811877945" className={styles.infoValue}>
                    +91 98118 77945
                  </a>
                  <div className={styles.infoSubValue}>
                    +91 (0) 120-2341065 / 66
                  </div>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.infoIconBox}>
                  <MapPin size={18} />
                </div>
                <div>
                  <div className={styles.infoLabel}>STUDIO HEADQUARTERS</div>
                  <div className={styles.infoAddress}>
                    Spatially Collaborative Engineering Pvt. Ltd.<br />
                    Delhi NCR / Greater Noida, Uttar Pradesh, India
                  </div>
                </div>
              </div>

              <div className={styles.divider}></div>

              <div className={styles.slaBadge}>
                <Clock size={16} className={styles.slaIcon} />
                <span>TECHNICAL TEAM REPLIES WITHIN 24 BUSINESS HOURS</span>
              </div>
            </div>

            {/* Compliance Guarantee Card */}
            <div className={styles.complianceCard}>
              <div className={styles.complianceHeader}>
                <ShieldCheck size={20} className={styles.complianceIcon} />
                <h4>Enterprise Railway Assurance</h4>
              </div>
              <ul className={styles.assuranceList}>
                <li>
                  <CheckCircle2 size={15} />
                  <span>Sub-millimeter 300μm calibration accuracy</span>
                </li>
                <li>
                  <CheckCircle2 size={15} />
                  <span>IP68 trackside ruggedized enclosure certification</span>
                </li>
                <li>
                  <CheckCircle2 size={15} />
                  <span>Customizable integration with railway IT networks</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Modern RFQ Form */}
          <div className={styles.formColumn}>
            <div className={styles.formCard}>
              <h3 className={styles.formHeaderTitle}>Request for Quotation / Demo</h3>
              <p className={styles.formHeaderDesc}>
                Fill out the technical requirements below and our systems engineering team will prepare a customized technical proposal.
              </p>

              <form
                action="https://formsubmit.co/contact@space-labs.in"
                method="POST"
                className={styles.form}
              >
                {/* FormSubmit Configuration */}
                <input type="hidden" name="_subject" value="New Engineering RFQ / Consultation Request - Space Labs" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />

                <div className={styles.formGrid}>
                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="name">
                      Full Name *
                    </label>
                    <input
                      className={styles.input}
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Vikram Sharma"
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="email">
                      Corporate / Work Email *
                    </label>
                    <input
                      className={styles.input}
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@rail-operator.com"
                      required
                    />
                  </div>
                </div>

                <div className={styles.formGrid}>
                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="phone">
                      Phone / Mobile Number *
                    </label>
                    <input
                      className={styles.input}
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="organization">
                      Organization / Railway Division
                    </label>
                    <input
                      className={styles.input}
                      id="organization"
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      placeholder="e.g. Northern Railway / DMRC"
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="inquiryType">
                    Target Railway System / Requirement *
                  </label>
                  <select
                    className={styles.select}
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                  >
                    {INQUIRY_TYPES.map((type, i) => (
                      <option key={i} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="message">
                    Project Scope & Technical Details *
                  </label>
                  <textarea
                    className={styles.textarea}
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Briefly describe your track location, operating speeds, fleet types, or desired system specs..."
                    required
                  />
                </div>

                <button type="submit" className={styles.submitBtn}>
                  <span>SUBMIT ENGINEERING INQUIRY</span>
                  <Send size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
