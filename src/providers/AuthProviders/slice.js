import { createSlice } from "@reduxjs/toolkit";
const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoading: false,
  },
  reducers: {
    testRequest(state) {
      return { ...state, isLoading: true };
    },
  },
});
export const { testRequest } = authSlice.actions;
export default authSlice.reducer;
