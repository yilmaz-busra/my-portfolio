"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="z-[999] absolute top-0  ">
      <motion.div
        className="flex justify-center items-center fixed top-0 left-1/2 h-[4.5rem] w-full translate-x-1/2 rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      >
        <nav>
          <ul className="flex w-[22rem] flex-wrap items-center justify-between gap-y-3 text-[0.9rem] font-medium text-gray-200  sm:flex-nowrap sm:gap-5">
            <li>
              <button className=" w-14 h-14 rounded-xl bg-slate-50 ">
                <Link href="/About">About Me</Link>
              </button>
            </li>
            <li>
              <button className=" w-14 h-14 rounded-xl bg-slate-50 ">
                <Link href="#projects">Projects</Link>
              </button>
            </li>
            <li>
              <button className=" w-14 h-14 rounded-xl bg-slate-50 ">
                <Link href="#contact">Contact</Link>
              </button>
            </li>
          </ul>
        </nav>
      </motion.div>
    </header>
  );
}

export default Header;
