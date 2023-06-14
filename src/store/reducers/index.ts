import { combineReducers } from "@reduxjs/toolkit";
import PostSlice from "../slices/PostSlice";
import UserSlice from "../slices/UserSlice";
import ToastSlice from "../slices/ToastSlice";

const reducer = combineReducers({
  users: UserSlice.reducer,
  posts: PostSlice.reducer,
  toast: ToastSlice.reducer,
});

export default reducer;
