import React from "react";

export default function Section({ styles, children }) {
  return (
    <div className={styles}>
      <div className="max-w-screen-lg mx-auto py-8">{children}</div>
    </div>
  );
}
