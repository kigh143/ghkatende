import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const websiteSlice = createSlice({
  name: "website",
  initialState,
  reducers: {
    incremented(state) {
      state.value++;
    },
    decremented(state) {
      state.value--;
    },
  },
});

export const { incremented, decremented } = websiteSlice.actions;
export default websiteSlice.reducer;
