import Image from "next/image";
import React from "react";
import AboutImage from "../../../../public/tail.png";
import { Container } from "@mui/material";

function AboutSplash({ teamlist, about_us }) {
  const team = teamlist;
  const { paragraphs } = about_us;

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[40vw] md:h-[24vw]">
        <div className="relative h-full overflow-hidden">
          <Image
            src={AboutImage}
            alt="About Us"
            layout="fill"
            objectFit="cover"
            objectPosition="left 0% top 90%"
            className="-z-10 brightness-50"
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
              <h1 className="text-3xl text-white font-bold">About Us</h1>
            </div>
          </Container>
        </div>
      </div>

      {/* Who We Are Section */}
      <Container>
        <div className="mt-16 flex items-center">
          <div className="h-1 w-10 rounded bg-[#FFD700] mr-4"></div>
          <h4 className="uppercase text-2xl font-bold text-[#051D40]">
            Who Are We?
          </h4>
        </div>

        <div className="my-10 space-y-4">
          {paragraphs.map((paragraph, index) => (
            <div key={index}>
              <p className="leading-relaxed text-base font-serif text-[#4E6179]">
                {paragraph.p1}
              </p>
              <p className="leading-relaxed text-base font-serif text-[#4E6179]">
                {paragraph.p2}
              </p>
              <p className="leading-relaxed text-base font-serif text-[#4E6179]">
                {paragraph.p3}
              </p>
            </div>
          ))}
        </div>
      </Container>

      {/* Vision and Mission Sections */}
      <div className="py-8 bg-[#E2E9F5]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="font-sans text-2xl font-bold text-[#051D40] my-5">
                Our Vision
              </h2>
              <p className="leading-relaxed text-base font-serif text-[#4E6179]">
                To become the most efficient and dependable air service provider
                in the region and beyond while contributing significantly to the
                country's economic growth and infrastructure development.
              </p>
            </div>
            <div>
              <h2 className="font-sans text-2xl font-bold text-[#051D40] my-5">
                Our Mission
              </h2>
              <p className="leading-relaxed text-base font-serif text-[#4E6179]">
                To meet the needs of our clients by providing high levels of
                safety, ethical business practices, and excellent customer
                service.
              </p>
            </div>
          </div>
        </Container>
      </div>

      {/* Team Section */}
      <Container>
        <div className="my-10">
          <div className="my-20 flex items-center">
            <div className="h-1 w-10 rounded bg-[#FFD700]"></div>
            <h4 className="uppercase text-2xl font-bold text-[#051D40]">
              Meet Our Team
            </h4>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl"
              >
                {/* Team Member Image */}
                <div
                  className="relative w-24 h-24 mb-4 p-2 border-2 border-[#FFD700] overflow-hidden"
                  style={{
                    borderRadius: "50%",
                  }}
                >
                  <Image
                    src={member.image_url}
                    alt={member.name}
                    width={96}
                    height={96}
                    objectFit="cover"
                  />
                </div>
                <h2 className="font-bold font-sans text-lg text-[#051D40]">
                  {member.name}
                </h2>
                <p className="leading-relaxed text-sm text-[#4E6179] font-serif">
                  {member.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}

export default AboutSplash;
