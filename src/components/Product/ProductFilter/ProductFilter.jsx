  import React from "react";
import { data } from "../../../Data/Data";
import { useSelector, useDispatch } from "react-redux";
const ProductFilter = () => {
  const data = useSelector((state) => state.product.products);
  return (
    <div>
      <h3 className="text-center py-2 ">Product Filter</h3>
      <div className="pt-[2.5rem]">
        <div className="flex flex-col gap-2">
          {data &&
            data.map((value, i) => (
              <div
                key={i}
                className="shadow-sm bg-[#fff] min-h-[150px] flex justify-center items-center"
              >
                {value.product !== null && value.product !== undefined ? (
                  <p>{value.product}</p>
                ) : (
                  <p className="shadow-md px-3">Add Product Filter</p>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
