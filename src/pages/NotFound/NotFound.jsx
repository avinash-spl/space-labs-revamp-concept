import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, AlertTriangle } from "lucide-react";

const NotFound = () => {
  return (
    <div
      style={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px 24px",
        backgroundColor: "#06090e",
        textAlign: "center",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          fontFamily: "var(--font-mono, monospace)",
          fontSize: "0.75rem",
          color: "var(--accent-amber, #f59e0b)",
          background: "rgba(245, 158, 11, 0.1)",
          border: "1px solid rgba(245, 158, 11, 0.3)",
          padding: "6px 14px",
          borderRadius: "9999px",
          marginBottom: "20px",
        }}
      >
        <AlertTriangle size={15} />
        <span>404 ERROR • ROUTE NOT FOUND</span>
      </div>

      <h1
        style={{
          fontFamily: "var(--font-display, sans-serif)",
          fontSize: "3.5rem",
          fontWeight: 700,
          color: "#ffffff",
          marginBottom: "12px",
        }}
      >
        Signal Out of Range
      </h1>

      <p
        style={{
          fontSize: "1.05rem",
          color: "var(--text-secondary, #94a3b8)",
          maxWidth: "520px",
          marginBottom: "32px",
          lineHeight: 1.6,
        }}
      >
        The requested track division or route parameter does not exist on this server. Please return to the mission overview.
      </p>

      <Link
        to="/"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "10px",
          fontFamily: "var(--font-mono, monospace)",
          fontSize: "0.85rem",
          fontWeight: 700,
          letterSpacing: "0.08em",
          color: "#ffffff",
          background: "linear-gradient(135deg, #0284c7 0%, #0369a1 100%)",
          border: "1px solid rgba(56, 189, 248, 0.4)",
          padding: "12px 24px",
          borderRadius: "8px",
        }}
      >
        <ArrowLeft size={16} />
        <span>RETURN TO HOMEPAGE</span>
      </Link>
    </div>
  );
};

export default NotFound;
