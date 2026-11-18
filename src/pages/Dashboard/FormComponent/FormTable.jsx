import React, { useEffect, useState } from "react";
import axios from "axios";
import "./FormTable.css";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Grid,
  Modal,
  Box,
  Tabs,
  Tab,
  IconButton,
} from "@mui/material";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import {
  Mail,
  Phone,
  LinkedIn,
  Work,
  Delete,
  ExpandMore,
} from "@mui/icons-material";
import { color } from "framer-motion";
import { Ampersand, Drill, GraduationCap } from "lucide-react";
import { useTheme } from "@mui/material/styles";
import { toast } from "react-toastify";

const FormTable = () => {
  const [formData, setFormData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [tabIndex, setTabIndex] = useState(0);
  const theme = useTheme();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://spacelabs-backend.vercel.app/api/forms"
      );
      setFormData(response.data);
    } catch (error) {
      toast.error("rror fetching data !");
      console.error("Error fetching data", error);
    }
    setLoading(false);
  };

  const deleteFormEntry = async (id) => {
    try {
      await axios.delete(
        `https://spacelabs-backend.vercel.app/api/forms/${id}`
      );
      setFormData(formData.filter((entry) => entry._id !== id));
      toast.success("Deleted Successfully !");
    } catch (error) {
      toast.error("Error fetching data !");
      console.error("Error deleting entry", error);
    }
  };

  const handleOpenModal = (entry) => {
    setSelectedEntry(entry);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedEntry(null);
    setTabIndex(0);
  };

  return (
    <Box
      sx={{
        padding: "20px",
        maxHeight: "90vh",
        height: "90vh",
        overflow: "scroll",
        [theme.breakpoints.up("sm")]: {
          overflow: "auto",
        },
      }}
    >
      <Typography
        variant="h4"
        sx={{ marginBottom: "20px", fontWeight: "bold", textAlign: "left" }}
      >
        All Applications
      </Typography>

      {loading ? (
        <Typography variant="h6" align="center">
          Loading...
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {formData.map((entry) => (
            <Grid item xs={12} sm={6} md={4} key={entry._id}>
              <Card
                sx={{
                  padding: "20px",
                  borderRadius: "10px",
                  boxShadow: 3,
                  paddingTop: "0px",
                }}
              >
                <CardContent>
                  <div
                    style={{
                      display: "flex",
                      padding: "5px 2px",
                      justifyContent: "space-between",
                      fontSize: "12px",
                      alignItems: "center",
                    }}
                  >
                    <p
                      style={{
                        fontWeight: "bold",
                      }}
                    >
                      For: {entry.jobName}
                    </p>
                    <p
                      style={{
                        fontWeight: "bold",
                        textWrap: "nowrap",
                      }}
                    >
                      Job_id: {String(entry.jobId).substring(17)}
                    </p>
                  </div>

                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    {entry.fullName}
                    {entry.resumeUrl && (
                      <a href={entry.resumeUrl} target="_blank">
                        <ContactPageIcon
                          fontSize="20px"
                          sx={{ color: "black" }}
                        />
                      </a>
                    )}
                  </Typography>

                  {/* Personal Details */}
                  <Box sx={{ marginTop: "10px" }}>
                    <Typography
                      variant="subtitle1"
                      fontWeight="bold"
                      sx={{
                        textAlign: "left",
                        borderBottom: "2px solid black",
                        padding: "0px",
                        marginBottom: "5px",
                      }}
                    >
                      Personal Details:
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      <Mail fontSize="small" sx={{ marginRight: "5px" }} />{" "}
                      {entry.email}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      <Phone fontSize="small" sx={{ marginRight: "5px" }} />{" "}
                      {entry.phone}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      <LinkedIn fontSize="small" sx={{ marginRight: "5px" }} />{" "}
                      <a
                        href={entry.linkedIn}
                        target="_blank"
                        style={{ color: "black" }}
                      >
                        View
                      </a>
                    </Typography>
                  </Box>

                  {/* Experience */}
                  <Box sx={{ marginTop: "10px" }}>
                    <Typography
                      variant="subtitle1"
                      fontWeight="bold"
                      sx={{
                        textAlign: "left",
                        borderBottom: "2px solid black",
                        padding: "0px",
                        marginBottom: "5px",
                      }}
                    >
                      Experience:
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        textAlign: "left",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Work fontSize="small" sx={{ marginRight: "5px" }} />
                      {entry.currentJobTitle} at {entry.companyName}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        textAlign: "left",
                      }}
                    >
                      <span style={{ fontWeight: "bold" }}>
                        Total Experience:
                      </span>{" "}
                      {entry.yearsOfExperience} years
                    </Typography>
                  </Box>
                </CardContent>

                <CardActions
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleOpenModal(entry)}
                    endIcon={<ExpandMore />}
                    sx={{
                      background: "black",
                      "&:hover": {
                        // Hover state

                        backgroundColor: "#2b2b2bdd",
                        color: "white",
                      },
                    }}
                  >
                    View More
                  </Button>
                  <IconButton
                    color="error"
                    onClick={() => deleteFormEntry(entry._id)}
                    aria-label="delete"
                  >
                    <Delete />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      {/* Modal for Additional Details */}
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "90%",
            maxWidth: "400px",
            minHeight: "400px",
            bgcolor: "background.paper",
            boxShadow: 24,
            borderRadius: "10px",
            padding: "20px",
            backgroundColor: "white",
          }}
        >
          {selectedEntry && (
            <div>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  marginBottom: "10px",
                  color: "black",
                }}
              >
                Details
              </Typography>

              <Tabs
                value={tabIndex}
                onChange={(e, newIndex) => setTabIndex(newIndex)}
                centered
              >
                <Tab
                  label={<GraduationCap />}
                  sx={{
                    border: "none",
                    "&:hover": { backgroundColor: "#00000022" },
                  }}
                />
                <Tab
                  label={<Drill />}
                  sx={{
                    border: "none",
                    "&:hover": { backgroundColor: "#00000022" },
                  }}
                />
                <Tab
                  label={<Ampersand />}
                  sx={{
                    border: "none",
                    "&:hover": { backgroundColor: "#00000022" },
                  }}
                />
              </Tabs>

              <Box sx={{ minHeight: "280px", padding: "20px", color: "black" }}>
                {/* Education */}
                {tabIndex === 0 && (
                  <Box>
                    <h2
                      style={{
                        color: "black",
                        borderBottom: "2px solid black",
                      }}
                    >
                      Education
                    </h2>
                    <Typography
                      variant="body1"
                      sx={{ display: "flex", flexDirection: "column" }}
                    >
                      <strong>Degree:</strong> {selectedEntry.highestDegree}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ display: "flex", flexDirection: "column" }}
                    >
                      <strong>Filed of Study:</strong>{" "}
                      {selectedEntry.fieldOfStudy}
                    </Typography>
                  </Box>
                )}

                {/* Skills */}
                {tabIndex === 1 && (
                  <Box>
                    <h2
                      style={{
                        color: "black",
                        borderBottom: "2px solid black",
                      }}
                    >
                      Skills
                    </h2>
                    <Typography
                      variant="body1"
                      sx={{ display: "flex", flexDirection: "column" }}
                    >
                      {selectedEntry.skills}
                    </Typography>
                  </Box>
                )}

                {/* Additional Info */}
                {tabIndex === 2 && (
                  <Box>
                    <h2
                      style={{
                        color: "black",
                        borderBottom: "2px solid black",
                      }}
                    >
                      Additional Info.
                    </h2>
                    <Typography
                      variant="body1"
                      sx={{ display: "flex", flexDirection: "column" }}
                    >
                      <strong>Start Date:</strong> {selectedEntry.startDate}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ display: "flex", flexDirection: "column" }}
                    >
                      <strong>Notice Period:</strong>{" "}
                      {selectedEntry.noticePeriod}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ display: "flex", flexDirection: "column" }}
                    >
                      <strong>Salary Expectations:</strong>{" "}
                      {selectedEntry.salaryExpectations}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ display: "flex", flexDirection: "column" }}
                    >
                      <strong>Referral Source:</strong>{" "}
                      {selectedEntry.referralSource}
                    </Typography>
                  </Box>
                )}
              </Box>

              <Button
                variant="contained"
                color="secondary"
                fullWidth
                onClick={handleCloseModal}
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
            </div>
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default FormTable;
