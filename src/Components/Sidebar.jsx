import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { BsTelephone } from "react-icons/bs";
import { LuMailOpen } from "react-icons/lu";
import { Link } from "next/link";
import Image from "next/image";

function Sidebar() {
  return (
    <div className="container px-5 py-24 mx-auto  ">
      <div className=" relative w-52 h-52 mx-auto border-8 border-orange-500 rounded-full   ">
        <Image
          src="/profileImg.jpg"
          alt="Büşra Yılmaz"
          fill
          className="rounded-full"
          objectFit="cover"
        />
      </div>
      <div className="container max-h-max rounded-sm bg-slate-600">
        <div className="pt-6 space-y-4 font-medium text-center">
          <h2 className="text-2xl font-bold  ">Büşra Yılmaz</h2>
        </div>
        <div className=" flex justify-around pt-6  font-medium text-center">
          <a
            href="https://www.linkedin.com/in/yilmaz-busra/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-4xl text-blue-700" />
          </a>
          <a
            href="https://github.com/yilmaz-busra"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSquareGithub className="text-4xl text-black" />
          </a>
        </div>

        <h4 className="pt-6 text-center text-2xl font-medium">Contact Me</h4>

        <div className="flex flex-col justify-center items-center  pt-6 space-y-4  text-center">
          <span className="flex  items-center">
            <LuMailOpen className="text-lg w-12  text-black" />
            <p className=" text-sm font-bold text-black">Mail :</p>
          </span>
          <p className="text-sm">b.busraayilmaz@gmail.com</p>
        </div>
        <div className="flex flex-col justify-center items-center  pt-6 space-y-4  text-center">
          <span className="flex  items-center">
            <BsTelephone className="text-lg w-12  text-black" />
            <p className=" text-sm font-bold text-black">Telephone Number:</p>
          </span>
          <p className="text-sm">+90 545 817 40 51</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
