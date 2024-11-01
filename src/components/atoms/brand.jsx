import React from "react";
import Image from "next/image";

function Logo() {
  return (
    <div className="w-[300px] h-[100px] flex ">
      <Image
        src="/logo without back.svg"
        alt="Image"
        layout="responsive" // Makes the image responsive to parent div
        width={200}         // Used for defining aspect ratio
        height={50}         // Used for defining aspect ratio
        className="object-cover"
      />
    </div>
  );
}

export default Logo;
