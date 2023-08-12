import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "../cva/buttonCVA";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

function HeroCarousel({ heroCarousel_data }) {
  const [isLoading, setLoading] = useState(true);
  return (
    <Swiper
      centeredSlides={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="group  h-[70vh]  overflow-hidden "
    >
      {heroCarousel_data.map((heroImage, i) => {
        return (
          <SwiperSlide
            key={heroImage.id}
            className="relative h-[80vw] md:h-[54vw]"
          >
            {/* Our Carousel Image */}
            <Image
              src={heroImage.hero_url}
              alt="alt text"
              width={1200}
              height={300}
              // fill
              // object-fit="cover"
              // object-position="center"
              className={` -z-10 block h-auto w-full text-secondary-500 duration-700 ease-in-out  ${
                isLoading ? "scale-110  blur-2xl  " : "scale-100 blur-0  "
              }`}
              onLoadingComplete={() => setLoading(false)}
              // priority="true"
              // quality={75}
            />
            {/* Blue Overlay */}
            <div className="absolute inset-0 bg-primary-500 opacity-50 "></div>
            <div className="absolute bottom-0 left-0  h-full w-full flex flex-row justify-start">
              <div className="max-w-7xl mx-auto flex flex-col items-start justify-center w-1/2">
                <h1 className="text-4xl font-sans font-bold leading-noramal text-gray-50 ">
                  {heroImage.short_title}
                </h1>
                <p className="text-lg text-white font-serif mt-5 ">
                  {heroImage.hero_phrase}
                </p>
                <div className="flex flex-row items-center justify-start space-x-10">
                  <div className="my-4">
                    <Link href={heroImage.page_link} className="">
                      <Button
                        className="flex items-center"
                        intent="primary"
                        size="medium"
                      >
                        <span className="pr-4">Learn More</span>
                        {/* <span>Book Now</span> */}
                      </Button>
                    </Link>
                  </div>
                </div>
                {/* <div className="flex flex-row items-center justify-center">
                  <button className="mr-1 mb-1 rounded bg-red-500 px-4 py-1 text-base font-semibold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-md focus:outline-none active:bg-red-600">
                    Sign Up
                  </button>
                </div> */}
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default HeroCarousel;