import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
    correlation: undefined,
  },
  reducers: {
    toggleMenu: (state) => {
      console.log("updates the slice");
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
    setCorrelationId: (state, action) => {
      state.correlation = action.payload;
    }
  },
});


export default appSlice.reducer;
export const { toggleMenu, closeMenu, setCorrelationId } = appSlice.actions;


