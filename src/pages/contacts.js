import { Container, Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
import ContactImage from "../../public/tail.png";
import Maps from "@/components/molecules/maps";
import ContactForm from "@/components/molecules/contact-form";
import { EmailIcon, LocationIcon, PhoneIcon } from "@/components/icons";

const Contacts = () => {
  return (
    <>
      {/* Hero Section */}

      <div className="relative h-[40vw] md:h-[24vw]">
        <div className="relative h-full overflow-hidden">
          <Image
            src={ContactImage}
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
        <div className="absolute bottom-10 left-0 mb-8 pl-8 w-full">
          <Container>
            <div className="max-w-7xl mx-auto">
              <h1 className="text-3xl text-white font-bold">Contact Us</h1>
            </div>
          </Container>
        </div>
      </div>
      <div className="-mt-16 mb-8 px-8">
        <div className="container mx-auto">
          <div
            className="py-12 flex justify-center rounded-xl border border-white bg-white shadow-md shadow-black/5 saturate-200"
            style={{ borderRadius: "10px" }}
          >
            <div className="my-8 grid gap-6 px-4">
              <div className="flex items-center gap-4">
                <LocationIcon />
                <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-bold">
                  123 Main Street, Country, City
                </p>
              </div>
              <div className="flex items-center gap-4">
                <PhoneIcon />
                <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-bold">
                  +1 123 456 789
                </p>
              </div>
              <div className="flex items-center gap-4">
                <EmailIcon />
                <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-bold">
                  info@fajairlines.com
                </p>
              </div>
              <div className="flex items-center gap-4"></div>
            </div>
            <div className="py-4 ml-5 w-[50%]">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      <Maps />

      {/* <ContactForm /> */}
    </>
  );
};

export default Contacts;
