import React from "react";
import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <div>
      <a className="flex items-center gap-2 ">
        <Image src="/fajr-logo.jpeg" alt="Image" width={100} height={50} />
        {/* <h4 className="font-bold text-xl font-sans uppercase text-orange-600">
          Fajr &nbsp;<span className="text-primary-500">Airlines</span>
        </h4> */}
      </a>
    </div>
  );
}

export default Logo;
