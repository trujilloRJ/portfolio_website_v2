import React from "react";
import PCard from "./PCard";

export default function Projects({ projects }) {
  return (
    <div className="py-8 grid grid-cols-1 gap-3 md:grid-cols-2">
      {projects.map((proj) => (
        <PCard {...proj} />
      ))}
    </div>
  );
}
