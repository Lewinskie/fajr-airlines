import Image from "next/image";
import ServicesSplashImage from "../../../../public/tail.png";
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
          // left (0%) and bottom (100%)
          objectPosition="0% 90%"
          className="-z-10 brightness-50 object-cover"
        />
      </div>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(0,3,69,0.1) 0%, rgba(0,3,69,0.2) 40%)",
        }}
      ></div>
      <div className="absolute bottom-0 left-0 mb-8 pl-8 w-full">
        <Container>
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl text-neutral-500">Our Services</h1>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default ServicesSplash;
