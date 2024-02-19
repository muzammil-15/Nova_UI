
import Link from "next/link";
import React from "react";
import  Button  from "./button";


const Hero = () => {
  return (
    <div
      className=" w-full h-[90vh] bg-cover bg-center bg-no-repeat"
    >
        <div className="flex flex-col gap-5 justify-center h-full items-center max-w-screen-xl mx-auto">
          <h1 className="text-3xl md:text-6xl text-center font-[700] heading w-[80%] text_primary" >
          Build Accessible React Apps the Easy Way with Nova UI
          </h1>
          <p className="font-[500] text-base md:text-lg  text-center w-[70%]">
          Craft Stunning Apps in a Flash: Ditch tedious development with Nova UI's vast library of ready-to-use components. Save time, focus on unique layouts and interactions, and let Nova UI deliver consistent design and behavior across your React app.
          </p>


          <Button link="/work" title="Components"/>
        </div>
      </div>
  );
};

export default Hero;