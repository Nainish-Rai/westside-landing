import React from "react";

type Props = {};

function HeroSection({}: Props) {
  return (
    <div className="w-full min-h-[300px] h-[600px]  border-b flex items-center">
      <div className="w-1/2 border-r px-12 ml-[2px] flex flex-col justify-center h-full">
        <h1 className="">
          West Side is a modern space infrastructure company focused on the
          ground segment.
        </h1>
        <p className="mt-8 max-w-lg ">
          The world runs on space. We’re building the technology to keep it
          connected.
        </p>
      </div>
      <div className="w-1/2 flex justify-center">
        <img
          src="/hero.png"
          alt="Hero Image"
          className="rounded-lg hover:scale-105 duration-200 hover:animate-pulse"
        />
      </div>
    </div>
  );
}

export default HeroSection;
