import Image from "next/image";
import React, { useState } from "react";
import { Container } from "@mui/material";
import FleetCard from "@/components/molecules/fleet-card";

function Fleets({}) {
  return (
    <>
      <div className="relative h-[80vw] md:h-[34vw]">
        <Image
          src="DSC_4885-Pano copy.jpg"
          alt="alt text"
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
        <div style={{ marginTop: "4rem" }} />
        <FleetCard />
      </Container>
    </>
  );
}

export default Fleets;
