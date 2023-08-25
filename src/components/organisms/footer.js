import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
// import Logo from "../../../public/dragonflyLogo-no-bg.png";
import FooterLogo from "../atoms/footerLogo.js";
import { Container, Grid } from "@mui/material";

function Footer() {
  // const [isLoading, setLoading] = useState(true);
  return (
    <div className=" bg-primary-500 ">
      <footer className="mx-auto max-w-7xl text-base font-sans tracking-wide  text-white">
        {/* <div className="grid grid-cols-5 items-start justify-between py-10">
          <div className="col-start-1 col-end-3 p-3">
            <FooterLogo />
            <p className="py- font-serif text-base text-white">
              Dragonfly Aviation Limited - Phoenix House, 2nd Floor Wilson
              Airport
            </p>
          </div>
          <div className="col-start-4 col-end-5">
            <h3 className="py-5 text-base text-white uppercase underline decoration-red-500  underline-offset-8">
              Navigation
            </h3>
            <ul className="flex flex-col font-serif">
              <Link href="/">About Us</Link>
              <Link href="/">Services</Link>
              <Link href="/">News & Events</Link>
              <Link href="/">FAQs</Link>
              <Link href="/">Contact Us</Link>
            </ul>
          </div>
          <div className="col-start-6 col-end-6   ">
            <h3 className="py-5 text-white text-base uppercase  underline decoration-red-500  underline-offset-8">
              Contacts
            </h3>
            <ul className="p-1 font-serif text-sm">
              <li className="p-1">
                Tel:&nbsp;
                <span className="text-base text-white">
                  (+254) 790 554 779 -{" "}
                </span>
                Reception
              </li>
              <li className="p-1">
                Tel:&nbsp;
                <span className="text-base text-white">
                  (+254) 792 600 900 -{" "}
                </span>
                Operations
              </li>
              <li className="p-1">
                Email:
                <span className="text-base text-white">
                  &nbsp;info@dragonflyafrica.co.ke
                </span>
              </li>
              <li className="p-1">
                P.O. BOX.&nbsp;
                <span className="text-base text-white">3542-00506 </span>Nairobi
                Kenya
              </li>
            </ul>
          </div>
        </div> */}
        <Container>
          <Grid container>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: { sm: "center", xs: "center" },
                marginBottom: { sm: "2rem", xs: "2rem" },
                marginTop: { sm: "2rem", xs: "2rem" },
                paddingRight: "10px",
              }}
            >
              <div>
                <FooterLogo />
                <p className="py- font-serif text-base text-white">
                  Dragonfly Aviation Limited - Phoenix House, 2nd Floor Wilson
                  Airport
                </p>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              sx={{
                justifyContent: { sm: "center", xs: "center" },
              }}
            >
              <h3 className="py-5 text-base text-white uppercase underline decoration-red-500  underline-offset-8">
                Navigation
              </h3>
              <ul className="flex flex-col font-serif">
                <Link href="/">About Us</Link>
                <Link href="/">Services</Link>
                <Link href="/">News & Events</Link>
                <Link href="/">FAQs</Link>
                <Link href="/">Contact Us</Link>
              </ul>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              sx={{
                justifyContent: { sm: "center", xs: "center" },
              }}
            >
              <h3 className="py-5 text-white text-base uppercase  underline decoration-red-500  underline-offset-8">
                Contacts
              </h3>
              <ul className="p-1 font-serif text-sm">
                <li className="p-1">
                  Tel:&nbsp;
                  <span className="text-base text-white">
                    (+254) 790 554 779 -{" "}
                  </span>
                  Reception
                </li>
                <li className="p-1">
                  Tel:&nbsp;
                  <span className="text-base text-white">
                    (+254) 792 600 900 -{" "}
                  </span>
                  Operations
                </li>
                <li className="p-1">
                  Email:
                  <span className="text-base text-white">
                    &nbsp;info@dragonflyafrica.co.ke
                  </span>
                </li>
                <li className="p-1">
                  P.O. BOX.&nbsp;
                  <span className="text-base text-white">3542-00506 </span>
                  Nairobi Kenya
                </li>
              </ul>
            </Grid>
          </Grid>
        </Container>
      </footer>
    </div>
  );
}

export default Footer;
