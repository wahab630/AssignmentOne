import { createSlice } from "@reduxjs/toolkit";

const initialDepositState = {
  value: 0,
};

const depositSlice = createSlice({
  name: "deposit",
  initialState: initialDepositState, // initialy bank ma kuch nai he user UI se click krega to deposit hoga
  reducers: {
    deposit: (state, action) => {
      state.value += action.payload; // hardcode kr k overrite kr dia
    },
  },
});
// Action creators are generated for each case reducer function
// redux toolkit slice ma se 2 cheeza return krta he jitna b fns/Actions ha or reducers // slice return 2 things
export const { deposit } = depositSlice.actions; // is ko layout ma get karenga
export default depositSlice.reducer; // redux toolkit reducer bi return krta he
