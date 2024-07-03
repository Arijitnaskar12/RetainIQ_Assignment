import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { CgMenuGridO } from "react-icons/cg";
import { FaPlus } from "react-icons/fa6";
// import { data } from "../../../Data/Data";
import { addProduct, deleteProduct } from "../../../redux/reducer/product";
import { useSelector, useDispatch } from "react-redux";
const ProductSide = () => {
  const data = useSelector((state) => state.product.products);
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(addProduct());
  };
  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };
  return (
    <div className="pt-20 ">
      <div className="flex items-end flex-col justify-center pr-2  border-left">
       
        {data &&
          data.map((value, i) => (
            <div
              key={i}
              className="min-h-[150px] flex justify-center items-center cursor-pointer"
            >
              <div>
                <div onClick={() => handleDelete(value.id)}>
                  <RiDeleteBinLine
                    size={20}
                    style={{ color: "red", cursor: "pointer" }}
                  />
                </div>
                <div className="flex items-center">
                  <span>{i + 1}</span>
                  <CgMenuGridO size={25} />
                </div>
              </div>
            </div>
          ))}

        <div>
          <button className="shadow p-2 bg-[#fff]" onClick={handleAdd}>
            <FaPlus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductSide;
