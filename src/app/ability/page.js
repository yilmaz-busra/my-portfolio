import React from "react";

function Ability() {
  return (
    <div className="container px-3 py-12 mx-auto bg-white rounded-xl shadow-xl overflow-hidden md:max-w-2xl">
      <h1 className="p-1 text-3xl leading-tight font-medium text-black">
        SKILLS
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
        <div>
          <h2 className="text-2xl font-bold mb-4">Work Skills</h2>
          <div className="flex flex-wrap gap-2">
            <div className="h-full p-2 rounded-2xl bg-[#E1E8EF]">NEXT.js</div>
            <div className="h-full p-2 rounded-2xl bg-[#E1E8EF]">React.js</div>
            <div className="h-full p-2 rounded-2xl bg-[#E1E8EF]">HTML 5</div>
            <div className="h-full p-2 rounded-2xl bg-[#E1E8EF]">CSS 3</div>
            <div className="h-full p-2 rounded-2xl bg-[#E1E8EF]">
              JavaScript
            </div>
            <div className="h-full p-2 rounded-2xl bg-[#E1E8EF]">
              Tailwind CSS
            </div>
            <div className="h-full p-2 rounded-2xl bg-[#E1E8EF]">Bootstrap</div>
            <div className="h-full p-2 rounded-2xl bg-[#E1E8EF]">SQL</div>
            <div className="h-full p-2 rounded-2xl bg-[#E1E8EF]">Git</div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Soft Skills</h2>
          <div className="flex flex-wrap gap-2">
            <div className="h-full p-2 rounded-2xl bg-[#E1E8EF]">
              Time Management
            </div>
            <div className="h-full p-2 rounded-2xl bg-[#E1E8EF]">
              Analytical Thinking
            </div>
            <div className="h-full p-2 rounded-2xl bg-[#E1E8EF]">
              Communication
            </div>
            <div className="h-full p-2 rounded-2xl bg-[#E1E8EF]">
              Problem Solving
            </div>
            <div className="h-full p-2 rounded-2xl bg-[#E1E8EF]">Research</div>
            <div className="h-full p-2 rounded-2xl bg-[#E1E8EF]">Teamwork</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ability;
