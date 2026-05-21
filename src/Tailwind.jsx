import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './Tailwind.css'

import Image from './assets/employee1.png'
import Image2 from './assets/IMG_6509.JPG'
import Resume from './assets/Nitesh.pdf'

import {   
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaEnvelope
} from "react-icons/fa";

const Tailwind = () => {
  return (
    <>
      {/* Navbar */}
      <div className='flex flex-col md:flex-row justify-between items-center bg-black text-white p-4 fixed top-0 w-full z-50 shadow-lg gap-4 md:gap-0'>

        {/* Logo */}
        <img
          src={Image2}
          alt="Nitesh"
          className='w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white object-cover'
        />

        {/* Nav Links */}
        <ul className='flex gap-4 sm:gap-6 md:gap-8 mx-auto items-center font-medium text-sm sm:text-base flex-wrap justify-center'>

          <li className='hover:text-red-500 duration-300'>
            <Link to="/home">Home</Link>
          </li>

          <li className='hover:text-red-500 duration-300'>
            <Link to="/about">About</Link>
          </li>        

          {/* Contact Page Link */}
          <li className='hover:text-red-500 duration-300'>
            <Link to="/contact">Contact</Link>
          </li>

          {/* Resume */}
          <li className='hover:text-red-500 duration-300'>
            <Link to={Resume} target="_blank">
              Resume
            </Link>  
          </li>

        </ul>

        {/* Download Resume Button */}
        <Link to={Resume} target="_blank">
          <button
            className='bg-white text-black border border-black rounded-lg px-3 py-1.5 md:px-4 md:py-2 text-sm sm:text-base
            hover:-translate-y-2 hover:rotate-1 hover:bg-red-500 hover:text-white
            transition-all duration-300 shadow-lg'
          >
            Download Resume
          </button>
        </Link>

      </div>

      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-10 px-6 md:px-10 min-h-screen pt-44 md:pt-28 bg-gray-100 text-center lg:text-left">

        {/* Profile Image */}
        <img
          src={Image2}
          alt="Nitesh"
          className="w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] border-4 border-black rounded-full object-cover shadow-2xl" />

        {/* Content */}
        <div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black hover:text-red-500 transition duration-300 leading-tight">
            Hi there 👋 <br />
            I'm Nitesh Goswami 😎
          </h1>

          <p className="mt-4 text-base md:text-lg text-gray-700 hover:text-red-500 transition duration-300 max-w-2xl px-2 lg:px-0">
            Python Full Stack Developer |
            Passionate about building scalable applications and exploring new technologies.
          </p>

          {/* Social Buttons */}
          <div className="flex gap-4 md:gap-6 mt-8 flex-wrap justify-center lg:justify-start">

            {/* Email */}
            <Link
              to="#"
              onClick={(e) => {
                e.preventDefault();

                window.open(
                  "https://mail.google.com/mail/?view=cm&fs=1&to=niteshgoswami72812@gmail.com",
                  "_blank"
                );
              }}
              className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-2xl
              shadow-[0_10px_25px_rgba(0,0,0,0.3)]
              border border-white/40
              hover:-translate-y-2 hover:rotate-1
              hover:bg-green-400 hover:text-white
              transition-all duration-300"
            >
              <FaEnvelope size={22} />
              <span className="font-semibold text-sm sm:text-base">Email</span>
            </Link>  

            {/* Instagram */}
            <Link
              to="https://instagram.com/mr._goswami____"
              target="_blank"
              className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-2xl
              shadow-[0_10px_25px_rgba(0,0,0,0.3)]
              border border-white/40
              hover:-translate-y-2 hover:rotate-1
              hover:bg-pink-600 hover:text-white
              transition-all duration-300"
            >  
              <FaInstagram size={22} />
              <span className="font-semibold text-sm sm:text-base">Instagram</span>
            </Link>

            {/* GitHub */}
            <Link
              to="https://github.com/niteshgoswami72812-create"
              target="_blank"
              className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-2xl
              shadow-[0_10px_25px_rgba(0,0,0,0.3)]
              border border-white/40
              hover:-translate-y-2 hover:rotate-1
              hover:bg-gray-500 hover:text-white
              transition-all duration-300"
            >
              <FaGithub size={22} />
              <span className="font-semibold text-sm sm:text-base">GitHub</span>
            </Link>
     
            {/* LinkedIn */}      
            <Link  
              to="https://www.linkedin.com/in/nitesh-goswami-b09324312/"
              target="_blank"
              className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-2xl
              shadow-[0_10px_25px_rgba(0,0,0,0.3)]
              border border-white/40
              hover:-translate-y-2 hover:rotate-1
              hover:bg-blue-600 hover:text-white
              transition-all duration-300"
            >
              <FaLinkedin size={22} />
              <span className="font-semibold text-sm sm:text-base">LinkedIn</span>
            </Link>   

          </div>

        </div>   

      </div>

      {/* Nested Routes */}
      <Outlet />
    </>
  )
}

export default Tailwind