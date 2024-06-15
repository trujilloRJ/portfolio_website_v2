import React from "react";

const PubEntry = ({ title, authors, publisher, link }) => {
  return (
    <>
      <a href={link} target="#">
        <div className="text-lg underline">{title}</div>
        <div className="text-xs italic">{authors}</div>
        <div className="text-xs">{publisher}</div>
      </a>
    </>
  );
};

export default function Publications({ publications }) {
  return (
    <ol className="relative border-l dark:border-gray-700 mt-8">
      {publications.map((je) => (
        <li className="mb-5 text-white">
          <PubEntry {...je} />
        </li>
      ))}
    </ol>
  );
}
