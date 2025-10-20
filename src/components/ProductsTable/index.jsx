import { Button, Checkbox, Tooltip } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { ProgressBar } from "../ProgressBar";
import { AiOutlineEdit } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa";
import { GoTrash } from "react-icons/go";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export const ProductsTable = () => {
  return (
    <div className="flex flex-col gap-4 !mt-8 w-full">
      <div className="flex justify-between">
        <div>Category by</div>
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Search product"
            className="w-[200px] border border-[rgba(0,0,0,0.2)] px-5 py-2"
          />
        </div>
      </div>
      <div className="relative overflow-x-auto mt-5 pb-5">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                <div className="w-[60px]">
                  <Checkbox {...label} />
                </div>
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                Product
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                Category
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                Sub Category
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                Price
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                Sales
              </th>
              {/* <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Rating
                </th> */}
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-white border-b border-gray-400">
              <td className="px-6 py-2">
                <div className="w-[60px]">
                  <Checkbox {...label} />
                </div>
              </td>

              <td className="px-6 py-2">
                <div className="flex items-center gap-4">
                  <div className="img w-[65px] h-[65px] rounded-md overflow-hidden">
                    <img
                      src="https://ecme-react.themenate.net/img/products/product-1.jpg"
                      className="w-full"
                    />
                  </div>
                  <div className="info w-[75%]">
                    <h3 className="font-bold text-xs">
                      <Link to="/">
                        VNEED Women Embroidered Rayon Kurta Pant Set | Kurta set
                        for Women
                      </Link>
                    </h3>
                    <p className="text-xs">Books</p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-2">Eletronics</td>
              <td className="px-6 py-2">Women</td>
              <td className="px-6 py-2">$58,00</td>
              <td className="px-6 py-2">
                <p className="text-sm w-[150px]">
                  <span className="mb-1">234</span>
                </p>
                <ProgressBar value={50} type="success" />
              </td>
              <td className="px-6 py-2">
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
            <tr className="odd:bg-white border-b border-gray-400">
              <td className="px-6 py-2">
                <div className="w-[60px]">
                  <Checkbox {...label} />
                </div>
              </td>

              <td className="px-6 py-2">
                <div className="flex items-center gap-4">
                  <div className="img w-[65px] h-[65px] rounded-md overflow-hidden">
                    <img
                      src="https://ecme-react.themenate.net/img/products/product-1.jpg"
                      className="w-full"
                    />
                  </div>
                  <div className="info w-[75%]">
                    <h3 className="font-bold text-xs">
                      <Link to="/">
                        VNEED Women Embroidered Rayon Kurta Pant Set | Kurta set
                        for Women
                      </Link>
                    </h3>
                    <p className="text-xs">Books</p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-2">Eletronics</td>
              <td className="px-6 py-2">Women</td>
              <td className="px-6 py-2">$58,00</td>
              <td className="px-6 py-2">
                <p className="text-sm w-[150px]">
                  <span className="mb-1">234</span>
                </p>
                <ProgressBar value={50} type="success" />
              </td>
              <td className="px-6 py-2">
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
            <tr className="odd:bg-white border-b border-gray-400">
              <td className="px-6 py-2">
                <div className="w-[60px]">
                  <Checkbox {...label} />
                </div>
              </td>

              <td className="px-6 py-2">
                <div className="flex items-center gap-4">
                  <div className="img w-[65px] h-[65px] rounded-md overflow-hidden">
                    <img
                      src="https://ecme-react.themenate.net/img/products/product-1.jpg"
                      className="w-full"
                    />
                  </div>
                  <div className="info w-[75%]">
                    <h3 className="font-bold text-xs">
                      <Link to="/">
                        VNEED Women Embroidered Rayon Kurta Pant Set | Kurta set
                        for Women
                      </Link>
                    </h3>
                    <p className="text-xs">Books</p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-2">Eletronics</td>
              <td className="px-6 py-2">Women</td>
              <td className="px-6 py-2">$58,00</td>
              <td className="px-6 py-2">
                <p className="text-sm w-[150px]">
                  <span className="mb-1">234</span>
                </p>
                <ProgressBar value={50} type="success" />
              </td>
              <td className="px-6 py-2">
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
            <tr className="odd:bg-white border-b border-gray-400">
              <td className="px-6 py-2">
                <div className="w-[60px]">
                  <Checkbox {...label} />
                </div>
              </td>

              <td className="px-6 py-2">
                <div className="flex items-center gap-4">
                  <div className="img w-[65px] h-[65px] rounded-md overflow-hidden">
                    <img
                      src="https://ecme-react.themenate.net/img/products/product-1.jpg"
                      className="w-full"
                    />
                  </div>
                  <div className="info w-[75%]">
                    <h3 className="font-bold text-xs">
                      <Link to="/">
                        VNEED Women Embroidered Rayon Kurta Pant Set | Kurta set
                        for Women
                      </Link>
                    </h3>
                    <p className="text-xs">Books</p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-2">Eletronics</td>
              <td className="px-6 py-2">Women</td>
              <td className="px-6 py-2">$58,00</td>
              <td className="px-6 py-2">
                <p className="text-sm w-[150px]">
                  <span className="mb-1">234</span>
                </p>
                <ProgressBar value={50} type="success" />
              </td>
              <td className="px-6 py-2">
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
            <tr className="odd:bg-white border-b border-gray-400">
              <td className="px-6 py-2">
                <div className="w-[60px]">
                  <Checkbox {...label} />
                </div>
              </td>

              <td className="px-6 py-2">
                <div className="flex items-center gap-4">
                  <div className="img w-[65px] h-[65px] rounded-md overflow-hidden">
                    <img
                      src="https://ecme-react.themenate.net/img/products/product-1.jpg"
                      className="w-full"
                    />
                  </div>
                  <div className="info w-[75%]">
                    <h3 className="font-bold text-xs">
                      <Link to="/">
                        VNEED Women Embroidered Rayon Kurta Pant Set | Kurta set
                        for Women
                      </Link>
                    </h3>
                    <p className="text-xs">Books</p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-2">Eletronics</td>
              <td className="px-6 py-2">Women</td>
              <td className="px-6 py-2">$58,00</td>
              <td className="px-6 py-2">
                <p className="text-sm w-[150px]">
                  <span className="mb-1">234</span>
                </p>
                <ProgressBar value={50} type="success" />
              </td>
              <td className="px-6 py-2">
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
          </tbody>
        </table>
      </div>
    </div>
  );
};
