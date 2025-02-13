import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: ["banana ", "apple" ,"grapesh"],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: () => {
      state.item = [];
    },
  },
});

export const { addItem, removeItem, clearItem } = cartSlice;

export default cartSlice.reducer;




