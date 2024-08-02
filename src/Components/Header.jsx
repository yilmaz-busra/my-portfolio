"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" ">
      <div className="container mx-auto flex justify-between items-center p-4  ">
        <div className="text-xl font-bold  ">Büşra Yılmaz</div>
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="p-4 rounded-xl  border-none">
            About Me
          </Link>
          <Link href="/education" className="p-4 rounded-xl border-none">
            Education
          </Link>
          <Link href="/ability" className="p-4 rounded-xl border-none">
            Ability
          </Link>
          <Link href="/projectss" className="p-4 rounded-xl border-none">
            Projects
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-2 p-4">
          <Link href="/" className="p-2 rounded border ">
            About Me
          </Link>
          <Link href="/education" className="p-2 rounded border">
            Education
          </Link>
          <Link href="/ability" className="p-2 rounded border">
            Ability
          </Link>
          <Link href="/projectss" className="p-2 rounded border">
            Projects
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
