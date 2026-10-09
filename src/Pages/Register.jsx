import React from "react";
import Header from "../Components/Header/Header";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  MenuItem,
  Button,
} from "@mui/material";

const courseOptions = [
  "Desktop Publishing",
  "Full Stack Development",
  "Graphics Design",
  "Digital Marketing",
  "Data Analysis",
  "Cybersecurity",
];

function Register() {
  return (
    <div>
      <Header />
      <Box
        sx={{
          minHeight: "100vh",
          backgroundColor: "#89a32b",
          py: { xs: 6, md: 10 },
        }}
      >
        <Container maxWidth="md">
          {/* Header Section */}
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                color: "#172554",
                mb: 2,
                fontSize: { xs: "2.2rem", md: "3rem" },
              }}
            >
              Course Registration
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "#172554",
                maxWidth: "650px",
                margin: "0 auto",
                lineHeight: 1.8,
                fontSize: "1.05rem",
                fontWeight: 500,
              }}
            >
              Take the next step in building your tech and digital skills.
              Select your desired program below and register to join our training cohort.
            </Typography>
          </Box>

          {/* Form Card */}
          <Card
            sx={{
              borderRadius: 4,
              border: "1px solid #e2e8f0",
              boxShadow: "0 10px 30px rgba(15, 23, 42, 0.12)",
              backgroundColor: "white",
              p: { xs: 2, md: 4 },
            }}
          >
            <CardContent>
              <form>
                <Grid container spacing={3}>
                  {/* Full Name */}
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      required
                      label="Full Name"
                      name="fullName"
                      variant="outlined"
                    />
                  </Grid>

                  {/* Email Address */}
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      required
                      type="email"
                      label="Email Address"
                      name="email"
                      variant="outlined"
                    />
                  </Grid>

                  {/* Phone Number */}
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      required
                      label="Phone / WhatsApp Number"
                      name="phone"
                      variant="outlined"
                    />
                  </Grid>

                  {/* Course Selection */}
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      select
                      required
                      label="Select Course"
                      name="course"
                      defaultValue=""
                      variant="outlined"
                    >
                      {courseOptions.map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>

                  {/* Preferred Schedule */}
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      select
                      label="Preferred Class Schedule"
                      name="preferredSchedule"
                      defaultValue="Morning"
                      variant="outlined"
                    >
                      <MenuItem value="Morning">Morning Session</MenuItem>
                      <MenuItem value="Afternoon">Afternoon Session</MenuItem>
                      <MenuItem value="Weekend">Weekend Session</MenuItem>
                    </TextField>
                  </Grid>

                  {/* Additional Notes */}
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      multiline
                      rows={4}
                      label="Additional Notes / Questions (Optional)"
                      name="additionalNotes"
                      variant="outlined"
                    />
                  </Grid>

                  {/* Submit Button */}
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      fullWidth
                      sx={{
                        backgroundColor: "#172554",
                        color: "white",
                        py: 1.8,
                        borderRadius: 2,
                        fontSize: "1.1rem",
                        fontWeight: 700,
                        textTransform: "none",
                        "&:hover": {
                          backgroundColor: "#1e3a8a",
                        },
                      }}
                    >
                      Complete Registration
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>

          {/* Bottom Section */}
          <Box
            sx={{
              mt: 8,
              p: { xs: 4, md: 6 },
              borderRadius: 4,
              textAlign: "center",
              backgroundColor: "#172554",
              color: "white",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: "1.8rem", md: "2.3rem" },
              }}
            >
              Have Questions Before Registering?
            </Typography>

            <Typography
              sx={{
                maxWidth: "650px",
                margin: "0 auto",
                mb: 4,
                color: "#cbd5e1",
                lineHeight: 1.7,
              }}
            >
              If you need guidance choosing the right course or want to discuss custom training options, feel free to get in touch with us.
            </Typography>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "white",
                color: "#172554",
                px: 4,
                py: 1.3,
                borderRadius: 2,
                fontWeight: 700,
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#e2e8f0",
                },
              }}
            >
              Contact Support
            </Button>
          </Box>
        </Container>
      </Box>
    </div>
  );
}

export default Register;