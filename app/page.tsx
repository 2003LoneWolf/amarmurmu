import React from "react";
import HeroSection from "./components/HeroSection";
import Whatido from "./components/Whatido";

export default function Home() {
  return (
    <div className="w-screen h-screen relative">
      <HeroSection />
      <Whatido />
    </div>
  );
}
