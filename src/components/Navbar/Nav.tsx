"use client"
import React, { useState } from 'react'
import { FaHeart, FaCartArrowDown } from 'react-icons/fa'
import { CgProfile } from 'react-icons/cg'

const Nav = ({onSearch}: any) => {
    const handleSearchChange = (e: any) => {
        onSearch(e.target.value);
    };

  return (
    <div className=" bg-gray-400 flex justify-around py-3 w-screen">
      <div className="">
        <input
          type="text"
          placeholder="Search"
          className="bg-slate-300 border border-gray-300 rounded-md py-1 px-6"
          onChange={handleSearchChange}
        />
      </div>
      <div className="logo flex gap-4 text-white items-center cursor-pointer">
        <FaHeart size={30} title="Wishlist" color="black" />
        <FaCartArrowDown size={30} title="Cart" color="black" />
        <CgProfile size={30} title="Profile" color="black" />
      </div>
    </div>
  );
}

export default Nav;