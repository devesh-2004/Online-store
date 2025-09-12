import React from "react";
import Productinfo from "./Productinfo";

const Product = ({ products }: any) => {
  return (
    <>
      <div className="grid grid-cols-5 gap-5 p-10 w-[100%]">
        {products.map((item: any, index: any) => (
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
    </>
  );
};
export default Product;