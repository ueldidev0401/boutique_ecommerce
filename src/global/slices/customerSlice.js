import { createSlice } from "@reduxjs/toolkit";

export const customerSlice = createSlice({
  name: "customer",
  initialState: {},
  reducers: {
    saveData: (state, action) => {
      state = { ...action.payload };
      return state;
    },
  },
});

const { reducer, actions } = customerSlice;
export const { saveData } = actions;
export default reducer;
