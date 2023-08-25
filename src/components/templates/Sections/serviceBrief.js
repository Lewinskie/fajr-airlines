import Image from "next/image";
import Charter from "../../../../public/FAH_1364 copy.webp";
import Humanitarian from "../../../../public/plane11.jpg";
import { Container } from "@mui/material";

function ServiceBrief({}) {
  return (
    <Container>
      <div className="my-20">
        <div className="grid grid-rows-1 md:grid-rows-2 gap-5 my-5">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col ">
              <h2 className="font-sans text-2xl text-primary-500 font bold my-5">
                Charter Flights
              </h2>
              <p className="leading-relaxed text-base font-serif my-5 ">
                Experience the pinnacle of aviation excellence: Embark on a
                transformative journey as we offer our esteemed clients
                exclusive charter services.
              </p>
            </div>
            <div className="relative h-[350px]">
              <Image
                src={Charter}
                alt="alt text"
                fill
                object-fit="cover"
                object-position="center"
                className="absolute "
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5">
            <div className="relative h-[350px]">
              <Image
                src={Humanitarian}
                alt="alt text"
                fill
                object-fit="cover"
                object-position="center"
                className="absolute "
              />
            </div>
            <div className="flex flex-col ">
              <h2 className="font-sans text-2xl text-primary-500 font bold my-5">
                Humanitarian And Relief Services
              </h2>
              <p className="leading-relaxed text-base font-serif my-5 ">
                Saving lives, offering swift access to disaster zones.
                Transporting aid, personnel, and performing critical medical and
                security evacuations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ServiceBrief;
