import React from "react";
import {
  FaCode,
  FaLaptopCode,
  FaGithub,
  FaReact,
  FaPython,
  FaFigma,
} from "react-icons/fa";

import {
  SiDjango,
  SiJavascript,
  SiMysql,
} from "react-icons/si";  
 
 const About = () => {
  return (
    <div className="min-h-screen bg-black text-white px-5 sm:px-10 md:px-20 py-10 md:py-14 pt-32 md:pt-28">

      {/* Heading */}
      <div className="text-center mb-10 md:mb-14">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          About <span className="text-cyan-400">Me</span>
        </h1>

        <p className="text-gray-400 max-w-3xl mx-auto text-base md:text-lg leading-7 md:leading-8 px-2 md:px-0">
          Hi there 👋 I'm{" "}
          <span className="text-white font-semibold">Nitesh</span>!
          <br />
          A passionate developer and lifelong learner who loves building
          meaningful software projects and exploring modern technologies.
        </p>
      </div>

      {/* Main Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* Left Side */}
        <div className="space-y-6 text-center md:text-left">

          {/* What I Do */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/10 p-6 rounded-3xl shadow-lg hover:scale-105 duration-300">
            <h2 className="text-xl md:text-2xl font-semibold text-cyan-400 mb-3 flex items-center justify-center md:justify-start gap-3">
              <FaLaptopCode />
              What I Do
            </h2>

            <p className="text-gray-300 text-sm md:text-base leading-7">
              I build responsive and modern web applications using front-end
              and back-end technologies. I enjoy creating user-friendly
              interfaces, learning new tools, and working on real-world
              projects.
            </p>
          </div>

          {/* Learning */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/10 p-6 rounded-3xl shadow-lg hover:scale-105 duration-300">
            <h2 className="text-xl md:text-2xl font-semibold text-cyan-400 mb-3 flex items-center justify-center md:justify-start gap-3">
              <FaCode />
              Currently Learning
            </h2>

            <ul className="text-gray-300 text-sm md:text-base leading-8 list-none">
              <li>• Full-Stack Development</li>
              <li>• Django & REST API</li>
              <li>• Advanced JavaScript & React</li>
              <li>• Backend with MySQL</li>
              <li>• UI/UX Design with Figma</li>
            </ul>
          </div>

          {/* Collaboration */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/10 p-6 rounded-3xl shadow-lg hover:scale-105 duration-300">
            <h2 className="text-xl md:text-2xl font-semibold text-cyan-400 mb-3">
              🤝 Collaboration
            </h2>

            <p className="text-gray-300 text-sm md:text-base leading-7">
              I'm always excited to collaborate on beginner-friendly open
              source projects, web development ideas, hackathons, and tech
              communities.
            </p>
          </div>

        </div>

        {/* Right Side */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/10 p-6 md:p-8 rounded-3xl shadow-lg">

          <h2 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-8 text-center">
            Skills & Technologies
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 text-sm md:text-base">

            {/* React */}
            <div className="flex flex-col items-center bg-black/40 p-4 rounded-2xl hover:bg-cyan-500/20 duration-300">
              <FaReact className="text-4xl text-cyan-400 mb-2" />
              <p>React JS</p>
            </div>

            {/* JavaScript */}
            <div className="flex flex-col items-center bg-black/40 p-4 rounded-2xl hover:bg-yellow-500/20 duration-300">
              <SiJavascript className="text-4xl text-yellow-400 mb-2" />
              <p>JavaScript</p>
            </div>

            {/* Python */}
            <div className="flex flex-col items-center bg-black/40 p-4 rounded-2xl hover:bg-blue-500/20 duration-300">
              <FaPython className="text-4xl text-blue-400 mb-2" />
              <p>Python</p>
            </div>

            {/* Django */}
            <div className="flex flex-col items-center bg-black/40 p-4 rounded-2xl hover:bg-green-500/20 duration-300">
              <SiDjango className="text-4xl text-green-400 mb-2" />
              <p>Django</p>
            </div>   

            {/* MySQL */}
            <div className="flex flex-col items-center bg-black/40 p-4 rounded-2xl hover:bg-orange-500/20 duration-300">
              <SiMysql className="text-4xl text-orange-400 mb-2" />
              <p>MySQL</p>
            </div>

            {/* Figma */}
            <div className="flex flex-col items-center bg-black/40 p-4 rounded-2xl hover:bg-pink-500/20 duration-300">
              <FaFigma className="text-4xl text-pink-400 mb-2" />
              <p>Figma</p>
            </div>

            {/* HTML */}
            <div className="flex flex-col items-center bg-black/40 p-4 rounded-2xl hover:bg-red-500/20 duration-300">
              <FaCode className="text-4xl text-red-400 mb-2" />
              <p>HTML</p>
            </div>

            {/* CSS */}
            <div className="flex flex-col items-center bg-black/40 p-4 rounded-2xl hover:bg-blue-500/20 duration-300">
              <FaCode className="text-4xl text-blue-300 mb-2" />
              <p>CSS</p>
            </div>

            {/* Agile Scrum */}
            <div className="flex flex-col items-center bg-black/40 p-4 rounded-2xl hover:bg-white/20 duration-300">
              <FaCode className="text-4xl text-white mb-2" />
              <p>Agile Scrum</p>
            </div>

            {/* GitHub */}
            <div className="flex flex-col items-center bg-black/40 p-4 rounded-2xl hover:bg-gray-500/20 duration-300">
              <FaGithub className="text-4xl text-gray-300 mb-2" />
              <p>GitHub</p>
            </div>

          </div>

          {/* Button */}
          <div className="flex justify-center mt-10">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-cyan-500 hover:bg-cyan-600 px-5 py-2 md:px-6 md:py-3 rounded-2xl font-semibold transition duration-300 hover:scale-105 text-sm md:text-base"
            >
              <FaGithub className="text-2xl" />
              Visit GitHub
            </a> 
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;