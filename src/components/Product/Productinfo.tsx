import React from "react";
import { AiFillStar } from "react-icons/ai";

const Productinfo = ({
  img,
  title,
  star,
  reviews,
  prevPrice,
  newPrice,
  company,
}: any) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 shadow-sm hover:shadow-lg transition-shadow bg-white flex flex-col">
      {/* Image */}
      <div className="mb-3 flex justify-center">
        <img
          src={img}
          alt={title}
          className="w-full h-40 object-contain rounded-md"
        />
      </div>

      {/* Title */}
      <h1 className="font-semibold text-base md:text-lg truncate mb-1">
        {title}
      </h1>

      {/* Rating */}
      <div className="flex items-center text-sm mb-2">
        <AiFillStar className="text-yellow-400" />
        <span className="ml-1 font-medium">{star}</span>
        <span className="ml-2 text-gray-700">({reviews})</span>
      </div>

      {/* Price */}
      <div className="font-bold mb-2">
        <del className="text-gray-500 mr-2">${prevPrice}</del>
        <span className="text-green-700">${newPrice}</span>
      </div>

      {/* Company */}
      <p className="text-gray-600 text-sm">{company}</p>
    </div>
  );
};

export default Productinfo;
