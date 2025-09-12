"use client";
import React from "react";
const Sidebar = ({ onCategoryChange, onColorChange, onPriceChange }: any) => {
  const handleCategoryChange = (e:any) => {
    onCategoryChange(e.target.value);
  };
  const handleColorChange = (e:any) => {
    onColorChange(e.target.value);
  };
  const handlePriceChange = (e:any) => {
    onPriceChange(e.target.value);
  };
  return (
    <div className="bg-gray-500 h-screen w-[15%] flex flex-col">
      
      <div className="catogery ml-10 mt-5 underline font-[arial] text-2xl font-bold">
        Category
      </div>
      <div className="text-left ml-10 mt-5 font-[arial] text-xl">
        <div>
          <input
            type="radio"
            name="category"
            id="all"
            value="all"
            defaultChecked
            onChange={handleCategoryChange}
            className="mr-5 mb-3 accent-green-400 cursor-pointer"
          />
          <label htmlFor="all">All</label>
        </div>
        <div>
          <input
            type="radio"
            name="category"
            id="sneakers"
            value="sneakers"
            onChange={handleCategoryChange}
            className="mr-5 mb-3 accent-green-400 cursor-pointer"
          />
          <label htmlFor="sneakers">Sneakers</label>
        </div>
        <div>
          <input
            type="radio"
            name="category"
            id="flats"
            value="flats"
            onChange={handleCategoryChange}
            className="mr-5 mb-3 accent-green-400 cursor-pointer"
          />
          <label htmlFor="flats">Flats</label>
        </div>
        <div>
          <input
            type="radio"
            name="category"
            id="heels"
            value="heels"
            onChange={handleCategoryChange}
            className="mr-5 mb-3 accent-green-400 cursor-pointer"
          />
          <label htmlFor="heels">Heels</label>
        </div>
      </div>

      <div className="catogery ml-10 mt-10 underline font-[arial] text-2xl font-bold">
        Color
      </div>
      <div className="text-left ml-10 mt-6 font-[arial] text-xl ">
        <div>
          <input
            type="radio"
            name="color"
            id="all-color"
            value="all"
            defaultChecked
            onChange={handleColorChange}
            className="mr-5 mb-3 accent-green-400 cursor-pointer"
          />
          <label htmlFor="all-color">All</label>
        </div>
        <div>
          <input
            type="radio"
            name="color"
            id="black"
            value="black"
            onChange={handleColorChange}
            className="mr-5 mb-3 accent-green-400 cursor-pointer"
          />
          <label htmlFor="black">Black</label>
        </div>
        <div>
          <input
            type="radio"
            name="color"
            id="blue"
            value="blue"
            onChange={handleColorChange}
            className="mr-5 mb-3 accent-green-400 cursor-pointer"
          />
          <label htmlFor="blue">Blue</label>
        </div>
        <div>
          <input
            type="radio"
            name="color"
            id="green"
            value="green"
            onChange={handleColorChange}
            className="mr-5 mb-3 accent-green-400 cursor-pointer"
          />
          <label htmlFor="green">Green</label>
        </div>
        <div>
          <input
            type="radio"
            name="color"
            id="red"
            value="red"
            onChange={handleColorChange}
            className="mr-5 mb-3 accent-green-400 cursor-pointer"
          />
          <label htmlFor="red">Red</label>
        </div>
        <div>
          <input
            type="radio"
            name="color"
            id="white"
            value="white"
            onChange={handleColorChange}
            className="mr-5 mb-3 accent-green-400 cursor-pointer"
          />
          <label htmlFor="white">White</label>
        </div>
      </div>

      <div className="Price underline font-[arial] text-2xl font-bold ml-10 mt-10">
        Price
      </div>
      <div className="text-left ml-10 mt-6 font-[arial] text-xl">
        <div>
          <input
            type="radio"
            name="price"
            id="all-price"
            value="all"
            defaultChecked
            onChange={handlePriceChange}
            className="mr-5 mb-3 accent-green-400 cursor-pointer"
          />
          <label htmlFor="all-price">All</label>
        </div>
        <div>
          <input
            type="radio"
            name="price"
            id="0-50"
            value="0-50"
            onChange={handlePriceChange}
            className="mr-5 mb-3 accent-green-400 cursor-pointer"
          />
          <label htmlFor="0-50">$0 - $50</label>
        </div>
        <div>
          <input
            type="radio"
            name="price"
            id="50-100"
            value="50-100"
            onChange={handlePriceChange}
            className="mr-5 mb-3 accent-green-400 cursor-pointer"
          />
          <label htmlFor="50-100">$50 - $100</label>
        </div>
        <div>
          <input
            type="radio"
            name="price"
            id="100-150"
            value="100-150"
            onChange={handlePriceChange}
            className="mr-5 mb-3 accent-green-400 cursor-pointer"
          />
          <label htmlFor="100-150">$100 - $150</label>
        </div>
        <div>
          <input
            type="radio"
            name="price"
            id="over150"
            value="over150"
            onChange={handlePriceChange}
            className="mr-5 mb-3 accent-green-400 cursor-pointer"
          />
          <label htmlFor="over150">Over $150</label>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;