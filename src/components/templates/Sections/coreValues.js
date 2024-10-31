import { Container, Grid, Typography } from "@mui/material";

function CoreValues({ core_values }) {
  return (
    <div style={{ backgroundColor: "#E6E8F8", padding: "4rem 0" }}>
      <Container maxWidth="lg">
        {/* Section Title */}

        <div className="flex flex-col items-center mb-8">
          <h2 className="uppercase text-3xl font-bold text-[#051D40] mb-2">
            Our Core Values
          </h2>

          <p className="text-center text-lg text-gray-600">
            We are driven by a commitment to integrity, trust, and excellence,
            reflected in everything we do.
          </p>
        </div>

        {/* Values Grid */}
        <Grid container spacing={4} style={{ marginTop: "2rem" }}>
          {core_values.values.map((value) => (
            <Grid item xs={12} sm={6} md={4} key={value.id}>
              <div style={{ textAlign: "center" }}>
                <Typography
                  variant="h6"
                  style={{ fontWeight: "bold",  }}
                  className="text-secondary-500"
                >
                  {value.title}
                </Typography>
                <Typography
                  variant="body2"
                  
                  style={{
                    color: "#374151",
                    marginTop: "0.5rem",
                    padding: "0 1rem",
                  }}
                >
                  {value.text}
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default CoreValues;
