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
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      let id = action.payload;
      const updatedCart = state.cart.filter(item => item.id !== id);
      state.cart = updatedCart;
    },
    increaseQty: (state, action) => {
      let id = action.payload;
      let currentProduct = state.cart.find((item) => item.id === id);
      if (currentProduct.qty < 10) {
        currentProduct.qty = currentProduct.qty + 1;
      }
    },
    decreaseQty: (state, action) => {
      let id = action.payload;
      let currentProduct = state.cart.find((item) => item.id === id);
      if (currentProduct.qty > 0) {
        currentProduct.qty = currentProduct.qty - 1;
      }
    },
  },
});
export const { addToCart, removeFromCart, increaseQty, decreaseQty } =
  cartSlice.actions; // is ko layout ma get karenga
export default cartSlice.reducer;
