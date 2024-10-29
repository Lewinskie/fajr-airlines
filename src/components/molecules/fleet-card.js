import React from "react";
import Image from "next/image"; // Importing Image from "next/image"
import { Container, Typography, Grid, Card, CardContent } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { aircrafts } from "@/data";

const FleetCard = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  };

  return (
    <Container>
      <Grid container spacing={4} justifyContent="center">
        {aircrafts.map((aircraft, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card variant="outlined">
              <Slider {...sliderSettings}>
                {aircraft.images.map((image, i) => (
                  <div key={i} style={{ width: "100%" }}>
                    <div style={{ position: "relative", paddingBottom: "60%" }}>
                      <Image
                        src={image}
                        alt={aircraft.name}
                        layout="fill"
                        objectFit="cover"
                        // objectPosition="left top"
                        priority={true}
                      />
                    </div>
                  </div>
                ))}
              </Slider>
              <CardContent>
                <Typography variant="h5" color="primary" gutterBottom>
                  {aircraft.name}
                </Typography>
                <Typography variant="body1" paragraph>
                  {aircraft.description}
                </Typography>
                <Typography variant="h6" color="primary" gutterBottom>
                  Crew Composition
                </Typography>
                {aircraft.crewComposition.map((role, index) => (
                  <Typography key={index} variant="body2" paragraph>
                    <span style={{ fontWeight: "bold", color: "primary" }}>
                      {role.quantity}&nbsp;
                    </span>
                    {role.role}
                  </Typography>
                ))}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default FleetCard;
