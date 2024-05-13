import { createSlice } from "@reduxjs/toolkit";


const ThemeSlice = createSlice({
    name: "theme",
    initialState: {
        theme: "light",
    },
    reducers: {
        setTheme: (state) => {
            state.theme = state.theme === "light" ? "dark" : "light";
        },
    },
});

export const { setTheme } = ThemeSlice.actions;
export default ThemeSlice.reducer;