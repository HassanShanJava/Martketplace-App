// views has components to display
//components that are reusable are in components

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-y-10 py-6 ">
      {/* Left Div */}
      <div className="flex-1">
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
      <div className="flex-1">{/* <Image src={heroImage} alt='hero' /> */}</div>
    </section>
  );
};

export default Hero;
