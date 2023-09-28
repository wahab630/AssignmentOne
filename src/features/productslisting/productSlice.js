import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  const res = await axios.get("https://fakestoreapi.com/products");
  return res.data;
});

const initialProductsState = {
  cart: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState: initialProductsState,
  reducers: {
    getAllProducts: (state, action) => {},
    getProductById: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder// builder k sath chaining kr de ha 
      .addCase(fetchProducts.pending, (state, action) => {
        state.loading = "loading"; // data ara he
        state.products = []; // products khali he
        state.error = null; // error nai he
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products.push(action.payload);
        state.loading = "idle";
        state.error = null;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = "idle";
        state.products = [];
        state.error = action.payload;
      });
  },
});
export const { getAllProducts, getProductById } = productsSlice.actions; // is ko layout ma get karenga
export default productsSlice.reducer;
