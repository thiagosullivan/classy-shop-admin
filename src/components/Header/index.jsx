import { Badge, Button, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import { FaRegBell, FaRegUser } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { RiMenu2Line } from "react-icons/ri";

export const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className="w-full h-[50px] bg-[#f1f1f1] flex items-center justify-between shadow-md">
      <div className="max-w-[1300px] w-full mx-auto flex items-center justify-between">
        <div className="part1">
          <Button className="!w-[40px] !h-[40px] !rounded-full !min-w-[40px] text-[rgba(0,0,0,0.8)]">
            <RiMenu2Line className="text-lg text-[rgba(0,0,0,0.8)]" />
          </Button>
        </div>
        <div className="part2 flex items-center justify-between gap-2">
          <Button className="!w-[40px] !h-[40px] !rounded-full !min-w-[40px] text-[rgba(0,0,0,0.8)]">
            <Badge badgeContent={4} color="primary">
              <FaRegBell className="text-2xl text-[rgba(0,0,0,0.8)]" />
            </Badge>
          </Button>

          <div className="rounded-full w-[40px] h-[40px] overflow-hidden cursor-pointer">
            <img
              src="https://img.cancaonova.com/cnimages/canais/uploads/sites/6/2013/12/formacao_entenda-qual-e-o-verdadeiro-papel-da-mulher-na-sociedade.jpg"
              className="w-full h-full object-cover"
              onClick={handleClick}
            />
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              className="!rounded-2xl"
            >
              <div className="flex items-center justify-between gap-x-4 pb-2 border-b border-[rgba(0,0,0,0.2)]">
                <div className="!w-[50px] !h-[50px] rounded-full overflow-hidden">
                  <img
                    src="https://img.cancaonova.com/cnimages/canais/uploads/sites/6/2013/12/formacao_entenda-qual-e-o-verdadeiro-papel-da-mulher-na-sociedade.jpg"
                    className="w-full h-full object-cover"
                    onClick={handleClick}
                  />
                </div>
                <div>
                  <p className="font-bold">Angelina Gotelli</p>
                  <p className="text-sm">admin-01@ecme.com</p>
                </div>
              </div>
              <div className="border-b border-[rgba(0,0,0,0.2)] text-[rgba(0,0,0,0.8)] py-2">
                <MenuItem onClick={handleClose}>
                  <FaRegUser className="mr-2 text-[rgba(0,0,0,0.8)]" /> Profile
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <IoSettingsOutline className="mr-2 text-[rgba(0,0,0,0.8)]" />
                  My account
                </MenuItem>
              </div>
              <MenuItem onClick={handleClose}>
                <MdLogout className="mr-2 text-[rgba(0,0,0,0.8)]" /> Logout
              </MenuItem>
            </Menu>
          </div>
        </div>
      </div>
    </header>
  );
};
