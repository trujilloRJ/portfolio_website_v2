import React from "react";

const ExperienceEntry = ({ time, title, location, description }) => {
  return (
    <>
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 dark:border-gray-900 dark:bg-gray-700"></div>
      <time className="mb-1 text-sm font-normal leading-none text-gray-600">
        {time}
      </time>
      <h3 className="text-lg font-bold text-gray-900">{title}</h3>
      <p className="mb-2 text-base font-normal text-gray-600">{description}</p>
      <p className="mb-4 text-sm italic text-gray-600">{location}</p>
    </>
  );
};

export default function Background({ background }) {
  return (
    <ol className="relative border-l dark:border-gray-700 mt-8">
      {background.map((je) => (
        <li className="mb-10 ml-4">
          <ExperienceEntry {...je} />
        </li>
      ))}
    </ol>
  );
}
