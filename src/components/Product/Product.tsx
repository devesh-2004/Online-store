import React from "react";
import Productinfo from "./Productinfo";

const Product = ({ product1 }: any) => {
  if (!product1 || product1.length === 0) {
    return (
      <div className="p-6 text-center text-gray-600 w-full">
        No products found.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 p-6 w-full">
      {product1.map((item: any, index: number) => (
        <Productinfo
          key={index}
          img={item.img}
          title={item.title}
          star={item.star}
          reviews={item.reviews}
          prevPrice={item.prevPrice}
          newPrice={item.newPrice}
          company={item.company}
        />
      ))}
    </div>
  );
};

export default Product;
