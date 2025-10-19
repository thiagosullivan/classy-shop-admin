import { Button, Checkbox, FormControlLabel } from "@mui/material";
import React from "react";
import { CgLogIn } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

export const LoginPage = () => {
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
        <div className="flex gap-4">
          <Button className="!bg-primary !text-white !px-5 !py-2">
            Login com Google
          </Button>
          <Button className="!bg-primary !text-white !px-5 !py-2">
            Login com Facebook
          </Button>
        </div>
        <p>or login with e-mail</p>
        <form className="w-[500px]">
          <div className="form-group mb-4 w-full">
            <h4 className="text-sm font-medium mb-1">Email</h4>
            <input
              type="email"
              className="w-full h-[45px] border-2 border-[rgba(0,0,0,0.1)] rounded-md"
            />
          </div>
          <div className="form-group mb-4 w-full">
            <h4 className="text-sm font-medium mb-1">Password</h4>
            <input
              type="password"
              className="w-full h-[45px] border-2 border-[rgba(0,0,0,0.1)] rounded-md"
            />
          </div>
          <div className="form-group mb-4 w-full flex items-center justify-between">
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Remember Me"
            />
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
          <Button className="!bg-primary !text-white w-full">Sign In</Button>
        </form>
      </main>
    </section>
  );
};
