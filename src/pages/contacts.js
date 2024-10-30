import { Container, Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
import ContactImage from "../../public/tail.png";
import Maps from "@/components/molecules/maps";
import ContactForm from "@/components/molecules/contact-form";

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
        <div className="absolute bottom-0 left-0 mb-8 pl-8 w-full">
          <Container>
            <div className="max-w-7xl mx-auto">
              <h1 className="text-3xl text-white font-bold">Contact Us</h1>
            </div>
          </Container>
        </div>
      </div>
      <Maps />
      <div>
        <Container>
          <div className="max-w-7xl mx-auto flex flex-col pb-20">
            <div
              style={{
                marginTop: "4rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "5rem",
              }}
            >
              <div
                className=" h-1 w-10 rounded bg-red-500 "
                style={{ marginRight: "1rem" }}
              ></div>
              <h4 className="uppercase text-xl font-bold text-center">
                We are always glad to hear from you
              </h4>
            </div>

            <ContactForm />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Contacts;
