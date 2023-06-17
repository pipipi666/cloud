import { createSlice } from "@reduxjs/toolkit";
import { TUserState } from "utils/types";

export const initialState: TUserState = {
  info: {
    name: "Иван",
    surname: "Иванов",
    phone: "+79999999999",
    email: "tim.jennings@example.com",
  },
  media: [
    {
      name: "Telegram",
      url: "https://github.com/",
    },
    {
      name: "GitHub",
      url: "https://github.com/",
    },
    {
      name: "Resume",
      url: "https://github.com/",
    },
  ],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userFormSet: (state, action) => {
      state.info[action.payload.name] = action.payload.value;
    },
  },
});

export const { userFormSet } = userSlice.actions;

export default userSlice.reducer;
