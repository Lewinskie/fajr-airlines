import React from "react";
import Image from "next/image";

function FooterLogo() {
  return (
    <div className="pb-5">
      <a className="flex items-center gap-2 ">
        <Image src="/fajr-logo.jpeg" alt="Image" width={80} height={40} />
        {/* <h4 className="font-bold text-xl font-sans text-white uppercase">
          Dragon<span className="text-secondary-500">Fly</span> Aviation
        </h4> */}
      </a>
    </div>
  );
}

export default FooterLogo;
