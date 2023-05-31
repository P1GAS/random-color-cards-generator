import { configureStore } from "@reduxjs/toolkit";
import colorsList from "./colorsList";

export const store = configureStore({
  reducer: {
    common: colorsList,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
