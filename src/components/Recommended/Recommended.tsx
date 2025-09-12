"use client";
import React from 'react'

const Recommended = ({onFilterByCompany}: any) => {

    const companies = ["All", "Nike", "Adidas", "Puma", "Vans"];
      return (

    <div className=" bg-gray-600 items-center flex flex-wrap justify-center h-15 gap-10">

      <div className="text-2xl font-bold ml-10 text-white">
        <p>Filter By Company</p>
      </div>


      <div className="flex gap-5">
        {companies.map((company) => (
          <button
            key={company}
            onClick={() => onFilterByCompany(company)}
            className="px-4 py-2 bg-black text-white hover:text-black-600 hover:bg-gray-800 hover:bg-gray-200 rounded-md transition-colors cursor-pointer"
          >
            {company}
          </button>
        ))}
      </div>

    </div>
  );
}   

export default Recommended