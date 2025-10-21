import React, { useState } from "react";
import { Checkbox } from "@mui/material";
import { MdOutlineEmail } from "react-icons/md";
import { BiPhone } from "react-icons/bi";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export const Users = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="card bg-white shadow-md rounded-md p-5 flex flex-col items-center justify-between">
      <div className="w-full flex items-center justify-between">
        <h1 className="font-bold text-xl text-gray-800">Users List</h1>
      </div>

      <div className="flex w-full">
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
                    User Image
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
                  >
                    User Name
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
                  >
                    User Email
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
                  >
                    User Phone
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
                  <td className="px-3 py-4">
                    <img
                      src="https://forbes.com.br/wp-content/uploads/2023/12/mulher-lidiane-jones-bumble-678x509.jpg"
                      className="w-[100px] h-[100px] rounded-md object-cover"
                    />
                  </td>
                  <td className="px-3 py-4">
                    <p>Vikas Kumar</p>
                  </td>
                  <td className="px-3 py-4">
                    <div className="flex gap-2 items-center">
                      <MdOutlineEmail />
                      <p>vikaskumar@email.com</p>
                    </div>
                  </td>
                  <td className="px-3 py-4">
                    <div className="flex gap-2 items-center">
                      <BiPhone />
                      <p>vikaskumar@email.com</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
