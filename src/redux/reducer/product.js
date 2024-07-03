import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../Data/Data";
const initialState = {
  products: data,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addData(state, action) {
      const productId = action.payload;
      const product = state.products.find((prod) => prod.id === productId);
      if (product) {
        product.variant.push(product.variant.length + 1);
      }
    },
    addProduct(state, action) {
      const newProductId = Date.now().toString();
      const newProduct = {
        id: newProductId,
        product: null,
        variant: [1, 2],
      };
      state.products.push(newProduct);
    },
    deleteProduct(state, action) {
      debugger;
      const productIdToDelete = action.payload;
      const indexToDelete = state.products.findIndex(
        (prod) => prod.id === productIdToDelete
      );
      if (indexToDelete !== -1) {
        state.products.splice(indexToDelete, 1);
      }
    },
  },
});

export const { addData, addProduct, deleteProduct } = productSlice.actions;

export default productSlice.reducer;
