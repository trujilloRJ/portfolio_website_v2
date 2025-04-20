import React from "react";
import { COLORS } from "../utils/constants";
import LanguageRow from "./LanguageRow";
import PButton from "./PButton";

export default function PCard({ name, desc, languages, links }) {
  const subHeadingStyle = "uppercase font-bold text-slate-700 text-sm mb-4";
  return (
    <div
      className="rounded-md shadow-lg"
      style={{ backgroundColor: COLORS.white }}
    >
      <div className="flex flex-col h-full justify-between leading-normal">
        <div className="p-4">
          <div className="text-gray-900 font-bold text-xl mb-2">{name}</div>
          <p className="text-gray-700 text-base">{desc}</p>
        </div>

        <div className="p-4">
          <div className={subHeadingStyle}>Technologies</div>
          <div className="flex flex-col space-y-4">
            {languages.map((lang) => (
              <LanguageRow language={lang} />
            ))}
          </div>
        </div>

        <div className="bg-gray-500 mt-6 p-4 rounded-md">
          <div className={subHeadingStyle} style={{ color: "#eee" }}>
            Links
          </div>
          <div className="flex space-x-4">
            {links.map((link) => (
              <PButton link={link} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
