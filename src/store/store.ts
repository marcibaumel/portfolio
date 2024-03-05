import { configureStore } from '@reduxjs/toolkit'
import themeSettingsSlice from './slices/themeSettingsSlice'

export const store =  configureStore({
  reducer: {
    themeSettings: themeSettingsSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch