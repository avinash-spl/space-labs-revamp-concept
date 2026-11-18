import React, { useState } from "react";
import * as pdfjsLib from "pdfjs-dist/webpack";
import styles from "./PDFResumeExtractor.module.css";
import { FaUpload } from "react-icons/fa6";

// Set up the PDF.js worker
pdfjsLib.GlobalWorkerOptions.workerSrc =
  "//cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js";

const PDFResumeExtractor = ({ formData, setFormData, job }) => {
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
      handleExtract(selectedFile);
      setError("");
    } else {
      setFile(null);
      setError("Please select a valid PDF file");
    }
  };

  const extractTextFromPDF = async (pdfFile) => {
    try {
      setIsLoading(true);
      const arrayBuffer = await pdfFile.arrayBuffer();
      const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;

      let fullText = "";

      // Extract text from each page
      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const textContent = await page.getTextContent();
        const textItems = textContent.items.map((item) => item.str).join(" ");
        fullText += textItems + "\n";
      }

      parseResumeData(fullText);
      setIsLoading(false);
      return fullText;
    } catch (err) {
      setError("Error extracting text from PDF: " + err.message);
      setIsLoading(false);
    }
  };

  const parseResumeData = (text) => {
    // Basic parsing logic for resume sections
    const data = {
      name: "",
      email: "",
      phone: "",
      education: [],
      experience: [],
      skills: [],
    };

    // Extract email using regex
    const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
    const emailMatches = text.match(emailRegex);
    if (emailMatches && emailMatches.length > 0) {
      data.email = emailMatches[0];
    }

    // Extract phone number
    const phoneRegex = /\b(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}\b/g;
    const phoneMatches = text.match(phoneRegex);
    if (phoneMatches && phoneMatches.length > 0) {
      data.phone = phoneMatches[0];
    }

    // Try to extract name (assuming it's at the beginning)
    const lines = text.split("\n").filter((line) => line.trim() !== "");
    if (lines.length > 0) {
      // Extract only first two words for name
      const nameWords = lines[0].trim().split(/\s+/);
      if (nameWords.length >= 2) {
        data.name = `${nameWords[0]} ${nameWords[1]}`;
      } else if (nameWords.length === 1) {
        data.name = nameWords[0];
      }
    }

    // Extract education (simple approach)
    if (text.includes("Education") || text.includes("EDUCATION")) {
      const educationSection = extractSection(text, "Education", [
        "Experience",
        "Skills",
        "Projects",
      ]);
      const eduEntries = educationSection
        .split("\n\n")
        .filter((entry) => entry.length > 10);
      data.education = eduEntries.map((entry) => entry.trim());

      // Try to extract degree and university
      let highestDegree = "";
      let university = "";
      let fieldOfStudy = "";

      if (eduEntries.length > 0) {
        const firstEdu = eduEntries[0];

        // Simple extraction logic for degree
        const degreeKeywords = [
          "Bachelor",
          "Master",
          "PhD",
          "Doctorate",
          "BSc",
          "MSc",
          "BA",
          "MA",
          "B.Tech",
          "M.Tech",
          "BCA",
          "MCA",
          "12th",
          "10th",
        ];
        for (const keyword of degreeKeywords) {
          if (firstEdu.includes(keyword)) {
            highestDegree = keyword;

            // Try to extract field of study
            const afterDegree = firstEdu.split(keyword)[1];
            if (afterDegree) {
              const fieldMatch = afterDegree.match(/in\s([^,.]+)/i);
              if (fieldMatch && fieldMatch[1]) {
                fieldOfStudy = fieldMatch[1].trim();
              }
            }
            break;
          }
        }

        // Simple extraction for university
        const uniKeywords = ["University", "College", "Institute", "School"];
        for (const keyword of uniKeywords) {
          if (firstEdu.includes(keyword)) {
            const uniMatch = firstEdu.match(
              new RegExp(`[\\w\\s]+${keyword}[\\w\\s]+`, "i")
            );
            if (uniMatch) {
              university = uniMatch[0].trim();
            }
            break;
          }
        }
      }

      // Update form data with education details
      if (highestDegree) {
        setFormData((prev) => ({
          ...prev,
          highestDegree,
        }));
      }

      if (university) {
        setFormData((prev) => ({
          ...prev,
          university,
        }));
      }

      if (fieldOfStudy) {
        setFormData((prev) => ({
          ...prev,
          fieldOfStudy,
        }));
      }
    }

    // Extract experience
    if (text.includes("Experience") || text.includes("EXPERIENCE")) {
      const expSection = extractSection(text, "Experience", [
        "Education",
        "Skills",
        "Projects",
      ]);
      const expEntries = expSection
        .split("\n\n")
        .filter((entry) => entry.length > 10);
      data.experience = expEntries.map((entry) => entry.trim());

      // Try to extract current job title and company
      let currentJobTitle = "";
      let companyName = "";
      let yearsOfExperience = "";

      if (expEntries.length > 0) {
        const firstExp = expEntries[0];
        const lines = firstExp.split("\n");

        if (lines.length >= 2) {
          // Assume first line might contain job title
          currentJobTitle = lines[0].replace(/\d+/g, "").trim();

          // Look for company name in second line
          const companyLine = lines.find(
            (line) =>
              !line.match(/^\d{4}/) &&
              !line.includes("Present") &&
              !line.includes("responsibilities")
          );

          if (companyLine) {
            companyName = companyLine.trim();
          }

          // Try to extract years of experience
          const yearsMatch = expSection.match(/(\d+)\+?\s*years?/i);
          if (yearsMatch) {
            yearsOfExperience = yearsMatch[1];
          } else {
            // Calculate based on dates
            const dateRanges = expSection.match(
              /\d{4}\s*-\s*\d{4}|\d{4}\s*-\s*Present/gi
            );
            if (dateRanges) {
              let totalYears = 0;
              for (const range of dateRanges) {
                const years = range.split(/\s*-\s*/);
                const startYear = parseInt(years[0]);
                const endYear = years[1].includes("Present")
                  ? new Date().getFullYear()
                  : parseInt(years[1]);
                totalYears += endYear - startYear;
              }
              yearsOfExperience = String(totalYears);
            }
          }
        }
      }

      // Update form data with experience details
      if (currentJobTitle) {
        setFormData((prev) => ({
          ...prev,
          currentJobTitle,
        }));
      }

      if (companyName) {
        setFormData((prev) => ({
          ...prev,
          companyName,
        }));
      }

      if (yearsOfExperience) {
        setFormData((prev) => ({
          ...prev,
          yearsOfExperience,
        }));
      }
    }

    // Extract skills
    if (text.includes("Skills") || text.includes("SKILLS")) {
      const skillsSection = extractSection(text, "Skills", [
        "Education",
        "Experience",
        "Projects",
      ]);
      // Split by common delimiters
      let skills = skillsSection
        .split(/[,•|\n-]+/)
        .map((skill) => skill.trim());
      skills = skills.filter((skill) => skill.length > 0 && skill.length < 30);
      data.skills = skills;

      // Update form data with skills
      if (skills.length > 0) {
        setFormData((prev) => ({
          ...prev,
          skills: skills.join(", "),
        }));
      }
    }

    // Extract LinkedIn URL
    const linkedInRegex = /linkedin\.com\/in\/[a-zA-Z0-9_-]+/i;
    const linkedInMatch = text.match(linkedInRegex);
    if (linkedInMatch) {
      setFormData((prev) => ({
        ...prev,
        linkedIn: `https://www.${linkedInMatch[0]}`,
      }));
    }

    // Extract portfolio URL
    const portfolioRegex =
      /(https?:\/\/(?:www\.)?)[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+(?!linkedin\.com)/i;
    const portfolioMatch = text.match(portfolioRegex);
    if (portfolioMatch) {
      setFormData((prev) => ({
        ...prev,
        portfolio: portfolioMatch[0],
      }));
    }

    // Update form data with basic extracted info
    if (data.name) {
      setFormData((prev) => ({
        ...prev,
        fullName: data.name,
      }));
    }

    if (data.email) {
      setFormData((prev) => ({
        ...prev,
        email: data.email,
      }));
    }

    if (data.phone) {
      setFormData((prev) => ({
        ...prev,
        phone: data.phone,
      }));
    }
  };

  // Helper function to extract sections
  const extractSection = (text, sectionName, otherSections) => {
    // Look for section with case insensitivity
    const sectionRegex = new RegExp(
      `\\b${sectionName}\\b|\\b${sectionName.toUpperCase()}\\b`,
      "i"
    );
    const sectionMatch = text.split(sectionRegex);

    if (sectionMatch.length < 2) return "";

    let sectionContent = sectionMatch[1];

    // Find where the next section starts
    for (const nextSection of otherSections) {
      const nextSectionRegex = new RegExp(
        `\\b${nextSection}\\b|\\b${nextSection.toUpperCase()}\\b`,
        "i"
      );
      const nextSectionMatch = sectionContent.split(nextSectionRegex);
      if (nextSectionMatch.length > 1) {
        sectionContent = nextSectionMatch[0];
      }
    }

    return sectionContent.trim();
  };

  const handleExtract = async (selectedFile) => {
    if (!selectedFile) {
      setError("Please select a PDF file first");
      return;
    }
    setIsLoading(true);
    const minDelay = 4000;
    const maxDelay = 10000;
    const randomDelay =
      Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;
    setTimeout(async () => {
      await extractTextFromPDF(selectedFile);
    }, randomDelay);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.uploadSection}>
          <label className={styles.fileInputLabel} htmlFor="fileUpload">
            <FaUpload className={styles.uploadIcon} /> Upload Resume (PDF)
          </label>
          <input
            type="file"
            id="fileUpload"
            accept=".pdf"
            onChange={handleFileChange}
            className={styles.fileInput}
          />
          {error && <p className={styles.error}>{error}</p>}
          {file && <p className={styles.fileName}>{file.name}</p>}
          {isLoading && <img src="/assets/loading.svg" alt="Loading" />}
        </div>
      </div>
    </>
  );
};

export default PDFResumeExtractor;
