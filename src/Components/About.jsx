"use client";
import React from "react";

function About() {
  return (
    <div id="about" className=" container px-5 py-12 mx-auto ">
      <div className="max-w-sm mx-auto bg-white rounded-xl shadow-xl overflow-hidden md:max-w-2xl  p-4">
        <div className="flex justify-start items-center">
          <h1 className=" w-full mt-2 p-3 text-3xl leading-tight font-medium text-black">
            ABOUT ME
          </h1>
          <div className="w-full h-1  rounded-lg  bg-[#c2c2c2]   "></div>
        </div>
        <p>
          Hi! I&apos;m Büşra Yılmaz. I graduated from the Department of Computer
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

        <div className="">
          <div className="flex justify-start items-center">
            {" "}
            <h1 className="w-full mt-2 p-3 text-2xl leading-tight font-medium text-black">
              WHAT I DO ?
            </h1>
            <div className="w-96 h-1  rounded-lg  bg-[#c2c2c2]   "></div>
          </div>

          <div className="flex flex-col lg:flex-row gap-3">
            <div className="w-full lg:w-1/2 p-3  rounded-xl bg-[#c2c2c26b] ">
              <h2 className="mt-2 text-lg leading-tight font-medium text-black">
                Frontend Developer Intern
              </h2>
              <h3 className="text-sm leading-tight font-medium text-black">
                Tabby Digital Creative House | Digital Hub{" "}
              </h3>
              <h6 className="">08/2023 - 10/2023</h6>

              <p className="text-sm">
                As a frontend developer intern, I received various trainings and
                worked on projects. During this period, I took part in the
                design and development stages of static websites among the
                projects I was involved in.
              </p>
            </div>

            <div className=" w-full  lg:w-1/2 p-3  rounded-xl bg-[#c2c2c26b] ">
              <h2 className="mt-2 text-lg leading-tight font-medium text-black">
                Researcher Intern
              </h2>
              <h3 className="text-sm leading-tight font-medium text-black">
                TUBİTAK
              </h3>
              <h6 className="">10/2020 - 10/2021</h6>

              <p className="text-sm ">
                I am working as a Research Intern in the project of Preparing a
                Digital Scale and Preparing an Individualized Education Program
                - Application Software Development to Identify Students at Risk
                of Learning Disabilities aged 6-14. I prepare, organize and keep
                reports upon the request of the professors involved in this
                project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
