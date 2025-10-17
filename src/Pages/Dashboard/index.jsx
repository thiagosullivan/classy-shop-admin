import React, { useState } from "react";
import { DashboardBoxes } from "../../components/DashboardBoxes";
import OrdersTable from "../../components/DashboardTable";
import { Button, Checkbox, Pagination, Tooltip } from "@mui/material";
import { FaPlus, FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ProgressBar } from "../../components/ProgressBar";
import { AiOutlineEdit } from "react-icons/ai";
import { GoTrash } from "react-icons/go";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export const Dashboard = () => {
  return (
    <>
      <div className="w-full p-5 border border-[rgba(0,0,0,0.2)] flex items-center gap-8 mb-5 rounded-md bg-white">
        <div className="info">
          <h1 className="font-bold text-5xl leading-12 mb-5">
            Goo Morning, <br />
            Cameron 👋
          </h1>
          <p className="mb-4">
            Here's What happening on your store today. See the statistics at
            once.
          </p>

          <Button className="!bg-primary !text-white !p-2">
            <FaPlus className="mr-2" />
            Add Product
          </Button>
        </div>
        <img
          src="https://static.vecteezy.com/system/resources/previews/026/172/293/non_2x/cartoon-style-of-cafe-front-shop-view-isolated-on-white-background-with-green-tree-and-bushes-vector.jpg"
          className="w-[300px]"
        />
      </div>
      <div className="mb-5">
        <DashboardBoxes />
      </div>
      <div className="bg-white p-5 border border-[rgba(0,0,0,0.2)] rounded-md mb-5">
        <h3 className="font-bold mb-5 text-2xl">Products</h3>

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
                          VNEED Women Embroidered Rayon Kurta Pant Set | Kurta
                          set for Women
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
                          VNEED Women Embroidered Rayon Kurta Pant Set | Kurta
                          set for Women
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
                          VNEED Women Embroidered Rayon Kurta Pant Set | Kurta
                          set for Women
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
                          VNEED Women Embroidered Rayon Kurta Pant Set | Kurta
                          set for Women
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
                          VNEED Women Embroidered Rayon Kurta Pant Set | Kurta
                          set for Women
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

        <div className="flex items-center">
          <Pagination count={10} color="primary" />
        </div>
      </div>
      <div className="bg-white p-5 border border-[rgba(0,0,0,0.2)] rounded-md">
        <h3 className="font-bold mb-5 text-2xl">Recent Orders</h3>

        <div>
          <OrdersTable />
        </div>
      </div>
    </>
  );
};
