import React from "react";
import CardBox from "./CardBox";

function Whatido() {
  return (
    <div className="w-screen h-screen ">
      <h1 className="text-[64px] font-serif text-center animate-bounce">What I do!</h1>
      <div className=" flex justify-around ">
        <CardBox name=" UI design" color="#FFBE0B"/>
        <CardBox name=" game art" color="blue" />
        <CardBox name=" web dev" color="pink"/>
     
      </div>
    </div>
  );
}

export default Whatido;
