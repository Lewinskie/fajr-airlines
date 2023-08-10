import Image from "next/image";
import CoreValuesImage from "../../../../public/coreValues.jpg";
import { Card, CardHeader, CardMedia, Container, Grid } from "@mui/material";

function CoreValues({ core_values }) {
  return (
    <div
      // className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 p-4 gap-8"
      style={{
        background: "#E6E8F8",
        paddingTop: "0px",
        paddingBottom: "2rem",
      }}
    >
      {/* <div className="relative">
        <Image
          src={CoreValuesImage}
          alt="alt text"
          width={1200}
          height={1000}
          className="h-[500px] absolute top-20"
          // fill
          // object-fit="fit"
          // object-position="center"
          // className="h-[500px] "
        />
      </div>
      <div className="p-4">
        <h4 className="text-2xl font-bold font-sans text-center py-10">
          Our Core Values
        </h4>
        {core_values.values.map((value, i) => {
          return (
            <div className="" key={value.id}>
              <h3 className="font-bold font-sans text-lg text-secondary-500 py-5">
                {value.title}
              </h3>
              <p className="leading-relaxed text-base font-serif">
                {value.text}
              </p>
            </div>
          );
        })}
      </div> */}
      <Container>
        <div>
          <h4 className="text-2xl font-bold font-sans text-center py-10">
            Our Core Values
          </h4>
          <Grid container spacing={3} sx={{ padding: "2.5rem" }}>
            {core_values.values.map((value) => {
              return (
                <Grid item xs={12} sm={6} md={6} lg={4} xl={4} key={value.id}>
                  <Card style={{ height: "100%", padding: "1rem" }}>
                    <h3 className="font-bold font-sans text-lg text-secondary-500 py-5">
                      {value.title}
                    </h3>
                    <p className="leading-relaxed text-base font-serif">
                      {value.text}
                    </p>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </div>
      </Container>
    </div>
  );
}

export default CoreValues;
