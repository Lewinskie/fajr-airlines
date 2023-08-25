import Image from "next/image";
import React, { useState } from "react";
import Fleet1 from "../../../../public/plane11.jpg";
import { Container } from "@mui/material";

function Fleets({}) {
  return (
    <>
      <div className="relative h-[80vw] md:h-[34vw]">
        <Image
          src={Fleet1}
          alt="alt text"
          // width={1200}
          // height={300}
          fill
          object-fit="cover"
          object-position="center"
          className=" brightness-50 object-cover"
        />
        <div className="absolute inset-0 bg-primary-600 opacity-40 "></div>
        <Container>
          <div className="absolute bottom-0 left-0 mb-8 pl-8 w-full">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-3xl text-neutral-500">Our Fleet</h1>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div className="max-w-7xl mx-auto grid grid-rows-1 md:grid-rows-2 gap-5 my-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5">
            <div className="relative h-[500px]">
              <Image
                src={Fleet1}
                alt="alt text"
                // width={1200}
                // height={300}
                fill
                object-fit="cover"
                object-position="center"
                className="absolute "
              />
            </div>
            <div className="flex flex-col items-start justify-evenly">
              <h2 className="font-sans text-2xl text-primary-500 font bold my-5">
                FOKKER 50 SERIES
              </h2>
              <p className="leading-relaxed text-base font-serif my-5 ">
                The F-50 is powered by two Pratt & Whitney PW 125B turboprop
                engines. The propellers are six bladed with full feathering and
                reverse capabilities. The aircraft is pressurized which permits
                it to fly up to 25,000 feet.
              </p>
              <p className="leading-relaxed text-base font-serif text-secondary-500">
                <span className="px-3 text-primary-500 font-bold">2</span>{" "}
                Pilots
              </p>
              <p className="leading-relaxed text-base font-serif text-secondary-500">
                <span className="px-3 text-primary-500 font-bold">2</span> Cabin
                Crew
              </p>
              <p className="leading-relaxed text-base font-serif text-secondary-500">
                <span className="px-3 text-primary-500 font-bold">1</span>
                Engineer
              </p>
              <p className="leading-relaxed text-base font-serif text-secondary-500">
                <span className="px-3 text-primary-500 font-bold">50</span>
                Passengers
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Fleets;
