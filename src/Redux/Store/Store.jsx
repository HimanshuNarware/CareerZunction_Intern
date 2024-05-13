import { configureStore } from "@reduxjs/toolkit";

import ThemeSlice from "../Slice/ThemeSlice";

export const store = configureStore({
  reducer: {
    theme: ThemeSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
