import React from "react";
import HeroSection from "./components/heroSection";
import Whatido from "./components/whatido";

export default function Home() {
  return (
    <div className="w-screen h-screen relative">
      <HeroSection />
      <Whatido />
    </div>
  );
}
