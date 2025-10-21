import React from "react";
import { UploadBox } from "../../components/UploadBox";
import { Button } from "@mui/material";

export const SubCategoryUpload = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold !mb-4">Add Sub Category</h1>

      <div className="bg-white p-5 rounded-md w-[70%]">
        <form className="w-full flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="font-medium">Category</label>
            <select
              type="text"
              className="border border-[rgba(0,0,0,0.3)] rounded-md h-[40px] px-2"
              name="category"
              id="category"
            >
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-medium">Sub Category Name</label>
            <input
              type="text"
              className="border border-[rgba(0,0,0,0.3)] rounded-md h-[40px] px-5"
            />
          </div>
          <Button className="w-full !bg-primary !text-white">
            Publish and view
          </Button>
        </form>
      </div>
    </div>
  );
};
