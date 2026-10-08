
import React from "react";
import Header from "../Components/Header/Header"
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
} from "@mui/material";

import {
  Email,
  Phone,
  LocationOn,
  Send,
} from "@mui/icons-material";

function ContactMe() {
  return (
    <div>
    <Header/>
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#2b79a7",
        py: { xs: 6, md: 10 },
      }}
    >
      <Container maxWidth="lg">

        {/* Page Header */}
        <Box sx={{ textAlign: "center", mb: 7 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              color: "#172554",
              mb: 2,
              fontSize: { xs: "2.2rem", md: "3rem" },
            }}
          >
            Contact Me
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "#110d0e",
              maxWidth: "700px",
              mx: "auto",
              lineHeight: 1.8,
              fontSize: "1.05rem",
            }}
          >
            Have learning IT in mind or need help with a digital service?
            Feel free to get in touch with me. I would be happy to discuss
            your ideas and how I can help.
          </Typography>
        </Box>

        {/* Main Contact Section */}
        <Grid container spacing={5}>

          {/* Contact Information */}
          <Grid item xs={12} md={5}>
            <Card
              sx={{
                height: "100%",
                borderRadius: 4,
                boxShadow: "0 8px 25px rgba(15, 23, 42, 0.08)",
                border: "1px solid #e2e8f0",
              }}
            >
              <CardContent sx={{ p: { xs: 3, md: 5 } }}>

                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                    color: "#1e293b",
                    mb: 2,
                  }}
                >
                  Get In Touch
                </Typography>

                <Typography
                  sx={{
                    color: "#64748b",
                    lineHeight: 1.8,
                    mb: 4,
                  }}
                >
                  I am available to teach you IT. You can reach me through any of the
                  contact options below.
                </Typography>

                {/* Email */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    mb: 3,
                  }}
                >
                  <Box
                    sx={{
                      width: 50,
                      height: 50,
                      borderRadius: 2,
                      backgroundColor: "#d7dbd8",
                      color: "#3730a3",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Email />
                  </Box>

                  <Box>
                    <Typography
                      sx={{
                        fontWeight: 700,
                        color: "#1e293b",
                      }}
                    >
                      Email
                    </Typography>

                    <Typography sx={{ color: "#090a0a" }}>
                      chukwumaekevictorc@gmail.com
                    </Typography>
                  </Box>
                </Box>

                {/* Phone */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    mb: 3,
                  }}
                >
                  <Box
                    sx={{
                      width: 50,
                      height: 50,
                      borderRadius: 2,
                      backgroundColor: "#e0e7ff",
                      color: "#3730a3",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Phone />
                  </Box>

                  <Box>
                    <Typography
                      sx={{
                        fontWeight: 700,
                        color: "#1e293b",
                      }}
                    >
                      Phone
                    </Typography>

                    <Typography sx={{ color: "#64748b" }}>
                      +234 080 429 6783
                    </Typography>
                  </Box>
                </Box>

                {/* Location */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                  }}
                >
                  <Box
                    sx={{
                      width: 50,
                      height: 50,
                      borderRadius: 2,
                      backgroundColor: "#e0e7ff",
                      color: "#3730a3",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <LocationOn />
                  </Box>

                  <Box>
                    <Typography
                      sx={{
                        fontWeight: 700,
                        color: "#1e293b",
                      }}
                    >
                      Location
                    </Typography>

                    <Typography sx={{ color: "#64748b" }}>
                      Nigeria
                    </Typography>
                  </Box>
                </Box>

              </CardContent>
            </Card>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <Card
              sx={{
                borderRadius: 4,
                boxShadow: "0 8px 25px rgba(15, 23, 42, 0.08)",
                border: "1px solid #e2e8f0",
              }}
            >
              <CardContent sx={{ p: { xs: 3, md: 5 } }}>

                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                    color: "#1e293b",
                    mb: 3,
                  }}
                >
                  Send Me a Message
                </Typography>

                <Box component="form">

                  {/* Name */}
                  <TextField
                    fullWidth
                    label="Your Name"
                    variant="outlined"
                    margin="normal"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 2,
                      },
                    }}
                  />

                  {/* Email */}
                  <TextField
                    fullWidth
                    label="Your Email"
                    type="email"
                    variant="outlined"
                    margin="normal"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 2,
                      },
                    }}
                  />

                  {/* Subject */}
                  <TextField
                    fullWidth
                    label="Subject"
                    variant="outlined"
                    margin="normal"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 2,
                      },
                    }}
                  />

                  {/* Message */}
                  <TextField
                    fullWidth
                    label="Your Message"
                    multiline
                    rows={5}
                    variant="outlined"
                    margin="normal"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 2,
                      },
                    }}
                  />

                  {/* Send Button */}
                  <Button
                    type="submit"
                    variant="contained"
                    endIcon={<Send />}
                    sx={{
                      mt: 3,
                      px: 4,
                      py: 1.4,
                      borderRadius: 2,
                      backgroundColor: "#3730a3",
                      fontWeight: 700,
                      textTransform: "none",
                      "&:hover": {
                        backgroundColor: "#312e81",
                      },
                    }}
                  >
                    Send Message
                  </Button>

                </Box>
              </CardContent>
            </Card>
          </Grid>

        </Grid>

        {/* Bottom CTA */}
        <Box
          sx={{
            mt: 8,
            p: { xs: 4, md: 5 },
            borderRadius: 4,
            textAlign: "center",
            backgroundColor: "#172554",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              color: "white",
              fontWeight: 700,
              mb: 1.5,
            }}
          >
            Let's Work Together
          </Typography>

          <Typography
            sx={{
              color: "#cbd5e1",
              lineHeight: 1.7,
              maxWidth: "650px",
              mx: "auto",
            }}
          >
            Whether you need to learn  website designing, graphic design, data analysis,
            digital marketing, desktop publishing, or cybersecurity
            assistance, I am ready to work with you.
          </Typography>
        </Box>

      </Container>
    </Box>
    </div>
  );
}

export default ContactMe;
