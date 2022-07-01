import React from "react";
import { BsGithub } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";

const linkColor = {
  github: {
    bgcolor: "bg-gray-700",
    color: "#fff",
    hoverClassname: "hover:bg-gray-400",
    borderColor: "border-gray-900",
    icon: <BsGithub />,
  },
  website: {
    bgcolor: "bg-green-300",
    color: "#333",
    hoverClassname: "hover:bg-green-500",
    borderColor: "border-green-700",
    icon: <TbWorld size={20} />,
  },
};

export default function PButton({ link }) {
  const stl = linkColor[link.type];
  return (
    <a href={link.url} className="cursor-pointer">
      <button
        style={{ color: stl.color }}
        className={`flex items-center space-x-2 text-sm ${stl["hoverClassname"]} ${stl.bgcolor} ${stl.borderColor} font-bold py-2 px-4 border-b-4 rounded`}
      >
        {stl.icon}
        <span>{link.type}</span>
      </button>
    </a>
  );
}
