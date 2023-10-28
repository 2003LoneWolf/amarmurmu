"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <motion.div
      className=" fixed bg-white shadow-lg left-1/2 flex justify-around p-3 w-1/3  rounded-[50px] z-10  top-5 bg-opacity-70 bg-opa backdrop-blur-lg  items-center text-lg"
      initial={{ y: -100, x:"-50%",opacity:0}}
      animate={{y:0,x:"-50%",opacity:1}}
    >
      <Link href="/">Amar.</Link>
      <Link href="/works">Works</Link>
      <Link href="/courses">Courses</Link>
      <Link href="/contact">Contact</Link>

      <Link href="/signin">Sign in</Link>
    </motion.div>
  );
};

export default Navbar;
