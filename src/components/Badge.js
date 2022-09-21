import React from "react";

const BADGES = {
  react: {
    bg_color: "#61DBFB",
    color: "#222",
  },
  python: {
    bg_color: "#306998",
    color: "#fff",
  },
  javascript: {
    bg_color: "#f0db4f",
    color: "#333",
  },
  scikit_learn: {
    bg_color: "#F89939",
    color: "#333",
  },
  pandas: {
    bg_color: "#150458",
    color: "#fff",
  },
  numpy: {
    bg_color: "#4B8BBE",
    color: "#fff",
  },
  angular: {
    bg_color: "#dd1b16",
    color: "#fff",
  },
  node: {
    bg_color: "#66cc33",
    color: "#333",
  },
  flask: {
    bg_color: "#111",
    color: "#fff",
  },
  pytorch: {
    bg_color: "#DE3412",
    color: "#fff",
  },
};

function Badge({ label }) {
  const { bg_color, color } = BADGES[label];
  return (
    <span
      className="text-xs capitalize inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded"
      style={{
        backgroundColor: bg_color,
        color: color,
      }}
    >
      {label.replace("_", "-")}
    </span>
  );
}

Badge.defaultProps = {
  label: "react",
};

export default Badge;
