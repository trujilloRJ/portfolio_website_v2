import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function Hero() {
  return (
    <div className="p-4 grid md:grid-cols-[200px_600px] grid-cols-1">
      <div className="flex flex-col items-left">
        <img
          src={process.env.PUBLIC_URL + "/trujillo.jpg"}
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
        <div className="md:text-lg md:text-left mt-3 text-center">
          Right now, I'm finishing a P.hD. in Radar and Remote Sensing at
          Sapienza University of Rome and looking forward to new and exciting
          challenges.
        </div>
        <div className="flex space-x-6 items-center mt-8 md:justify-start justify-center">
          <a href="https://github.com/trujilloRJ" target="#">
            <BsGithub size={32} className="text-slate-700" />
          </a>
          <a
            href="https://www.linkedin.com/in/javier-trujillo-rodriguez/"
            target="#"
          >
            <BsLinkedin size={32} className="text-slate-700" />
          </a>
        </div>
      </div>
    </div>
  );
}
