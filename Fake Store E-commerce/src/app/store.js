import { configureStore } from "@reduxjs/toolkit";
import productSliceReducer from "../features/product";

export const store = configureStore({
  reducer: {
    product: productSliceReducer,
  },
});
