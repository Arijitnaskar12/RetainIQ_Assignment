import { configureStore } from "@reduxjs/toolkit";
import product from "./reducer/product";

const store = configureStore({
  reducer: {
    product: product,
  },
});

export default store;
