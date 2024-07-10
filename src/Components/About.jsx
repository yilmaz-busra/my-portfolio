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

      <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <h1>About Me</h1>
        <p>
          Hi! I&apos;m Büşra Yılmaz. graduated from the Department of Computer
          Education and Instructional Technology of the Yıldız Technical
          University in 2024 with a GPA of 3.58. I aim to pursue a career in the
          software industry and have participated in various trainings and
          projects to acquire frontend developer skills. I have particularly
          focused on web development using React and have a strong interest in
          learning and applying modern frontend technologies. I am a team player
          with strong communication skills, open to learning, and a quick
          learner. I am also a self-motivated individual who is passionate about
          technology and has a strong desire to succeed in the software
          industry.
        </p>
      </div>
    </div>
  );
}

export default About;
