import Image from "next/image";
import ServicesSplashImage from "../../../../public/coreValues.webp";
import { Container } from "@mui/material";

function ServicesSplash({}) {
  return (
    <div className="relative h-[40vw] md:h-[24vw]">
      <div style={{ position: "relative", height: "100%", overflow: "hidden" }}>
        <Image
          src={ServicesSplashImage}
          alt="alt text"
          layout="fill"
          objectFit="cover"
          objectPosition="center 20%"
          className="-z-10 brightness-50 object-cover"
        />
      </div>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(0,3,69,0.8) 0%, rgba(0,3,69,0.2) 100%)",
        }}
      ></div>
      <div className="absolute bottom-0 left-0 mb-8 pl-8 w-full">
        <Container>
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl text-neutral-500">Our Services</h1>
            {/* <p className="text-base text-white font-serif mt-2 w-1/2">
            We have a highly experienced management team with the expertise and
            industry knowledge to deliver our services to diverse clients. Our
            employees are the heart of our company, and we value their ongoing
            commitment and dedication to our continued success. As per KCAA AOC
            and Admin regulations we have a team of 6 Nominated post holders all
            that have been accepted by the authority after a vigorous interview
            process. The 6 are the Accountable Manager, Head of Quality, Head of
            Operations, Chief Pilot, Head of Safety and the Head of Maintenance.
            Other managers are Cabin Crew Manager, Security Manager and
            Operations Manager.
          </p> */}
          </div>
        </Container>
      </div>
    </div>
  );
}

export default ServicesSplash;
