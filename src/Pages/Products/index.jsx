import { Button } from "@mui/material";
import React from "react";
import { ProductsTable } from "../../components/ProductsTable";
import { Link } from "react-router-dom";

export const ProductsPage = () => {
  return (
    <>
      <div className="card bg-white shadow-md rounded-md p-5 flex flex-col items-center justify-between">
        <div className="w-full flex items-center justify-between">
          <h1 className="font-bold text-xl text-gray-800">Products</h1>
          <div className="flex items-center gap-2">
            <Button className="!bg-green-700 !text-white">Export</Button>
            <Link to="/product/upload">
              <Button className="!bg-blue-700 !text-white">Add Product</Button>
            </Link>
          </div>
        </div>

        <div className="flex w-full">
          <ProductsTable />
        </div>
      </div>
    </>
  );
};
