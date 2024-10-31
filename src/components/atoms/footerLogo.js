import React from "react";
import Image from "next/image";

function FooterLogo() {
  return (
    <div className="w-[300px] h-[100px] flex ">
      <Image
        src="/footerlogo.svg"
        alt="Image"
        layout="responsive" // Makes the image responsive to parent div
        width={200} // Used for defining aspect ratio
        height={50} // Used for defining aspect ratio
        className="object-cover"
      />
    </div>
  );
}

export default FooterLogo;
