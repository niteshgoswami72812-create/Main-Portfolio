import React from 'react'
import { Link } from 'react-router-dom'
import {
  FaPhoneAlt,
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaHome,
  FaLinkedin
} from "react-icons/fa";

const Contact = () => {

  // Phone Function
  const handlePhoneClick = () => {
    window.location.href = "tel:+919753856359";
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-black via-gray-900 to-black text-white flex items-center justify-center px-4 py-6">

      {/* Main Card */}
      <div className="w-full max-w-2xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-5 sm:p-7">

        {/* Navbar */}
        <div className="flex justify-center gap-3 mb-7 flex-wrap">

          <Link
            to="/"
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105 text-sm"
          >
            <FaHome />
            Home
          </Link>

          <Link
            to="/contact"
            className="flex items-center gap-2 bg-red-500 px-4 py-2 rounded-xl shadow-lg text-sm"
          >
            <FaEnvelope />
            Contact
          </Link>

        </div>
 
        {/* Heading */}
        <h1 className="text-2xl sm:text-4xl font-bold text-center mb-2">
          Contact Me
        </h1>

        <p className="text-center text-gray-300 mb-7 text-sm">
          Feel free to connect with me anytime 🚀
        </p>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 gap-4">

          {/* Phone */}
          <Link
            to="#"
            onClick={handlePhoneClick}
            className="w-full flex items-center gap-3 bg-white/10 hover:bg-green-500/20 p-4 rounded-2xl transition-all duration-300 hover:scale-[1.01] shadow-lg"
          >

            <div className="bg-green-500 p-3 rounded-full flex items-center justify-center">
              <FaPhoneAlt className="text-lg" />
            </div>

            <div>
              <h2 className="text-base font-semibold">
                Phone
              </h2>

              <p className="text-gray-300 text-sm break-all">
                +91 9753856359
              </p>
            </div>

          </Link>

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
            className="w-full flex items-center gap-3 bg-white/10 hover:bg-red-500/20 p-4 rounded-2xl transition-all duration-300 hover:scale-[1.01] shadow-lg"
          >

            <div className="bg-red-500 p-3 rounded-full flex items-center justify-center">
              <FaEnvelope className="text-lg" />
            </div>

            <div>
              <h2 className="text-base font-semibold">
                Email
              </h2>

              <p className="text-gray-300 text-sm break-all">
                niteshgoswami72812@gmail.com
              </p>
            </div>

          </Link>

        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mt-8 flex-wrap">

          {/* Github */}
          <Link
            to="https://github.com/"
            target="_blank"
            className="bg-white/10 hover:bg-gray-500 p-3 rounded-full text-xl transition-all duration-300 hover:scale-110 shadow-lg"
          >
            <FaGithub />
          </Link>

          {/* Instagram */}
          <Link
            to="https://instagram.com/"
            target="_blank"
            className="bg-white/10 hover:bg-pink-500 p-3 rounded-full text-xl transition-all duration-300 hover:scale-110 shadow-lg"
          >
            <FaInstagram />
          </Link>

          {/* LinkedIn */}
          <Link
            to="https://www.linkedin.com/in/nitesh-goswami-b09324312/"
            target="_blank"
            className="bg-white/10 hover:bg-blue-500 p-3 rounded-full text-xl transition-all duration-300 hover:scale-110 shadow-lg"
          >
            <FaLinkedin />
          </Link>

        </div>

      </div>
    </div>
  )
}

export default Contact