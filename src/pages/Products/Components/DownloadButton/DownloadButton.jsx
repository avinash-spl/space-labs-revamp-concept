import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, X } from "lucide-react";
import "./DownloadModal.css";

const DownloadButton = ({ src }) => {
  const [open, setOpen] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const shouldDownload = localStorage.getItem("allowDownload");
    if (shouldDownload) {
      window.open(src, "_blank");
      return;
    } else {
      setOpen(true);
    }
  };

  return (
    <>
      <button onClick={handleSubmit} className="brochureButton">
        Download Brochure <Download size={18} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="modal-content"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <button className="close-btn" onClick={() => setOpen(false)}>
                <X size={22} />
              </button>
              <h2>Fill in your details</h2>
              <form
                ref={formRef}
                action="https://formsubmit.co/contact@space-labs.in"
                method="POST"
                className="modal-form"
                target="_blank"
                onSubmit={() => {
                  localStorage.setItem("allowDownload", "true");
                  setOpen(false);
                }}
              >
                <input name="name" placeholder="Name" required />
                <input name="company" placeholder="Company" required />
                <input name="email" type="email" placeholder="Email" required />
                <input name="phone" type="tel" placeholder="Phone" required />
                <input
                  type="hidden"
                  name="_next"
                  value={window.location.href}
                />
                <button type="submit">Submit & Download</button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default DownloadButton;
