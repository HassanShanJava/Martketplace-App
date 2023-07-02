// views has components to display
//components that are reusable are in components

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import HeroImg from "/public/hero-img.webp";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-y-10 py-6  ">
      {/* Left Div */}
      <div className="flex-1 ">
        {/* flex-1 for equall width in flex parent */}
        <Badge className="py-2 px-6 text-lg rounded-lg bg-blue-200 text-blue-700 ">
          Sale 70%
        </Badge>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-6">
          An Industrial Take on Streetwear
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Anyone can beat you but no one can beat your outfit as long as you
          wear Dine outfits.
        </p>
        <Button className="bg-black h-12 px-7 mt-4">Start Shopping</Button>
      </div>

      {/* Right Div */}
      <div className="flex-1 relative items-center  ">
        {/* <div className="flex justify-between -z-10 items-center absolute  ">
          <div className="  bg-orange-200  rounded-full w-[450px] h-[450px] "></div>
        </div> */}
        
        <div className="relative flex h-[300px] sm:h-[460px] w-fit items-center justify-center mx-auto  before:absolute before:h-[260px] before:w-[260px]  sm:before:h-[420px] sm:before:w-[420px] before:rounded-full before:bg-orange-200">
          <Image
            src={HeroImg}
            alt="hero"
            className=" z-30 w-[300px] h-[300px] sm:w-[460px] sm:h-[460px]  m-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
1;
