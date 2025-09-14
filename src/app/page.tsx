"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar/Nav";
import Recommended from "@/components/Recommended/Recommended";
import Sidebar from "@/components/Sidebar/Sidebar";
import Product from "@/components/Product/Product";
import data from "@/data/data";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  const [products, setProducts] = useState(data);
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedColor, setSelectedColor] = useState("all");
  const [selectedPrice, setSelectedPrice] = useState("all");
  const [selectedCompany, setSelectedCompany] = useState("all");

  // Filtering logic
  const filterProducts = (
    search: string,
    category: string,
    color: string,
    price: string,
    company: string
  ) => {
    let filtered = data;

    if (search) {
      filtered = filtered.filter(
        (item: any) =>
          item.company.toLowerCase().includes(search.toLowerCase()) ||
          item.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category !== "all") {
      filtered = filtered.filter(
        (item: any) => item.category.toLowerCase() === category.toLowerCase()
      );
    }

    if (color !== "all") {
      filtered = filtered.filter(
        (item: any) => item.color.toLowerCase() === color.toLowerCase()
      );
    }

    if (company !== "all") {
      filtered = filtered.filter(
        (item: any) => item.company.toLowerCase() === company.toLowerCase()
      );
    }

    if (price !== "all") {
      filtered = filtered.filter((item: any) => {
        const itemPrice = parseFloat(item.newPrice);
        switch (price) {
          case "0-50":
            return itemPrice <= 50;
          case "50-100":
            return itemPrice > 50 && itemPrice <= 100;
          case "100-150":
            return itemPrice > 100 && itemPrice <= 150;
          case "over150":
            return itemPrice > 150;
          default:
            return true;
        }
      });
    }

    setProducts(filtered);
  };

  // Handlers
  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery.toLowerCase());
    filterProducts(
      searchQuery,
      selectedCategory,
      selectedColor,
      selectedPrice,
      selectedCompany
    );
  };

  const handleCategory = (category: string) => {
    setSelectedCategory(category.toLowerCase());
    filterProducts(
      query,
      category.toLowerCase(),
      selectedColor,
      selectedPrice,
      selectedCompany
    );
  };

  const handleColor = (color: string) => {
    setSelectedColor(color.toLowerCase());
    filterProducts(
      query,
      selectedCategory,
      color.toLowerCase(),
      selectedPrice,
      selectedCompany
    );
  };

  const handlePrice = (price: string) => {
    setSelectedPrice(price);
    filterProducts(
      query,
      selectedCategory,
      selectedColor,
      price,
      selectedCompany
    );
  };

  const handleCompany = (company: string) => {
    setSelectedCompany(company.toLowerCase());
    filterProducts(
      query,
      selectedCategory,
      selectedColor,
      selectedPrice,
      company.toLowerCase()
    );
  };

  return (
    <>
      <Navbar onSearch={handleSearch} />
      <Recommended onFilterByCompany={handleCompany} />

      <main className="flex flex-col lg:flex-row gap-6 px-4 md:px-8 py-6">
        {/* Sidebar */}
        <Sidebar
          onCategoryChange={handleCategory}
          onColorChange={handleColor}
          onPriceChange={handlePrice}
        />
        {/* Products */}
        <div className="flex-1">
          <Product product1={products} />
        </div>
      </main>

      <Footer />
    </>
  );
}
