"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
// next image
import Image from "next/image";

let MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="relative flex flex-col pt-10 md:pt-20 justify-between items-center gap-y-4 py-4 ">
      {/* logo */}
      <Link href={"/"}>
        <Image
          src={"/logo.svg"}
          width={260}
          height={48}
          alt=""
          priority={true}
        />
      </Link>
    </div>
  );
};

export default Logo;
