import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addToCart: (state, action) => {
      action.payload.qty = 1;
      // console.log("in add to cart");
      state.cart.push(action.payload);
      // console.log("after state");
    },
    removeFromCart: (state, action) => {
      let id = action.payload;
      const updatedCart = state.cart.filter((item) => item.id !== id);
      state.cart = updatedCart;
    },
    increaseQty: (state, action) => {
      let id = action.payload;
      let currentProduct = state.cart.find((item) => item.id === id);
      // if (currentProduct.qty < 10) {// before
      if (currentProduct && currentProduct.qty < 10) {
        currentProduct.qty += 1;
      }
    },
    decreaseQty: (state, action) => {
      let id = action.payload;
      let currentProduct = state.cart.find((item) => item.id === id);
      if (currentProduct && currentProduct.qty > 0) {
        currentProduct.qty -= 1;
      }
    },
  },
});
export const { addToCart, removeFromCart, increaseQty, decreaseQty } =
  cartSlice.actions; // is ko layout ma get karenga
export default cartSlice.reducer;
