import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./slices/formSlice";
import userReducer from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    form: formReducer,
    user: userReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
