import React from "react";

export default function SectionHeader({ label, color }) {
  return (
    <div className="flex items-center space-x-4">
      <div className="h-8 w-1" style={{ backgroundColor: color }} />
      <div
        className="font-bold text-slate-700 text-xl uppercase"
        style={{ color: color }}
      >
        {label}
      </div>
    </div>
  );
}
