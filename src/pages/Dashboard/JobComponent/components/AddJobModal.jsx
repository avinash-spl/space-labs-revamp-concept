import React, { useState } from "react";
import {
  Modal,
  Box,
  TextField,
  Button,
  Typography,
  Paper,
} from "@mui/material";
import axios from "axios";
import { toast } from "react-toastify";
import RichTextEditor from "./RichTextEditor";

const AddJobModal = ({ closeModal, fetchJobs }) => {
  const [formData, setFormData] = useState({
    title: "",
    experience: "",
    description: "",
    responsibilities: "",
    eligibility: "",
    preferredQualifications: "",
    whatWeOffer: "",
    jobType: "",
    location: "",
    deadline: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const addJob = async () => {
    try {
      // Convert deadline from YYYY-MM-DD to ISO 8601 format (end of day)
      const jobData = { ...formData };
      if (jobData.deadline) {
        // Convert YYYY-MM-DD to ISO 8601 with time set to end of day (23:59:59)
        const deadlineDate = new Date(jobData.deadline);
        deadlineDate.setHours(23, 59, 59, 999);
        jobData.deadline = deadlineDate.toISOString();
      } else {
        jobData.deadline = null;
      }

      await axios.post(
        "https://spacelabs-backend.vercel.app/api/jobs",
        jobData
      );

      fetchJobs();
      closeModal();
      toast.success("Job added Successfully !");
    } catch (error) {
      toast.error("Error adding job !");
      console.error("Error adding job:", error);
    }
  };

  return (
    <Modal open onClose={closeModal} aria-labelledby="add-job-modal">
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 500,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
          maxHeight: "90vh",
          overflowY: "auto",
          color: "black",
        }}
      >
        <Typography variant="h6" gutterBottom>
          Add New Job
        </Typography>

        <Box display="flex" flexDirection="column" gap={2}>
          <TextField
            label="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            fullWidth
            variant="outlined"
          />
          <TextField
            label="Experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            fullWidth
            variant="outlined"
          />
          <Box>
            <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
              Description
            </Typography>
            <RichTextEditor
              value={formData.description}
              onChange={handleChange}
              name="description"
            />
          </Box>
          <Box>
            <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
              Responsibilities
            </Typography>
            <RichTextEditor
              value={formData.responsibilities}
              onChange={handleChange}
              name="responsibilities"
            />
          </Box>
          <Box>
            <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
              Eligibility
            </Typography>
            <RichTextEditor
              value={formData.eligibility}
              onChange={handleChange}
              name="eligibility"
            />
          </Box>
          <Box>
            <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
              Preferred Qualifications
            </Typography>
            <RichTextEditor
              value={formData.preferredQualifications}
              onChange={handleChange}
              name="preferredQualifications"
            />
          </Box>
          <Box>
            <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
              What We Offer
            </Typography>
            <RichTextEditor
              value={formData.whatWeOffer}
              onChange={handleChange}
              name="whatWeOffer"
            />
          </Box>
          <TextField
            label="Job Type"
            name="jobType"
            value={formData.jobType}
            onChange={handleChange}
            fullWidth
            variant="outlined"
          />
          <TextField
            label="Location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            fullWidth
            variant="outlined"
          />
          <Box sx={{ position: "relative" }}>
            <TextField
              label="Application Deadline"
              name="deadline"
              type="date"
              value={formData.deadline}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                min: new Date().toISOString().split("T")[0],
                style: {
                  cursor: "pointer",
                  fontSize: "16px",
                  padding: "14px 40px 14px 14px",
                },
              }}
              sx={{
                "& input[type='date']::-webkit-calendar-picker-indicator": {
                  cursor: "pointer",
                  opacity: 1,
                  width: "24px",
                  height: "24px",
                  marginRight: "8px",
                  filter: "invert(0.5)",
                },
                "& input[type='date']": {
                  cursor: "pointer",
                },
              }}
            />
          </Box>
          <Box display="flex" justifyContent="space-between" mt={2}>
            <Button
              variant="contained"
              color="primary"
              onClick={addJob}
              sx={{
                background: "black",
                color: "white",
                "&:hover": {
                  backgroundColor: "black",
                  boxShadow: "0px 0px 0px 1px white",
                  color: "white",
                },
              }}
            >
              Add Job
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={closeModal}
              sx={{
                background: "black",
                color: "white",
                "&:hover": {
                  backgroundColor: "black",
                  boxShadow: "0px 0px 0px 1px white",
                  color: "white",
                },
              }}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default AddJobModal;
