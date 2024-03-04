import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { IThemeSettingsSlice } from "@/@types/IThemeSettingsSlice";

const initialState: IThemeSettingsSlice = {
    isDark: true,
    language: 'hungarian'
};

export const themeSettingsSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setIsDark: (state, actions) => {
            state.isDark = actions.payload;
        },
    },
});

export const { setIsDark } = themeSettingsSlice.actions;
//export const selectAuth = (state: RootState) => state.auth.valid;
export default themeSettingsSlice.reducer;
