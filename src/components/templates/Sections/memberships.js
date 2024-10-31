import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import Image from "next/image";

function Memberships({ memberships }) {
  return (
    <Container className="my-10 py-5">
      {/* Section Title */}
      <div className="flex flex-col items-center mb-8">
        <h2 className="uppercase text-3xl font-bold text-[#051D40] mb-2">
          Our Services
        </h2>

        <p className="text-center text-lg text-gray-600">
          We proudly align with respected industry associations, enhancing our
          commitment to quality, professionalism, and excellence in travel.
        </p>
      </div>

      {/* Membership Grid */}
      <Grid container spacing={4}>
        {memberships.list &&
          memberships.list.map((member) => (
            <Grid item key={member.id} xs={12} sm={6} md={4}>
              <Card
                elevation={2}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  borderRadius: 2,
                  overflow: "hidden",
                  height: "100%",
                  transition: "transform 0.2s",
                  "&:hover": { transform: "scale(1.02)" },
                }}
              >
                {/* Logo */}
                <Box width="100%" height={150} position="relative">
                  <Image
                    src={member.logo_url}
                    alt={`${member.acronym} Logo`}
                    layout="fill"
                    objectFit="cover"
                    quality={90}
                    style={{ opacity: 0.9 }}
                  />
                </Box>

                {/* Content */}
                <CardContent>
                  <Typography variant="h6" color="primary" fontWeight="bold">
                    {member.acronym}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" mt={1}>
                    {member.names || "Membership Association"}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
}

export default Memberships;
