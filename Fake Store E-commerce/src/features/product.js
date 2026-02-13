import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  product: null,
  apiError: false,
  user: [],
};

export const productFetch = createAsyncThunk("fetchAllproduct", async () => {
  const datas = await fetch(
    "https://dummyjson.com/products?limit=500&select=availabilityStatus,brand,category,description,discountPercentage,images,price,rating,returnPolicy,reviews,stock,shippingInformation,tags,thumbnail,tags,title",
  );
  console.log("this working");
  return await datas.json();
});
export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const userProduct = action.payload;
      state.user.push(userProduct);
    },
    removeProduct: (state, action) => {
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

export const { addProduct, removeProduct } = productSlice.actions;

export default productSlice.reducer;
