"use client";
import React from "react";

const Recommended = ({ onFilterByCompany }: any) => {
  const companies = ["All", "Nike", "Adidas", "Puma", "Vans"];

  return (
    <section className="bg-gray-600 flex flex-col md:flex-row md:items-center md:justify-between gap-4 px-6 py-4">
      {/* Heading */}
      <h2 className="text-xl md:text-2xl font-bold text-white text-center md:text-left">
        Filter By Company
      </h2>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center md:justify-start gap-3">
        {companies.map((company) => (
          <button
            key={company}
            onClick={() => onFilterByCompany(company)}
            className="px-4 py-2 bg-black text-white hover:bg-gray-200 hover:text-black rounded-md transition-colors cursor-pointer text-sm md:text-base"
          >
            {company}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Recommended;