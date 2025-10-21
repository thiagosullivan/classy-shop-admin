import React, { useState } from "react";
import { Button, Checkbox, Tooltip } from "@mui/material";

import { UploadBox } from "../../components/UploadBox";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa";
import { GoTrash } from "react-icons/go";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export const CategoryList = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="w-full flex items-center justify-between mb-5">
        <h1 className="font-bold text-xl text-gray-800">Categories</h1>
        <div className="flex items-center gap-2">
          <Button className="!bg-green-700 !text-white">Export</Button>
          <Link to="/categories">
            <Button className="!bg-blue-700 !text-white">Add Category</Button>
          </Link>
        </div>
      </div>
      <div className="w-full bg-white rounded-lg shadow overflow-hidden p-5">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-200">
              <tr>
                <th scope="col" className="px-3 py-3"></th>
                <th
                  scope="col"
                  className="px-3 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
                >
                  Category Image
                </th>
                <th
                  scope="col"
                  className="px-3 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
                >
                  Category Name
                </th>
                <th
                  scope="col"
                  className="px-3 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr
                className="border-b hover:bg-gray-50 cursor-pointer transition-colors"
                onClick={toggleOpen}
              >
                <td className="px-6 py-2 w-[100px]">
                  <div className="w-[60px]">
                    <Checkbox {...label} />
                  </div>
                </td>
                <td className="px-3 py-4 w-[400px]">
                  <img
                    src="https://t3.ftcdn.net/jpg/04/65/46/52/360_F_465465254_1pN9MGrA831idD6zIBL7q8rnZZpUCQTy.jpg"
                    className="w-[200px] rounded-md"
                  />
                </td>
                <td className="px-3 py-4 w-[400px]">
                  <p>Footwear</p>
                </td>
                <td className="px-3 py-4">
                  <div className="flex items-center gap-1">
                    <Tooltip title="Edit Product" placement="top">
                      <Button className="!w-[35px] !h-[35px] bg-[#f1f1f1] !min-w-[35px]">
                        <AiOutlineEdit className="text-[rgba(0,0,0,0.7)] text-lg" />
                      </Button>
                    </Tooltip>
                    <Tooltip title="Visualize Product" placement="top">
                      <Button className="!w-[35px] !h-[35px] bg-[#f1f1f1] !min-w-[35px]">
                        <FaRegEye className="text-[rgba(0,0,0,0.7)] text-lg" />
                      </Button>
                    </Tooltip>
                    <Tooltip title="Delete Product" placement="top">
                      <Button className="!w-[35px] !h-[35px] bg-[#f1f1f1] !min-w-[35px]">
                        <GoTrash className="text-[rgba(0,0,0,0.7)] text-lg" />
                      </Button>
                    </Tooltip>
                  </div>
                </td>
              </tr>
              <tr
                className="border-b hover:bg-gray-50 cursor-pointer transition-colors"
                onClick={toggleOpen}
              >
                <td className="px-6 py-2 w-[100px]">
                  <div className="w-[60px]">
                    <Checkbox {...label} />
                  </div>
                </td>
                <td className="px-3 py-4 w-[400px]">
                  <img
                    src="https://t3.ftcdn.net/jpg/04/65/46/52/360_F_465465254_1pN9MGrA831idD6zIBL7q8rnZZpUCQTy.jpg"
                    className="w-[200px] rounded-md"
                  />
                </td>
                <td className="px-3 py-4 w-[400px]">
                  <p>Footwear</p>
                </td>
                <td className="px-3 py-4">
                  <div className="flex items-center gap-1">
                    <Tooltip title="Edit Category" placement="top">
                      <Button className="!w-[35px] !h-[35px] bg-[#f1f1f1] !min-w-[35px]">
                        <AiOutlineEdit className="text-[rgba(0,0,0,0.7)] text-lg" />
                      </Button>
                    </Tooltip>
                    <Tooltip title="Visualize Category" placement="top">
                      <Button className="!w-[35px] !h-[35px] bg-[#f1f1f1] !min-w-[35px]">
                        <FaRegEye className="text-[rgba(0,0,0,0.7)] text-lg" />
                      </Button>
                    </Tooltip>
                    <Tooltip title="Delete Category" placement="top">
                      <Button className="!w-[35px] !h-[35px] bg-[#f1f1f1] !min-w-[35px]">
                        <GoTrash className="text-[rgba(0,0,0,0.7)] text-lg" />
                      </Button>
                    </Tooltip>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
