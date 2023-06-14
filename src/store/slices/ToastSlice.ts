import { createSlice } from "@reduxjs/toolkit";

const ToastSlice = createSlice({
  name: "toast",
  initialState: {
    message: "",
    error: false,
  },
  reducers: {
    successToast(state, action) {
      state.message = action.payload.message;
      state.error = false;
    },
    errorToast(state, action) {
      state.message = action.payload.message;
      state.error = true;
    },
    defaultToast(state) {
      state.message = "";
      state.error = false;
    },
  },
});

export const { successToast, errorToast, defaultToast } = ToastSlice.actions;

export default ToastSlice;
