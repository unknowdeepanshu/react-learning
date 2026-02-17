import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";

const initialState = {
  product: null,
  apiError: false,
  user: [],
};

// export const productFetch = createAsyncThunk("fetchAllproduct", async () => {
//   const datas = await fetch(
//     "https://dummyjson.com/products?limit=500&select=availabilityStatus,brand,category,description,discountPercentage,images,price,rating,returnPolicy,reviews,stock,shippingInformation,tags,thumbnail,tags,title",
//   );
//   console.log("this working");
//   return await datas.json();
// });
export const productFetch = createAsyncThunk("fetchAllproduct", async () => {
  if (localStorage.getItem("products")) {
    const data = JSON.parse(localStorage.getItem("products"));
    console.log("local data", data);
    return data;
  } else {
    const res = await fetch(
      "https://dummyjson.com/products?limit=500&select=availabilityStatus,brand,category,description,discountPercentage,images,price,rating,returnPolicy,reviews,stock,shippingInformation,tags,thumbnail,tags,title",
    );
    console.log("api data", data);

    const data = await res.json();

    localStorage.setItem("products", JSON.stringify(data));

    return data;
  }
  // const cached = localStorage.getItem("products");
  // if (cached) return JSON.parse(cached);
});

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
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
    increaseProduct: (state, action) => {},
    decreaseProduct: (state, action) => {},
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
