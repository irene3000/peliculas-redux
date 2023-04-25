import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    incremento: (state) => {
      console.log("state", state);
      state.value += 1;
    },
    decremento: (state) => {
      state.value -= 1;
    },
  },
});

export const { incremento, decremento } = counterSlice.actions;
