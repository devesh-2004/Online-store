"use client";
import { useState, useEffect } from "react";
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
  const [selectedCompany, setSelectedCompany] = useState("all"); // always lowercase

  // Re-run filter whenever a filter state changes
  useEffect(() => {
    filterProducts(
      query,
      selectedCategory,
      selectedColor,
      selectedPrice,
      selectedCompany
    );
  }, [query, selectedCategory, selectedColor, selectedPrice, selectedCompany]);

  // Centralized filtering
  const filterProducts = ( search: string, category: string, color: string, price: string, company: string ) => {
    
    let filtered = data;

    // Search filter
    if (search) {
      filtered = filtered.filter((item:any) =>
        item.company.toLowerCase().includes(search.toLowerCase()) || item.title.toLowerCase().includes(search.toLowerCase())
      );
    }
    // Category filter
    if (category !== "all") {
      filtered = filtered.filter(
        (item:any) => item.category.toLowerCase() === category.toLowerCase()
      );
    }
    // Color filter
    if (color !== "all") {
      filtered = filtered.filter(
        (item:any) => item.color.toLowerCase() === color.toLowerCase()
      );
    }
    // Company filter
    if (company !== "all") {
      filtered = filtered.filter(
        (item:any) => item.company.toLowerCase() === company.toLowerCase()
      );
    }
    // Price filter
    if (price !== "all") {
      filtered = filtered.filter((item:any) => {
        const itemPrice = parseFloat(item.newPrice); // use consistent field
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


  // Handlers only update state, filtering runs via useEffect
  const handleSearch = (query: string) => 
    setQuery(query.toLowerCase());
  const handleCategory = (category: string) =>
    setSelectedCategory(category.toLowerCase());
  const handleColor = (color: string) => setSelectedColor(color.toLowerCase());
  const handlePrice = (price: string) => setSelectedPrice(price);
  const handleCompany = (company: string) =>
    setSelectedCompany(company.toLowerCase());

  return (
    <>
      <Navbar onSearch={handleSearch} />
      <Recommended onFilterByCompany={handleCompany} />
      <main className="flex">
        <Sidebar
          onCategoryChange={handleCategory}
          onColorChange={handleColor}
          onPriceChange={handlePrice}
        />
        <Product products={products} />
      </main>
      <Footer />
    </>
  );
}