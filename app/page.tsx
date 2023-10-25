import React from "react";
import Navbar from "./components/navbar";
import HeroSection from "./components/heroSection";
import Whatido from "./components/whatido";
export default function Home() {
  return (
    <div className="w-screen h-screen relative">
      <Navbar />
      <HeroSection />
      <Whatido /> 
    </div>
  );
}
