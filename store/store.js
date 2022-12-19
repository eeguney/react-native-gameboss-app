import { configureStore } from "@reduxjs/toolkit";
import appSettingsSlice from "./appSettingsSlice";

export const store = configureStore({
    reducer: {
        appSettings: appSettingsSlice 
    }
})