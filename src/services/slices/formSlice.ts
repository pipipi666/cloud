import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "services/store";
import { API_URL } from "utils";
import { TFormState } from "utils/types";

export const fetchForm = createAsyncThunk<{}, void, { state: RootState }>(
  "user/fetchForm",
  (_, { getState }) =>
    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...getState().form.formMain,
        phone: getState().user.info.phone,
        email: getState().user.info.email,
        radio: Number(getState().form.formMain.radio),
        advantages: getState().form.advantages.filter((x) => x.length > 0),
        checkboxes: getState().form.checks.map((x) => parseInt(x)),
      }),
    }).then((res) =>
      res.ok ? res.json() : res.json().then((err: Error) => Promise.reject(err))
    )
);

export const initialState: TFormState = {
  formMain: {
    nickname: "",
    name: "",
    surname: "",
    sex: "default",
    about: "",
    radio: "1",
  },
  advantages: ["", "", ""],
  checks: [],
  request: false,
  failed: false,
  success: false,
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    mainFormSet: (state, action) => {
      state.formMain[action.payload.name] = action.payload.value;
    },
    advantagesFormSet: (state, action) => {
      state.advantages = action.payload;
    },
    checkboxesFormSet: (state, action) => {
      state.checks = action.payload;
    },
    reset: (state) => {
      state.request = false;
      state.failed = false;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchForm.pending, (state) => {
      state.request = true;
      state.failed = false;
      state.success = false;
    });
    builder.addCase(fetchForm.fulfilled, (state) => {
      state.request = false;
      state.failed = false;
      state.success = true;
    });
    builder.addCase(fetchForm.rejected, (state) => {
      state.request = false;
      state.failed = true;
      state.success = false;
    });
  },
});

export const { mainFormSet, advantagesFormSet, checkboxesFormSet, reset } =
  formSlice.actions;

export default formSlice.reducer;
