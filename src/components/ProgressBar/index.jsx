import React from "react";

export const ProgressBar = ({ value, type }) => {
  return (
    <div className="w-[100px] h-auto overflow-hidden rounded-md bg-[#dadada]">
      <span
        className={`flex items-center w-[${value}%] h-[8px] ${
          type === "success" ? "bg-green-600" : "bg-blue-500"
        }`}
      ></span>
    </div>
  );
};
