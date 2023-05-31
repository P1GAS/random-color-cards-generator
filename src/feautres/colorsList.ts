import { createSlice } from "@reduxjs/toolkit";

const generateRandomColor = () =>
  "#" + Math.floor(Math.random() * 16777215).toString(16);

interface IColorsListSlice {
  colorsList: { key: number; color: string }[];
}

const colorsListSlice = createSlice({
  name: "common",
  initialState: {
    colorsList: [],
  } as IColorsListSlice,
  reducers: {
    generateNewColor(state) {
      state.colorsList = [
        { color: generateRandomColor(), key: Math.random() },
        ...state.colorsList,
      ];
    },
    deleteLastColor(state) {
      state.colorsList = state.colorsList.slice(0, -1);
    },
  },
});

export const { generateNewColor, deleteLastColor } = colorsListSlice.actions;
export default colorsListSlice.reducer;
