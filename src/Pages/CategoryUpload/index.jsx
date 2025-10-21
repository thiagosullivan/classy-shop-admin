import React from "react";
import { UploadBox } from "../../components/UploadBox";
import { Button } from "@mui/material";

export const CategoryUpload = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold !mb-4">Add Category</h1>

      <div className="bg-white p-5 rounded-md w-[70%]">
        <form className="w-full flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="font-medium">Category Name</label>
            <input
              type="text"
              className="border border-[rgba(0,0,0,0.3)] rounded-md h-[40px] px-5"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-medium">Color</label>
            <input
              type="text"
              className="border border-[rgba(0,0,0,0.3)] rounded-md h-[40px] px-5"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-medium">Image</label>
            <UploadBox />
          </div>
          <Button className="w-full !bg-primary !text-white">
            Publish and view
          </Button>
        </form>
      </div>
    </div>
  );
};
