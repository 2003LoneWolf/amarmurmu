"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <div className=" fixed shadow-lg p-5 rounded-[50px]  top-10 left-1/2 transform -translate-x-1/2 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 rounded- bg-opacity-30 backdrop-blur-lg flex flex-col sm:flex-row justify-between items-center text-lg mx-auto">
      <Link href="/">Amar.</Link>
      <Link href="/works">Works</Link>
      <Link href="/courses">Courses</Link>
      <Link href="/contact">Contact</Link>

      <Link href="/signin">Sign in</Link>
    </div>
  );
};

export default Navbar;
