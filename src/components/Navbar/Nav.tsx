"use client";
import React from "react";
import { FaHeart, FaCartArrowDown } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

const Nav = ({ onSearch }: any) => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <nav className="bg-gray-400 w-full px-6 py-3 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
      {/* Search */}
      <div className="w-full sm:w-auto">
        <input
          type="text"
          placeholder="Search"
          className="w-full sm:w-80 bg-slate-300 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-gray-500"
          onChange={handleSearchChange}
        />
      </div>

      {/* Icons */}
      <div className="flex justify-center sm:justify-end gap-6 text-gray-800 items-center">
        <FaHeart size={26} className="cursor-pointer" />
        <FaCartArrowDown size={26} className="cursor-pointer" />
        <CgProfile size={28} className="cursor-pointer" />
      </div>
    </nav>
  );
};

export default Nav;

