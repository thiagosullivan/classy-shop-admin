import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

import { FaAngleDown, FaRegImage, FaRegUser } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { TbCategory } from "react-icons/tb";
import { RiLogoutCircleRLine, RiProductHuntLine } from "react-icons/ri";
import { BsBagCheck } from "react-icons/bs";
import { Collapse } from "react-collapse";

export const Sidebar = () => {
  const [submenuIndex, setSubmenuIndex] = useState(null);

  const isOpenSubmenu = (index) => {
    if (submenuIndex === index) {
      setSubmenuIndex(null);
    } else {
      setSubmenuIndex(index);
    }
  };
  return (
    <div className="sidebar fixed p-2 top-0 left-0 bg-[#ffffff] w-[15%] h-full border-r border-[rgba(0,0,0,0.1) py-2 px-3]">
      <div className="py-2 w-full">
        <Link to="/">
          <img
            src="https://ecme-react.themenate.net/img/logo/logo-light-full.png"
            className="w-[120px]"
          />
        </Link>
      </div>

      <ul className="mt-4">
        <li>
          <Link to="/">
            <Button className="w-full !capitalize !justify-start flex gap-3 text-sm !text-[rgba(0,0,0,0.8)] !font-bold !py-2">
              <RxDashboard className="text-lg" />
              <span>Dashboard</span>
            </Button>
          </Link>
        </li>
        <li>
          <Button
            className="w-full !capitalize !justify-start items-center flex gap-3 text-sm !text-[rgba(0,0,0,0.8)] !font-bold !py-2"
            onClick={() => isOpenSubmenu(1)}
          >
            <FaRegImage className="text-lg" />
            <span>Home Slides</span>
            <span className="ml-auto w-[30px] h-[30px] flex items-center justify-center">
              <FaAngleDown
                className={`transition-all ${
                  submenuIndex === 1 ? "rotate-180" : ""
                }`}
              />
            </span>
          </Button>

          <Collapse isOpened={submenuIndex === 1 ? true : false}>
            <ul className="w-full pl-4">
              <li className="w-full text-sm">
                <Button className="!text-[rgba(0,0,0,0.8)] !capitalize !justify-start !w-full">
                  Home Banners List
                </Button>
              </li>
              <li className="w-full text-sm">
                <Button className="!text-[rgba(0,0,0,0.8)] !capitalize !justify-start !w-full">
                  Add Home Banner Slide
                </Button>
              </li>
            </ul>
          </Collapse>
        </li>
        <li>
          <Link to="/users">
            <Button className="w-full !capitalize !justify-start flex gap-3 text-sm !text-[rgba(0,0,0,0.8)] !font-bold !py-2">
              <FaRegUser className="text-lg" />
              <span>User</span>
            </Button>
          </Link>
        </li>
        <li>
          <Button
            className="w-full !capitalize !justify-start flex gap-3 text-sm !text-[rgba(0,0,0,0.8)] !font-bold !py-2"
            onClick={() => isOpenSubmenu(3)}
          >
            <RiProductHuntLine className="text-lg" />
            <span>Products</span>
            <span className="ml-auto w-[30px] h-[30px] flex items-center justify-center">
              <FaAngleDown
                className={`transition-all ${
                  submenuIndex === 3 ? "rotate-180" : ""
                }`}
              />
            </span>
          </Button>

          <Collapse isOpened={submenuIndex === 3 ? true : false}>
            <ul className="w-full pl-4">
              <li className="w-full text-sm">
                <Link to="/products">
                  <Button className="!text-[rgba(0,0,0,0.8)] !capitalize !justify-start !w-full">
                    Product List
                  </Button>
                </Link>
              </li>
              <li className="w-full text-sm">
                <Link to="/produt/upload">
                  <Button className="!text-[rgba(0,0,0,0.8)] !capitalize !justify-start !w-full">
                    Product Upload
                  </Button>
                </Link>
              </li>
            </ul>
          </Collapse>
        </li>
        <li>
          <Button
            className="w-full !capitalize !justify-start flex gap-3 text-sm !text-[rgba(0,0,0,0.8)] !font-bold !py-2"
            onClick={() => isOpenSubmenu(4)}
          >
            <TbCategory className="text-lg" />
            <span>Category</span>
            <span className="ml-auto w-[30px] h-[30px] flex items-center justify-center">
              <FaAngleDown
                className={`transition-all ${
                  submenuIndex === 4 ? "rotate-180" : ""
                }`}
              />
            </span>
          </Button>

          <Collapse isOpened={submenuIndex === 4 ? true : false}>
            <ul className="w-full pl-4">
              <li className="w-full text-sm">
                <Link to="/categories">
                  <Button className="!text-[rgba(0,0,0,0.8)] !capitalize !justify-start !w-full">
                    Category List
                  </Button>
                </Link>
              </li>
              <li className="w-full text-sm">
                <Link to="/category/add">
                  <Button className="!text-[rgba(0,0,0,0.8)] !capitalize !justify-start !w-full">
                    Add a Category
                  </Button>
                </Link>
              </li>
              <li className="w-full text-sm">
                <Link to="/category/subcategory">
                  <Button className="!text-[rgba(0,0,0,0.8)] !capitalize !justify-start !w-full">
                    Sub Category List
                  </Button>
                </Link>
              </li>
              <li className="w-full text-sm">
                <Link to="/category/subcategory/add">
                  <Button className="!text-[rgba(0,0,0,0.8)] !capitalize !justify-start !w-full">
                    Add a Sub Category
                  </Button>
                </Link>
              </li>
            </ul>
          </Collapse>
        </li>
        <li>
          <Button className="w-full !capitalize !justify-start flex gap-3 text-sm !text-[rgba(0,0,0,0.8)] !font-bold !py-2">
            <BsBagCheck className="text-lg" />
            <span>Orders</span>
            <span className="ml-auto w-[30px] h-[30px] flex items-center justify-center">
              <FaAngleDown />
            </span>
          </Button>
        </li>
        <li>
          <Button className="w-full !capitalize !justify-start flex gap-3 text-sm !text-[rgba(0,0,0,0.8)] !font-bold !py-2">
            <RiLogoutCircleRLine className="text-lg" />
            <span>Logout</span>
          </Button>
        </li>
      </ul>
    </div>
  );
};
