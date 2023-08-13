/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React, { useState } from "react";
import AboutImage from "../../../../public/FAH_1364 copy.webp";
// import

function AboutSplash({ teamlist, about_us }) {
  const team = teamlist;
  const { paragraphs } = about_us;
  return (
    <>
      <div className="relative h-[80vw] md:h-[34vw]">
        <Image
          src={AboutImage}
          alt="alt text"
          // width={1200}
          // height={300}
          fill
          object-fit="cover"
          object-position="center"
          className="-z-10 brightness-50 object-none"
        />
        <div className="absolute inset-0 bg-primary-600 opacity-40 "></div>
        <div className="absolute bottom-0 left-0 mb-8 pl-8 w-full">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl text-neutral-500">About Us</h1>
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
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        {/* About us message section */}
        <div
          style={{ marginTop: "4rem", display: "flex", alignItems: "center" }}
        >
          <div
            className=" h-1 w-10 rounded bg-red-500"
            style={{ marginRight: "1rem" }}
          ></div>
          <h4 className=" uppercase text-2xl font-bold">Who are we?</h4>
        </div>

        <div className="my-10 flex flex-row items-center justify-start  gap-4 ">
          {paragraphs.map((paragraph, index) => (
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
        {/* Our Vision and Mission Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-20">
          <div>
            <h2 className="font-sans text-2xl font bold my-5">Our Vision</h2>
            <p className="leading-relaxed text-base font-serif">
              To become the most efficient and dependable air service provider
              in the region and beyond while contributing significantly to the
              country's economic growth and infrastructure development.
            </p>
          </div>
          <div>
            <h2 className="font-sans text-2xl font bold my-5">Our Mission</h2>
            <p className="leading-relaxed text-base font-serif">
              To meet the needs of our clients by providing high levels of
              safety, ethical business practices and excellent customer service.
            </p>
          </div>
        </div>
        {/* Our Team */}
        <div className="my-10">
          <div className="my-20 flex flex-row items-center justify-start  gap-4 ">
            <div className=" h-1 w-10 rounded bg-red-500"></div>
            <h4 className=" uppercase text-2xl font-bold">Meet Out Team</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {team.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-lg shadow-2xl-primary"
              >
                <div
                  className="relative  overflow-hidden rounded-t-lg"
                  style={{ height: "380px" }}
                >
                  <Image
                    src={member.image_url}
                    alt={member.name}
                    width={1200}
                    height={500}
                  />
                </div>
                <div className="p-4">
                  <h2 className=" font-bold font-sans text-xl  ">
                    {member.name}
                  </h2>
                  <p className="leading-relaxed text-base text-secondary-300 font-serif ">
                    {member.title}
                  </p>
                  {/* <Button
                href="#"
                intent="primary"
                size="medium"
                // className="inline-block mt-4 px-4 py-2 bg-secondary-500 text-white rounded-lg"
              >
                Learn more
              </Button> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutSplash;
