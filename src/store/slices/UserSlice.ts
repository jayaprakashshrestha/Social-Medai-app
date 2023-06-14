import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosBase from "../../axiosBase";
import { errorToast, successToast } from "./ToastSlice";

export interface Data {
  token: string;
}

export interface ResponseData {
  error: boolean;
  status: number;
  message: string;
  data: Data;
}

interface UserLoginType {
  username: string;
  password: string;
}

export const postLogin = createAsyncThunk(
  "user/logingin",
  async ({ username, password }: UserLoginType, { dispatch }) => {
    const response = await axiosBase().post("users/login", {
      username,
      password,
    });

    const { error, message } = response.data;

    if (error) dispatch(errorToast({ message }));
    else dispatch(successToast({ message }));

    return response.data;
  }
);

export const postRegister = createAsyncThunk(
  "user/registering",
  async ({ username, password }: UserLoginType, { dispatch }) => {
    const response = await axiosBase().post("users/register", {
      username,
      password,
    });
    const { error, message } = response.data;

    if (error) dispatch(errorToast({ message }));
    else dispatch(successToast({ message }));

    return response.data;
  }
);
const UserSlice = createSlice({
  name: "user",
  initialState: {
    token: "",
    isLoggedin: false,
    loading: false,
  },
  reducers: {
    logout(state) {
      state.token = "";
      state.isLoggedin = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postLogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(postLogin.fulfilled, (state, action) => {
        state.loading = false;
        const { error, data, message } = action.payload;
        if (!error) {
          state.token = data.token;
          state.isLoggedin = true;
        } else {
          console.log(action.payload);
          state.token = "";
          state.isLoggedin = false;
          state.loading = false;
        }
      })
      .addCase(postLogin.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(postRegister.pending, (state) => {
        state.loading = true;
      })
      .addCase(postRegister.fulfilled, (state, action) => {
        state.loading = false;
        const { error, message } = action.payload;
        if (!error) {
          state.token = "";
          state.isLoggedin = false;
          state.loading = false;
        } else {
          console.log(action.payload);
          state.token = "";
          state.isLoggedin = false;
          state.loading = false;
        }
      })
      .addCase(postRegister.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export const { logout } = UserSlice.actions;
export default UserSlice;
