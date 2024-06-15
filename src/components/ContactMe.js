import React from "react";
import { GrMail } from "react-icons/gr";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const ButtonLink = ({ link, children }) => (
  <a href={link} target="#">
    <div className="bg-white w-40 justify-center py-2 px-4 flex space-x-3 rounded items-center">
      {children}
    </div>
  </a>
);

export default function ContactMe() {
  return (
    <div className="flex flex-col md:flex-row md:space-x-2 space-y-4 md:space-y-0 items-center md:justify-between">
      <div className="flex space-x-4 items-center">
        <GrMail size={32} className="" />
        <p className="">trujillorodriguezjavier@gmail.com</p>
      </div>
      <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-4">
        <ButtonLink link="https://github.com/trujilloRJ">
          <BsGithub size={28} className="text-slate-700" />
          <span className="font-bold text-sm">github</span>
        </ButtonLink>
        <ButtonLink link="https://www.linkedin.com/in/javier-trujillo-rodriguez/">
          <BsLinkedin size={28} className="text-slate-700" />
          <span className="font-bold text-sm">linkedin</span>
        </ButtonLink>
      </div>
    </div>
  );
}
