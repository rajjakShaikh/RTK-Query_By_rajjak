import { configureStore } from "@reduxjs/toolkit"; // configure the store
import { userApiSlice } from "../apislice/userApiSlice"; // this is the import file from we create the userApi component

export const store = configureStore({
  reducer: {
    [userApiSlice.reducerPath]: userApiSlice.reducer, // this is key value key in filename.reducer path and filename.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApiSlice.middleware),
});
//This middleware enables features such as caching, automatic refetching, and managing loading states for API calls made with the userApi slice.
