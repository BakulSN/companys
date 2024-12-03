import { configureStore } from "@reduxjs/toolkit";
import companiesReducer from "./companies/companiesSlice";
import modalReducer from "./modal/modalSlice";

export const store = configureStore({
  reducer: {
    companies: companiesReducer,
    modal: modalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
