import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Button, Checkbox, Pagination, Tooltip } from "@mui/material";

import { DashboardBoxes } from "../../components/DashboardBoxes";
import OrdersTable from "../../components/DashboardTable";
import { ProgressBar } from "../../components/ProgressBar";

import { FaPlus, FaRegEye } from "react-icons/fa";
import { AiOutlineEdit } from "react-icons/ai";
import { GoTrash } from "react-icons/go";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartTooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export const Dashboard = () => {
  const [chart1Data, setChart1Data] = useState([
    {
      name: "Jan",
      TotalSales: 1000,
      TotalUsers: 2400,
      amt: 2400,
    },
    {
      name: "Feb",
      TotalSales: 2000,
      TotalUsers: 1398,
      amt: 2210,
    },
    {
      name: "Mar",
      TotalSales: 3000,
      TotalUsers: 9800,
      amt: 2290,
    },
    {
      name: "Apr",
      TotalSales: 4780,
      TotalUsers: 3908,
      amt: 2000,
    },
    {
      name: "May",
      TotalSales: 10890,
      TotalUsers: 4800,
      amt: 2181,
    },
    {
      name: "Jun",
      TotalSales: 7390,
      TotalUsers: 3800,
      amt: 2500,
    },
    {
      name: "Jul",
      TotalSales: 8490,
      TotalUsers: 2150,
      amt: 2100,
    },
    {
      name: "Aug",
      TotalSales: 2490,
      TotalUsers: 4500,
      amt: 2700,
    },
    {
      name: "Sep",
      TotalSales: 2490,
      TotalUsers: 3120,
      amt: 2550,
    },
    {
      name: "Oct",
      TotalSales: 3490,
      TotalUsers: 3490,
      amt: 2810,
    },
    {
      name: "Nov",
      TotalSales: 4490,
      TotalUsers: 2200,
      amt: 2010,
    },
    {
      name: "Dec",
      TotalSales: 8490,
      TotalUsers: 5200,
      amt: 2300,
    },
  ]);

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
      <div className="bg-white p-5 border border-[rgba(0,0,0,0.2)] rounded-md mb-5">
        <h3 className="font-bold mb-5 text-2xl">Recent Orders</h3>

        <div>
          <OrdersTable />
        </div>
      </div>

      <div className="bg-white p-5 border border-[rgba(0,0,0,0.2)] rounded-md mb-5">
        <h3 className="font-bold mb-5 text-2xl">Total Users & Total Sales</h3>

        <div className="flex items-center justify-start px-5 py-5 pt-1 gap-6">
          <div className="flex items-center gap-1 text-sm">
            <span className="block w-[8px] h-[8px] rounded-full bg-[#82ca9d] mr-1"></span>
            Total Users
          </div>
          <div className="flex items-center gap-1 text-sm">
            <span className="block w-[8px] h-[8px] rounded-full bg-[#8884d8] mr-1"></span>
            Total Sales
          </div>
        </div>
        <LineChart
          style={{
            width: "100%",
            maxWidth: "700px",
            maxHeight: "70vh",
            aspectRatio: 1.618,
          }}
          responsive
          data={chart1Data}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="none" />
          <XAxis dataKey="name" tick={{ fontSize: 12 }} />
          <YAxis width="auto" tick={{ fontSize: 12 }} />
          <RechartTooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="TotalSales"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
            strokeWidth={3}
          />
          <Line
            type="monotone"
            dataKey="TotalUsers"
            stroke="#82ca9d"
            strokeWidth={3}
          />
        </LineChart>
      </div>
    </>
  );
};
