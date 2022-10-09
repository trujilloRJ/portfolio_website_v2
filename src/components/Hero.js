import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaBlogger } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="p-4 grid md:grid-cols-[200px_600px] grid-cols-1">
      <div className="flex flex-col items-left">
        <img
          src={process.env.PUBLIC_URL + "/trujillo.jpg"}
          // src={process.env.PUBLIC_URL + "/foto_02.jpeg"}
          alt="..."
          class="shadow-lg rounded-lg w-40 h-40 align-middle border-none object-cover md:block hidden"
        />
        <div className="font-bold md:text-lg mt-3 text-center md:text-left text-2xl">
          Javier Trujillo
        </div>
        <div className="text-gray-700 text-center md:text-left">
          Ph.D. Student
        </div>
      </div>
      <div className="flex flex-col justify-center mt-8 md:mt-0">
        <div className="md:text-lg md:text-left text-center">
          Hi! Welcome to my portfolio website. Here, you can find a collection
          of my projects and information about my skills and background
          experience.
        </div>
        <div className="md:text-lg md:text-left mt-3 text-center hidden md:block">
          Right now, I'm finishing a P.hD. in Radar and Remote Sensing at
          Sapienza University of Rome and looking forward to new and exciting
          challenges.
        </div>
        {/* TODO: add blog link */}
        <div className="mt-8 flex">
          {/* <div className="flex space-x-2 items-center">
            <a href="https://blogmljt.netlify.app/" target="#">
              <FaBlogger size={32} className="text-slate-700" />
            </a>
            <span>Blog</span>
          </div> */}
          <div className="flex space-x-6 w-full items-center justify-center">
            <a href="https://github.com/trujilloRJ" target="#">
              <div className="flex items-center bg-gray-800 rounded-full">
                <BsGithub size={32} className="text-white" />
                <div className="py-1 px-3 text-white text-sm">github</div>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/javier-trujillo-rodriguez/"
              target="#"
            >
              <div className="flex items-center bg-[#0A66C2] rounded-full">
                <BsLinkedin size={32} color="#fff" />
                <div className="py-1 px-3 text-white text-sm">linkedin</div>
              </div>
            </a>
            <a href="https://blogjtr.com/" target="#">
              <div className="flex items-center bg-green-600 rounded-md">
                <FaBlogger size={32} className="text-white" />
                <div className="px-3 text-white text-sm">blog</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
