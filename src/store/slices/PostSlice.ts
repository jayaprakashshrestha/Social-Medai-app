import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosBase from "../../axiosBase";

interface IPost {
  name: string;
  description: string;
}

interface IInitialState {
  data: IDataPosts[];
  isLoading: boolean;
  error: object | null;
}

interface IDataPosts {
  _id: string;
  name: string;
  description: string;
  time: string;
  like: number;
  postedBy: PostedBy;
  __v: number;
}

export interface PostedBy {
  _id: string;
  username: string;
  __v: number;
}
export const getPosts = createAsyncThunk("posts/fetch", () => {
  return axiosBase().get("posts");
});

export const postPosts = createAsyncThunk(
  "posts/post",
  ({ name, description }: IPost, { getState, dispatch }) => {
    console.log(name, description);
    const token = getState().users.token;

    return axiosBase(token).post("posts", { name, description });
  }
);

const initialState: IInitialState = { data: [], isLoading: false, error: null };

const PostSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addData(state, action) {
      console.log(action.payload);
      state.data = [...state.data, action.payload];
      state.isLoading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPosts.pending, (state) => {
      state.isLoading = true;
      state.error = null;
      state.data = [];
    });
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload.data.data;
      state.error = null;
    });
    builder.addCase(getPosts.rejected, (state, action) => {
      state.isLoading = false;
      state.data = [];
      state.error = { ...action.payload };
    });

    builder.addCase(postPosts.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(postPosts.fulfilled, (state, action) => {
      console.log(action.payload);
      state.data = [...state.data, action.payload.data.data];
      state.isLoading = false;
      state.error = null;
    });

    builder.addCase(postPosts.rejected, (state, action) => {
      console.log(action.payload);
      state.isLoading = false;
      state.error = null;
    });
  },
});

export const { addData } = PostSlice.actions;
export default PostSlice;
