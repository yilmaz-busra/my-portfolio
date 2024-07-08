"use client";
import React from "react";

function About() {
  return (
    <div id="about" className=" container px-5 py-24 mx-auto ">
      <div className="lg:w-4/5 mx-auto flex flex-initial justify-center ">
        <img
          src="https://media.licdn.com/dms/image/D4D03AQGCTZuxfw96iQ/profile-displayphoto-shrink_200_200/0/1683032047462?e=1726099200&v=beta&t=W25xC7aJaSNv_64hQtHsfRCRzbLATjA0yV5MH8B-mUQ"
          alt="Büşra Yılmaz"
          className="lg:w-1/2  h-64 object-none object-center "
        />
      </div>

      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h1>Büşra Yılmaz</h1>
        <p>Frontend Developer</p>
        <p>
          Hi! I`&apos`m Büşra, a frontend developer based in Istanbul, Turkey. I
          have a passion for web development and love to create web applications
          that are user-friendly and accessible. I have experience working with
          React, Next.js, and Tailwind CSS.
        </p>
      </div>
    </div>
  );
}

export default About;
