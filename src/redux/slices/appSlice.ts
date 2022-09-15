import { createSlice } from "@reduxjs/toolkit";

interface IApp {
  value: string;
}

const initialState: IApp = {
  value: "test22",
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    updateValue: (state) => {
      state.value = "working!";
    },
  },
});

export const { updateValue } = appSlice.actions;

export default appSlice.reducer;
