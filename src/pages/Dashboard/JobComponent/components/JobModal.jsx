import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  IconButton,
  Grid,
  Typography,
  Box,
} from "@mui/material";
import { FaTrash } from "react-icons/fa6";
import axios from "axios";
import { Trash, Trash2 } from "lucide-react";
import { toast } from "react-toastify";
import RichTextEditor from "./RichTextEditor";
import styles from "../styles/JobModal.module.css";

const JobModal = ({ job, closeModal, fetchJobs }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedJob, setUpdatedJob] = useState({ ...job });

  useEffect(() => {
    setUpdatedJob({ ...job });
  }, [job]);

  const handleChange = (e) => {
    setUpdatedJob({ ...updatedJob, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      // Convert deadline from YYYY-MM-DD to ISO 8601 format (end of day)
      const jobData = { ...updatedJob };
      if (jobData.deadline) {
        // Convert YYYY-MM-DD to ISO 8601 with time set to end of day (23:59:59)
        const deadlineDate = new Date(jobData.deadline);
        deadlineDate.setHours(23, 59, 59, 999);
        jobData.deadline = deadlineDate.toISOString();
      } else {
        jobData.deadline = null;
      }

      await axios.put(
        `https://spacelabs-backend.vercel.app/api/jobs/${job._id}`,
        jobData
      );
      fetchJobs();
      setIsEditing(false);
      closeModal();
      toast.success("Updated Successfully !");
    } catch (error) {
      console.error("Error updating job:", error);
      toast.error("Error updating job !");
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(
        `https://spacelabs-backend.vercel.app/api/jobs/${job._id}`
      );
      fetchJobs();
      closeModal();
      toast.success("Deleted Successfully !");
    } catch (error) {
      console.error("Error deleting job:", error);
      toast.error("Error deleting job !");
    }
  };

  return (
    <Dialog open onClose={closeModal} maxWidth="md" fullWidth>
      <DialogTitle
        sx={{
          fontWeight: "bold",
          color: "black",
        }}
      >
        {isEditing ? (
          <TextField
            name="title"
            value={updatedJob.title}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            label="Job Title"
          />
        ) : (
          job.title
        )}
      </DialogTitle>

      <DialogContent
        dividers
        sx={{
          padding: "20px",
          borderTop: "2px solid white",

          borderBottom: "2px solid white",
        }}
      >
        <Typography
          variant="subtitle1"
          gutterBottom
          sx={{ fontWeight: "bold" }}
        >
          {isEditing ? "" : "Experience: "}
        </Typography>
        {isEditing ? (
          <TextField
            name="experience"
            value={updatedJob.experience}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            label="Experience"
          />
        ) : (
          <Typography>{job.experience}</Typography>
        )}

        <Grid container spacing={2} sx={{ mt: 2 }}>
          {["description", "responsibilities", "eligibility", "preferredQualifications", "whatWeOffer"].map((field) => (
            <Grid item xs={12} key={field}>
              {isEditing ? (
                <Box>
                  <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
                    {field
                      .replace(/([A-Z])/g, " $1")
                      .split(" ")
                      .map(
                        (word) =>
                          word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                      )
                      .join(" ")}
                  </Typography>
                  <RichTextEditor
                    value={updatedJob[field] || ""}
                    onChange={handleChange}
                    name={field}
                    disabled={!isEditing}
                  />
                </Box>
              ) : (
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
                    {field
                      .replace(/([A-Z])/g, " $1")
                      .split(" ")
                      .map(
                        (word) =>
                          word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                      )
                      .join(" ")}
                    :
                  </Typography>
                  <div
                    className={styles.richTextContent}
                    dangerouslySetInnerHTML={{ __html: job[field] || "" }}
                  />
                </Box>
              )}
            </Grid>
          ))}
          {["jobType", "location"].map((field) => (
            <Grid item xs={12} key={field}>
              <TextField
                name={field}
                value={updatedJob[field] || ""}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                label={field
                  .replace(/([A-Z])/g, " $1")
                  .split(" ")
                  .map(
                    (word) =>
                      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                  )
                  .join(" ")}
                disabled={!isEditing}
              />
            </Grid>
          ))}
          <Grid item xs={12}>
            {isEditing ? (
              <Box sx={{ position: "relative" }}>
                <TextField
                  name="deadline"
                  type="date"
                  value={
                    updatedJob.deadline
                      ? typeof updatedJob.deadline === "string"
                        ? updatedJob.deadline.split("T")[0]
                        : new Date(updatedJob.deadline).toISOString().split("T")[0]
                      : ""
                  }
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                  label="Application Deadline"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
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
            ) : (
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
                  Application Deadline:
                </Typography>
                <Typography>
                  {job.deadline
                    ? new Date(job.deadline).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })
                    : "N/A"}
                </Typography>
              </Box>
            )}
          </Grid>
        </Grid>
      </DialogContent>

      <DialogActions>
        {isEditing ? (
          <Button
            onClick={handleUpdate}
            variant="contained"
            color="primary"
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
            Save
          </Button>
        ) : (
          <Button
            onClick={() => setIsEditing(true)}
            variant="outlined"
            color="primary"
            sx={{
              background: "black",
              color: "white",
              "&:hover": {
                backgroundColor: "#ffffff22",
                boxShadow: "0px 0px 0px 1px black",
                color: "black",
              },
            }}
          >
            Update
          </Button>
        )}

        <IconButton color="error" onClick={handleDelete}>
          <Trash2 />
        </IconButton>

        <Button
          onClick={closeModal}
          color="secondary"
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
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default JobModal;
