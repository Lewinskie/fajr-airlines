/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import AboutImage from "../../../../public/FAH_1364 copy.webp";
import { Container } from "@mui/material";

function CeoSplash({ message }) {
  const { ceo_message } = message;
  return (
    <>
      <div className="relative h-[80vw] md:h-[34vw]">
        <Image
          src={AboutImage}
          alt="alt text"
          fill
          object-fit="cover"
          object-position="center"
          className="-z-10 brightness-50 object-none"
        />
        <div className="absolute inset-0 bg-primary-600 opacity-40 "></div>
        <div className="absolute bottom-0 left-0 mb-8 pl-8 w-full">
          <Container>
            <div className="max-w-7xl mx-auto">
              <h1 className="text-3xl text-neutral-500">CEO's Message</h1>
            </div>
          </Container>
        </div>
      </div>
      <Container>
        <div className="max-w-7xl mx-auto">
          {/* About us message section */}
          <div
            style={{ marginTop: "6rem", display: "flex", alignItems: "center" }}
          >
            <div
              className=" h-1 w-10 rounded bg-red-500"
              style={{ marginRight: "1rem" }}
            ></div>
            <h4 className=" uppercase text-2xl font-bold">
              {ceo_message.title}
            </h4>
          </div>

          <div className="my-20 flex flex-row items-center justify-start  gap-4">
            {ceo_message.paragraphs.map((paragraph, index) => (
              <div key={index}>
                <p
                  className="leading-relaxed text-base font-serif"
                  style={{ marginBottom: "1rem" }}
                >
                  {paragraph.p1}
                </p>
                <p
                  className="leading-relaxed text-base font-serif"
                  style={{ marginBottom: "1rem" }}
                >
                  {paragraph.p2}
                </p>
                <p className="leading-relaxed text-base font-serif">
                  {paragraph.p3}
                </p>
              </div>
            ))}
          </div>
          <div className="mb-10">
            <p className="leading-relaxed text-base font-serif font-bold ">
              {ceo_message.ceo_name}
            </p>
            <p className="leading-relaxed text-base font-serif font-bold">
              Chief Executive Director
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}

export default CeoSplash;
