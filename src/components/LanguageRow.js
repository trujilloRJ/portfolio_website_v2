import React from "react";
import Badge from "./Badge";

const LANG_IMAGES = {
  python: "/python.png",
  js: "/js.png",
};

export default function LanguageRow({ language }) {
  console.log(language);
  return (
    <div className="flex space-x-4 items-center">
      <img
        src={process.env.PUBLIC_URL + LANG_IMAGES[language.name]}
        alt="..."
        class="w-8 h-8"
      />
      <div className="h-8 border-l-2 border-l-gray-400"></div>
      <div className="flex flex-wrap space-x-2">
        {language.libraries.map((libr) => (
          <Badge label={libr} />
        ))}
      </div>
    </div>
  );
}
