import React from "react";
import FlightTakeoffOutlinedIcon from "@mui/icons-material/FlightTakeoffOutlined";
import Diversity3OutlinedIcon from "@mui/icons-material/Diversity3Outlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import AirlinesIcon from "@mui/icons-material/Airlines";
import { Container, Grid, Paper, Typography } from "@mui/material";

// Function to get the appropriate icon based on the icon name
function getIcon(iconName) {
  switch (iconName) {
    case "FlightTakeoffOutlinedIcon":
      return (
        <FlightTakeoffOutlinedIcon style={{ fontSize: 48, color: "#FFD700" }} />
      );
    case "Diversity3OutlinedIcon":
      return (
        <Diversity3OutlinedIcon style={{ fontSize: 48, color: "#FFD700" }} />
      );
    case "CalendarMonthOutlinedIcon":
      return (
        <CalendarMonthOutlinedIcon style={{ fontSize: 48, color: "#FFD700" }} />
      );
    case "AirlinesIcon":
      return <AirlinesIcon style={{ fontSize: 48, color: "#FFD700" }} />;
    default:
      return null;
  }
}

// Services component
function Services({ services_data }) {
  return (
    <section className="py-10 ">
      <Container>
        <div className="flex flex-col items-center mb-8">
          <h2 className="uppercase text-3xl font-bold text-[#051D40] mb-2">
            Our Services
          </h2>

          <p className="text-center text-lg text-gray-600">
            Discover a range of services tailored to your travel needs. We are
            committed to providing top-notch experiences.
          </p>
        </div>

        {/* Services Grid */}
        <Grid container spacing={4} className="justify-center">
          {services_data &&
            services_data.services.map((service, i) => (
              <Grid
                key={i}
                item
                xs={12}
                sm={6}
                md={6} // Adjusted for better responsiveness with two cards
                lg={6}
                className="flex justify-center"
              >
                <Paper
                  elevation={3}
                  className="flex flex-col items-center p-6 rounded-lg hover:shadow-xl transition-shadow duration-300 bg-white w-full"
                >
                  <div className="mb-4">{getIcon(service.icon)}</div>
                  <Typography
                    variant="h6"
                    className="font-bold mb-2 text-[#051D40] text-center"
                  >
                    {service.title}
                  </Typography>
                  <Typography className="leading-relaxed text-center text-base font-serif text-gray-700">
                    {service.text}
                  </Typography>
                </Paper>
              </Grid>
            ))}
        </Grid>
      </Container>
    </section>
  );
}

export default Services;
