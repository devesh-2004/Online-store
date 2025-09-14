"use client";
import React from "react";

const Sidebar = ({ onCategoryChange, onColorChange, onPriceChange }: any) => {
  return (
    <aside className="bg-gray-500 w-full lg:w-[250px] p-6 rounded-lg lg:h-screen overflow-y-auto">
      {/* Category */}
      <div>
        <h2 className="underline font-[arial] text-xl md:text-2xl font-bold mb-4">
          Category
        </h2>
        <div className="space-y-2 text-lg md:text-xl">
          {["all", "sneakers", "flats", "heels"].map((cat) => (
            <div key={cat}>
              <input
                type="radio"
                name="category"
                id={cat}
                value={cat}
                defaultChecked={cat === "all"}
                onChange={(e) => onCategoryChange(e.target.value)}
                className="mr-3 accent-green-400 cursor-pointer"
              />
              <label htmlFor={cat} className="capitalize">
                {cat}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Color */}
      <div className="mt-8">
        <h2 className="underline font-[arial] text-xl md:text-2xl font-bold mb-4">
          Color
        </h2>
        <div className="space-y-2 text-lg md:text-xl">
          {["all", "black", "blue", "green", "red", "white"].map((clr) => (
            <div key={clr}>
              <input
                type="radio"
                name="color"
                id={clr}
                value={clr}
                defaultChecked={clr === "all"}
                onChange={(e) => onColorChange(e.target.value)}
                className="mr-3 accent-green-400 cursor-pointer"
              />
              <label htmlFor={clr} className="capitalize">
                {clr}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mt-8">
        <h2 className="underline font-[arial] text-xl md:text-2xl font-bold mb-4">
          Price
        </h2>
        <div className="space-y-2 text-lg md:text-xl">
          {[
            { id: "all-price", value: "all", label: "All" },
            { id: "0-50", value: "0-50", label: "$0 - $50" },
            { id: "50-100", value: "50-100", label: "$50 - $100" },
            { id: "100-150", value: "100-150", label: "$100 - $150" },
            { id: "over150", value: "over150", label: "Over $150" },
          ].map((price) => (
            <div key={price.id}>
              <input
                type="radio"
                name="price"
                id={price.id}
                value={price.value}
                defaultChecked={price.value === "all"}
                onChange={(e) => onPriceChange(e.target.value)}
                className="mr-3 accent-green-400 cursor-pointer"
              />
              <label htmlFor={price.id}>{price.label}</label>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
