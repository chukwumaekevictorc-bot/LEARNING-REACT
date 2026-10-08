
import React from "react";
import Header from "../Components/Header/Header"
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";

import {
  Description,
  Code,
  Palette,
  Campaign,
  Analytics,
  Security,
} from "@mui/icons-material";


const services = [
  {
    title: "Desktop Publishing",
    description:
      "I teach students how to create professional documents, flyers, brochures, certificates, reports, and other digital publications with clean and attractive designs.",
    icon: <Description />,
  },
  {
    title: "Full Stack Development",
    description:
      "I teach students how to build responsive and functional websites and web applications using modern frontend and backend technologies.",
    icon: <Code />,
  },
  {
    title: "Graphics Design",
    description:
      "I teach students how to create creative and professional graphics such as logos, posters, banners, social media designs, and promotional materials.",
    icon: <Palette />,
  },
  {
    title: "Digital Marketing",
    description:
      "I train student and business owners on how to improve online presence through social media marketing, content creation, branding, and digital promotion.",
    icon: <Campaign />,
  },
  {
    title: "Data Analysis",
    description:
      "I train students on how to analyze data, create meaningful reports, identify trends, and present information in a simple way that supports better decisions.",
    icon: <Analytics />,
  },
  {
    title: "Cybersecurity",
    description:
      "I train IT students on how to provide basic cybersecurity solutions and guidance to help protect websites, systems, accounts, and digital information from security threats.",
    icon: <Security />,
  },
];

function Services() {
  return (
    <div>
        <Header/>
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#89a32b",
        py: { xs: 6, md: 10 },
      }}
    >
      <Container maxWidth="lg">

        {/* Header */}
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
            My Services
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "#64748b",
              maxWidth: "700px",
              margin: "0 auto",
              lineHeight: 1.8,
              fontSize: "1.05rem",
            }}
          >
            I provide a range of digital and technology services designed to
            help individuals, students, businesses, and organizations achieve
            their goals.
          </Typography>
        </Box>

        {/* Services Cards */}
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: "100%",
                  borderRadius: 4,
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 8px 25px rgba(15, 23, 42, 0.08)",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 15px 35px rgba(15, 23, 42, 0.15)",
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>

                  {/* Icon */}
                  <Box
                    sx={{
                      width: 65,
                      height: 65,
                      borderRadius: 3,
                      backgroundColor: "#e0e7ff",
                      color: "#3730a3",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 3,
                      "& svg": {
                        fontSize: 34,
                      },
                    }}
                  >
                    {service.icon}
                  </Box>

                  {/* Title */}
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      color: "#1e293b",
                      mb: 2,
                    }}
                  >
                    {service.title}
                  </Typography>

                  {/* Description */}
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#64748b",
                      lineHeight: 1.8,
                      mb: 3,
                    }}
                  >
                    {service.description}
                  </Typography>

                  {/* Button */}
                  <Button
                    variant="text"
                    sx={{
                      color: "#3730a3",
                      fontWeight: 600,
                      textTransform: "none",
                      "&:hover": {
                        backgroundColor: "#eef2ff",
                      },
                    }}
                  >
                    Learn More →
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Bottom Section */}
        <Box
          sx={{
            mt: 10,
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
            Need a Digital Solution?
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
            Whether you need a website, graphic design, data analysis,
            digital marketing, or other technology services, I am ready to
            help bring your ideas to life.
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
            Contact Me
          </Button>
        </Box>

      </Container>
    </Box>
  
  </div>
  );
}

export default Services;
