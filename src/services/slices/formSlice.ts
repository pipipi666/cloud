import { createSlice } from "@reduxjs/toolkit";
import { TFormState } from "utils/types";

export const initialState: TFormState = {
  formMain: {
    nickname: "",
    name: "",
    surname: "",
    sex: "default",
    about: "",
    radio: "1",
  },
  formAdvantages: ["", "", ""],
  formCheckboxes: [],
  request: false,
  failed: false,
  success: false,
  error: "",
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    mainFormSet: (state, action) => {
      state.formMain[action.payload.name] = action.payload.value;
    },
    advantagesFormSet: (state, action) => {
      state.formAdvantages = action.payload;
    },
    checkboxesFormSet: (state, action) => {
      state.formCheckboxes = action.payload;
    },
  },
});

export const { mainFormSet, advantagesFormSet, checkboxesFormSet } =
  formSlice.actions;

export default formSlice.reducer;
