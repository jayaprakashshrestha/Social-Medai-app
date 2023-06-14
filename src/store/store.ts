import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducers";
import { persistReducer, persistStore } from "redux-persist";
import localStorage from "redux-persist/es/storage";

const persistedReducer = persistReducer(
  {
    key: "root",
    storage: localStorage,
    whitelist: ["users"],
  },
  reducer
);

const store = configureStore({ reducer: persistedReducer });

export const peristedStore = persistStore(store);

export default store;
