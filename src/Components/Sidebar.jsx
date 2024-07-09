import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "next/link";
function Sidebar() {
  return (
    <div className="container px-5 py-24 mx-auto bg-slate-600">
      <div className="flex justify-center items-center lg:justify-start ">
        <img
          src="/profileImg.jpg"
          alt="Büşra Yılmaz"
          className=" w-56 h-56 md:w-56  md:rounded-full rounded-full mx-auto"
          width="384"
          height="512"
        />
      </div>
      <div className="pt-6 space-y-4 font-medium text-center">
        <h2 className="text-2xl font-bold  ">Büşra Yılmaz</h2>
      </div>
      <div className="">
        <ul>
          <li>
            <Link>
              <FaLinkedin />
            </Link>
          </li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
