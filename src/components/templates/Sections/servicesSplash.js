import Image from "next/image";
import ServicesSplashImage from "../../../../public/hero2.jpg";

function ServicesSplash({}) {
  return (
    <div className="relative h-[80vw] md:h-[34vw]">
      <Image
        src={ServicesSplashImage}
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
      </div>
    </div>
  );
}

export default ServicesSplash;
