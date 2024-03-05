import { createSlice } from '@reduxjs/toolkit';
import { IThemeSettingsSlice } from '@/@types/IThemeSettingsSlice';

const initialState: IThemeSettingsSlice = {
    isDark: true,
    language: 'hungarian',
};

export const themeSettingsSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setIsDark: (state, actions) => {
            state.isDark = actions.payload;
        },
    },
});

export const { setIsDark } = themeSettingsSlice.actions;
export default themeSettingsSlice.reducer;