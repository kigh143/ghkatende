import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const retoolingSlice = createSlice({
  name: "retooling",
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

export const { incremented, decremented } = retoolingSlice.actions;
export default retoolingSlice.reducer;
