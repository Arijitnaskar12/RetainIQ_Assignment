import React from "react";
import { IoArrowBackOutline } from "react-icons/io5";
const Header = () => {
  return (
    <div className="flex items-center justify-between px-[2rem] py-[2rem] ">
      <div className="flex items-center justify-between">
        <IoArrowBackOutline />
        <h1 className="underline text-[2rem]">Rules Creation</h1>
      </div>
      <div>
        <button className="bg-[#0e800e] text-[#ffff] px-2 py-2 rounded-sm text-[1.2rem]">
          Publish feed
        </button>
      </div>
    </div>
  );
};

export default Header;
