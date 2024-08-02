import React from "react";
import Image from "next/image";
function Education() {
  return (
    <div className="px-3 py-12 mx-auto  bg-white rounded-xl shadow-xl overflow-hidden md:max-w-2xl">
      <h1 className=" p-1 text-3xl leading-tight font-medium text-black">
        EDUCATION & CERTIFICATES{" "}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 m-3">
        <div className="bg-[#fbe2e3] p-4 rounded-xl">
          <div className="flex justify-between items-center">
            <Image
              src="/UniversityLogo.png"
              alt="UniversityLogo"
              width={52}
              height={52}
              className="rounded-full object-cover"
            />
            <h2 className="ml-4">YILDIZ TECHNICAL UNIVERSITY</h2>
          </div>
          <div className="items-center mt-2">
            <h3 className="text-sm">
              Computer Education and Instructional Technology
              <span className="text-xs"> GPA: 3,58</span>
            </h3>
          </div>
          <h4 className="text-sm mt-2">09/2020 - 06/2024</h4>
        </div>

        <div className="bg-[#fbe2e3]  p-4 rounded-xl ">
          <h2 className="mt-8">ISTANBUL UNIVERSITY</h2>
          <div className="flex justify-between items-center mt-2">
            <h3 className="text-sm">Management Information Systems</h3>
            <h4 className="text-xs">Present</h4>
          </div>
        </div>

        <div className="bg-[#FFEED9] p-4 rounded-xl">
          <h2>React JS : Uygulamalı React JS -Redux Eğitimi (2024)</h2>
        </div>

        <div className="bg-[#FFEED9] p-4 rounded-xl">
          <h2>Web Design, Sorbil (10/2023) </h2>
        </div>

        <div className="bg-[#FFEED9] p-4 rounded-xl">
          <h2>React 301, Turkcell Future Writers (08/2023) </h2>
        </div>

        <div className="bg-[#FFEED9] p-4 rounded-xl">
          <h2>
            Beginner Level Frontend Developer Path - patika.dev (09/2022){" "}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Education;
