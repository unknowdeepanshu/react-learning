import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import productStore from "../productStore";

const initialState = {
  product: null,
  apiError: false,
  user: [],
};

export const productFetch = createAsyncThunk("fetchAllproduct", async () => {
  //this is api for fetch data for product
  // const res = await fetch(
  //     "https://dummyjson.com/products?limit=500&select=availabilityStatus,brand,category,description,discountPercentage,images,price,rating,returnPolicy,reviews,stock,shippingInformation,tags,thumbnail,tags,title",
  //   );
  //   console.log("local data", data);
  // const data = await res.json();
  // return data;

  return productStore[0];
});

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const exitsProduct = state.user.find(
        (goods) => goods.id === action.payload.id,
      );
      if (exitsProduct) {
        exitsProduct.number += 1;
        return;
      }
      state.user.push({
        ...action.payload,
        number: 1,
      });
      console.log(state.user);
    },
    removeProduct: (state, action) => {
      console.log("this remove", action.payload);
      state.user = state.user.filter((goods) => goods.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(productFetch.fulfilled, (state, action) => {
      state.product = action.payload;
    });
    builder.addCase(productFetch.rejected, (state, action) => {
      state.apiError = true;
    });
  },
});

export const { addProduct, increaseProduct, decreaseProduct, removeProduct } =
  productSlice.actions;

export default productSlice.reducer;
