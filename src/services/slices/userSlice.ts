import { createSlice } from "@reduxjs/toolkit";
import { TUserState } from "utils/types";

export const initialState: TUserState = {
  info: {
    name: "Виталина",
    surname: "Мингазова",
    phone: "9134550372",
    email: "vitalina.mingazova@yandex.ru",
  },
  media: [
    {
      name: "Telegram",
      url: "https://t.me/piqwerty",
    },
    {
      name: "GitHub",
      url: "https://github.com/pipipi666",
    },
    {
      name: "Resume",
      url: "https://spb.hh.ru/resume/f2b5381eff09ed493a0039ed1f357854385176",
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
