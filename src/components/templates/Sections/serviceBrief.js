import Image from "next/image";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
} from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { briefs } from "@/data";

function ServiceBrief() {
  const sliderSettings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  };

  return (
    <Container sx={{ py: 4 }}>
      <Grid container spacing={4} justifyContent="center">
        {briefs.map((brief, index) => (
          <Grid item xs={12} key={index}>
            <Card
              sx={{
                display: "flex",
                flexDirection: {
                  xs: "column",
                  md: index % 2 === 0 ? "row" : "row-reverse",
                },
                borderRadius: 2,
                overflow: "hidden",
                bgcolor: "#E2E9F5",
                height: "100%",
              }}
            >
              {/* Image Section */}
              <Grid item xs={12} md={6} sx={{ height: "100%" }}>
                <Slider {...sliderSettings} style={{ height: "100%" }}>
                  {brief.images.map((image, i) => (
                    <Box
                      key={i}
                      sx={{
                        width: "100%",
                        height: "100%",
                        position: "relative",
                      }}
                    >
                      <Image
                        src={image}
                        alt={brief.name}
                        width={700}
                        height={500}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                        priority={true}
                      />
                    </Box>
                  ))}
                </Slider>
              </Grid>

              {/* Text Section */}
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  bgcolor: "#E2E9F5",
                  p: { xs: 3, md: 4 },
                }}
              >
                <CardContent
                  sx={{
                    width: "100%",
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{
                      color: "#051D40",
                      fontWeight: "bold",
                    }}
                  >
                    {brief.name}
                  </Typography>
                  <Typography
                    variant="body1"
                    paragraph
                    sx={{
                      color: "#4E6179",
                      mt: 2,
                      fontSize: "1rem",
                      lineHeight: 1.6,
                    }}
                  >
                    {brief.description}
                  </Typography>
                </CardContent>
              </Grid>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ServiceBrief;
