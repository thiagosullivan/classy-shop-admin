import React from "react";
import { FaRegImages } from "react-icons/fa6";

export const UploadBox = ({ multiple }) => {
  return (
    <div className="uploadBox p-3 rounded-md overflow-hidden border border-dashed border-[rgba(0,0,0,0.3)] h-[150px] w-[170px] bg-gray-100 cursor-pointer flex items-center justify-center flex-col relative">
      <FaRegImages className="text-4xl opacity-35 pointer-events-none" />
      <h4 className="text-sm pointer-events-none">Image Upload</h4>

      <input
        type="file"
        multiple={multiple !== undefined ? multiple : false}
        className="absolute top-0 left-0 w-full h-full z-50 opacity-0"
      />
    </div>
  );
};
