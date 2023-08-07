import React from "react";
import FlightTakeoffOutlinedIcon from "@mui/icons-material/FlightTakeoffOutlined";
import Diversity3OutlinedIcon from "@mui/icons-material/Diversity3Outlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";

function getIcon(iconName) {
  switch (iconName) {
    case "FlightTakeoffOutlinedIcon":
      return <FlightTakeoffOutlinedIcon style={{ fontSize: 48 }} />;
    case "Diversity3OutlinedIcon":
      return <Diversity3OutlinedIcon style={{ fontSize: 48 }} />;
    case "CalendarMonthOutlinedIcon":
      return <CalendarMonthOutlinedIcon style={{ fontSize: 48 }} />;
    default:
      return null;
  }
}

function Services({ services_data }) {
  return (
    <section>
      <div className="my-2 flex flex-row items-center justify-start  gap-4 ">
        <div className=" h-1 w-10 rounded bg-red-500"></div>
        <h4 className=" uppercase text-2xl font-bold">Our Services</h4>
      </div>
      <div className="container px-2 py-8 mx-auto flex flex-row">
        {services_data.services.map((service, i) => {
          return (
            <div key={i} className="p-4 md:w-1/3 flex items-center">
              <div className="w-12 h-12 inline-flex items-center justify-center  text-secondary-500 mb-4">
                {getIcon(service.icon)}
              </div>
              <div className="flex-grow pl-6">
                <h2 className=" font-sans font-bold mb-4">{service.title}</h2>

                <p className="leading-relaxed text-base font-serif">
                  {service.text}
                </p>
                <a className="mt-3 text-secondary-500 inline-flex items-center">
                  Learn More
                  <ArrowRightAltOutlinedIcon style={{ fontSize: 28 }} />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Services;
