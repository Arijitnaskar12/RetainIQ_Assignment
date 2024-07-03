import React from "react";
import { data } from "../../../Data/Data";
import { useSelector, useDispatch } from "react-redux";
import { FaPlus } from "react-icons/fa6";
import { addData } from "../../../redux/reducer/product.js";
const ProductVariant = () => {
  const data = useSelector((state) => state.product.products);
  const dispatch = useDispatch();
  const handleAdd = (id) => {
    dispatch(addData(id));
  };
  return (
    <div>
      <div className="text-center py-2">
        <div className="grid grid-cols-12 ">
          <h1 className="col-span-4 text-center">Primary Varient </h1>
          <h1 className="col-span-4 text-center">Primary Varient </h1>
          <h1 className="col-span-4 text-center">Primary Varient </h1>
        </div>
      </div>
      <div>
        <div className=" pt-[2.5rem]  ">
          {data &&
            data.map((value, i) => (
              <div key={i} className="flex min-w-[200px] gap-2 overflow-auto">
                {value.variant.map((variant, vIndex) => (
                  <>
                    <div
                      key={vIndex}
                      className="shadow-sm bg-white  min-w-[200px]  min-h-[150px] flex justify-center items-center mb-2"
                    >
                      <div className="flex justify-center items-center  px-4  py-2 shadow-sm">
                        <FaPlus />
                        <button>Add Design</button>
                      </div>
                    </div>
                  </>
                ))}
                <div className="min-w-[20px] flex justify-center items-center">
                  <button
                    className="bg-[#fff] px-2 py-2 "
                    onClick={() => handleAdd(value.id)}
                  >
                    <FaPlus />
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductVariant;
