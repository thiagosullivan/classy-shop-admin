import { Button, Checkbox, FormControlLabel } from "@mui/material";
import React from "react";
import { CgLogIn } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

export const ChangePasswordPage = () => {
  return (
    <section className="fixed top-0 left-0 w-full h-full bg-[#f1f1f1]">
      <header className="w-full fixed top-0 left-0 px-4 py-3 flex items-center justify-between z-50">
        <Link>
          <img
            src="https://isomorphic-furyroad.vercel.app/_next/static/media/logo.a795e14a.svg"
            className="w-[200px]"
          />
        </Link>
        <div className="flex items-center gap-4">
          <NavLink to="/login">
            <Button className="!rounded-full !text-[rgba(0,0,0,0.8)] !px-5 flex gap-2">
              <CgLogIn /> Login
            </Button>
          </NavLink>

          <Button className="!rounded-full !text-[rgba(0,0,0,0.8)] !px-5 flex gap-2">
            <FaRegUser /> Login
          </Button>
        </div>
      </header>

      <main className="flex items-center justify-center h-full flex-col gap-y-5">
        <div className="flex flex-col gap-1 text-center mb-5">
          <p className="font-black text-5xl">Having trouble to sign in?</p>
          <p className="font-black text-5xl">Reset your password.</p>
        </div>
        <form className="w-[500px]">
          <div className="form-group mb-4 w-full">
            <h4 className="text-sm font-medium mb-1">New Password</h4>
            <input
              type="password"
              className="w-full h-[45px] border-2 border-[rgba(0,0,0,0.1)] rounded-md p-5"
            />
          </div>
          <div className="form-group mb-4 w-full">
            <h4 className="text-sm font-medium mb-1">Confirm New Password</h4>
            <input
              type="password"
              className="w-full h-[45px] border-2 border-[rgba(0,0,0,0.1)] rounded-md p-5"
            />
          </div>
          <Button className="!bg-primary !text-white w-full">
            Change Password
          </Button>
        </form>
      </main>
    </section>
  );
};
