import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-300 flex flex-col md:flex-row md:justify-between md:items-center gap-4 text-center md:text-left text-gray-500 px-6 md:px-12 py-8">
      {/* Copyright */}
      <div className="text-base md:text-lg font-semibold text-gray-800">
        &copy; 2025, All Rights Reserved
      </div>

      {/* Author */}
      <div className="text-sm md:text-base text-gray-600">
        Made by <span className="font-medium">Devesh Purohit</span> 😉
      </div>
    </footer>
  );
};

export default Footer;