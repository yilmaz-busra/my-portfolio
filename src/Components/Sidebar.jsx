import React from "react";
import { BsTelephone } from "react-icons/bs";
import { LuMailOpen } from "react-icons/lu";
import { Link } from "next/link";
import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
function Sidebar() {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl  ">
      <div className=" relative w-52 h-52 mx-auto border-8 py-4 border-[#c2c2c2] rounded-full   ">
        <Image
          src="/profileImg.JPG"
          alt="Büşra Yılmaz"
          fill
          className="rounded-full"
          objectFit="cover"
        />
      </div>
      <div className="p-8 ">
        <h1 className="block mt-1 text-center text-lg leading-tight font-medium text-black">
          Büşra Yılmaz
        </h1>
        <div className="text-center uppercase tracking-wide text-sm text-gray-800 font-semibold">
          Frontend Developer
        </div>

        <div className="flex justify-around mt-6 space-x-4">
          <a
            href="https://www.linkedin.com/in/yilmaz-busra/"
            target="_blank"
            className="text-gray-700 hover:text-gray-900"
          >
            <FaLinkedin size="1.5em" />
          </a>

          <a
            href="https://github.com/yilmaz-busra"
            target="_blank"
            className="text-gray-700 hover:text-gray-900"
          >
            <FaGithub size="1.5em" />
          </a>
        </div>
        <div className="mt-4">
          <div className="flex items-center text-gray-600">
            <FiPhone className="mr-2" />
            <span>+90 545 817 40 51</span>
          </div>
          <div className="flex items-center text-gray-600 mt-2">
            <FiMail className="mr-2" />
            <span>b.busraayilmaz@gmail.com</span>
          </div>
          <div className="flex items-center text-gray-600 mt-2">
            <FiMapPin className="mr-2" />
            <span>İstanbul</span>
          </div>
        </div>
        {/* <div className="mt-4">
          <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-700">
            Download Resume
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default Sidebar;
