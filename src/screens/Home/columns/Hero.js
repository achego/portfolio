import React from "react";
import Button from "../../../components/Button";
import Social from "../../../components/Social";

const Hero = () => {
  return (
    <div className="bg-[color:var(--prim-10)] min-h-[calc(100vh-5rem)] grid items-center justify-center">
      <div className="grid items-center justify-center">
      <div className="h-1 w-20 bg-[color:var(--prim-5)] mb-3"></div>
      <h1 className="font-bold">Hi, i'm Belema</h1>
      <h4 className="font-bold text-[color:var(--grey-6)]">Web and mobile frontend developer</h4>
      <Button className="mt-[1.25rem]">Contact me</Button>
      <Social />
      </div>
    </div>
  );
};

export default Hero;
