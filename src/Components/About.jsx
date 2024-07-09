"use client";
import React from "react";

function About() {
  return (
    <div id="about" className=" container px-5 py-24 mx-auto ">
      {/* <div className=" mx-auto flex flex-initial justify-center ">
        <img
          src="/profileImg.jpg"
          alt="Büşra Yılmaz"
          className=" h-64 object-contain object-left rounded-full shadow-2xl"
        />
      </div> */}

      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h1>Büşra Yılmaz</h1>
        <p>Frontend Developer</p>
        <p>
          Hi! I&apos;m Büşra, a frontend developer based in Istanbul, Turkey. I
          have a passion for web development and love to create web applications
          that are user-friendly and accessible. I have experience working with
          React, Next.js, and Tailwind CSS.
        </p>
      </div>
    </div>
  );
}

export default About;
