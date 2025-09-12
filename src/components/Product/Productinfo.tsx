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
    <>
     <div className="border border-gray-300 rounded-lg p-5 shadow-sm hover:shadow-xl transition-shadow w-[230px] h-[auto]"> 
      {/* Image */}
      <div className="mb-3">
        <img
          src={img}
          alt={title}
          loading="lazy"
          className="w-full h-auto rounded-md"
        />
      </div>
      {/* Title */}
      <h1 className="font-semibold text-lg truncate mb-1">{title}</h1>
      {/* Rating */}
      <div className="flex items-center text-sm mb-2">
        <AiFillStar className="text-yellow-400" />
        <span className="ml-1 font-medium">{star}</span>
       <span className="ml-2 text-gray-900">({reviews})</span>
      </div>
      {/* Price */}
      <div className="font-bold mb-2">
        <del className="text-gray-900 mr-2">${prevPrice}</del>
        <span className="text-green-900">${newPrice}</span>
      </div>
      {/* Company */}
      <p className="text-gray-900 text-sm">{company}</p>
   </div> 
   </>
  );
};
export default Productinfo;