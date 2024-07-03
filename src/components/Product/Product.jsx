import React from "react";
import ProductSide from "./ProductSide/ProductSide";
import ProductFilter from "./ProductFilter/ProductFilter";
import ProductVariant from "./ProductVariant/ProductVariant";
const Product = () => {
  return (
    <div className="flex  justify-center shadow-sm">
      <div className="bg-[#dddddd6a] w-[90%]">
        <div className="grid grid-cols-12 px-3 py-1 gap-2">
          <div className="col-span-1 ">
            <ProductSide />
          </div>
          <div className="col-span-4">
            <ProductFilter />
          </div>
          <div className="col-span-6">
            <ProductVariant />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
