import Image from "next/image";
import Charter from "../../../../public/FAH_1364 copy.webp";
import Humanitarian from "../../../../public/IMG-20240226-WA0056.jpg";
import { Container, Typography, Grid, Card, CardContent } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ServiceBrief({}) {
  const briefs = [
    {
      name: "Charter Flights",
      images: [Charter],
      description: `Experience the pinnacle of aviation excellence: Embark on a
      transformative journey as we offer our esteemed clients
      exclusive charter services. Contact us today to book your next charter flight and experience the difference firsthand.`,
    },
    {
      name: "Humanitarian And Relief Services",
      images: [Humanitarian],
      description: `Saving lives, offering swift access to disaster zones.
      Transporting aid, personnel, and performing critical medical and
      security evacuations.`,
    },
  ];

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
        {briefs.map((brief, index) => (
          <Grid item xs={12} key={index}>
            <Card variant="outlined">
              <Grid container>
                <Grid item xs={12} md={6}>
                  <Slider {...sliderSettings}>
                    {brief.images.map((image, i) => (
                      <div key={i} style={{ width: "100%" }}>
                        <div
                          style={{
                            position: "relative",
                            paddingBottom: "60%",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <Image
                            src={image}
                            alt={brief.name}
                            layout="fill"
                            objectFit="cover"
                            // objectPosition="left center"
                            priority={true}
                          />
                        </div>
                      </div>
                    ))}
                  </Slider>
                </Grid>
                <Grid item xs={12} md={6}>
                  <CardContent>
                    <Typography variant="h5" color="primary" gutterBottom>
                      {brief.name}
                    </Typography>
                    <Typography
                      variant="body1"
                      paragraph
                      sx={{ marginTop: "1rem" }}
                    >
                      {brief.description}
                    </Typography>
                  </CardContent>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ServiceBrief;
