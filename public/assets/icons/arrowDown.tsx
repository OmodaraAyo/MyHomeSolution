import React from "react";

export default function ArrowDropDown({ size = 24, color = "currentColor" }): React.ReactElement {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      width={size}
      viewBox="0 0 24 24"
      fill={color}
    >
      <path d="M7 10l5 5 5-5H7z" />
    </svg>
  );
}
