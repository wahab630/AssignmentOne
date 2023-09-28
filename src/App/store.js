import { combineReducers, configureStore } from "@reduxjs/toolkit";
import depositReducer from "../features/deposit/depositSlice";
import cartReducer from "../features/cart/cartSlice";
import { productApi } from "../features/productslisting/productApi";

// export const store = configureStore({
//   reducer: {
//     [productApi.reducerPath]: productApi.reducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(productApi.middleware),
// });

const rootReducer = combineReducers({
  depAmount: depositReducer, // ye wala deposit redux dev tool ma show hoga kyunka state he or value bhi wahi se are he  yaha multiple reducer a sakte he
  cart: cartReducer,
});
export const store = configureStore({
  reducer: {
    rootReducer, // es-6 ka syntax agr key or value same rakhna chahe to aik hi bar likh do wohi key or value ban jae gi
  },
});
