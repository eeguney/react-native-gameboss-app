import { createSlice } from "@reduxjs/toolkit";

const appSettingsSlice = createSlice({
    name: "appSettings",
    initialState: {
        darkMode: true,
        isSignIn: false,
        accessToken: null,
        refreshToken: null,
        authenticatedUser: null,
        refreshRequired: false
    },
    reducers: {
        toggleDarkMode(state) {
            state.darkMode = !state.darkMode
        },
        setAccessToken(state, action) {
            state.accessToken = action.payload
        },
        setRefreshToken(state, action) {
            state.refreshToken = action.payload
        },
        setIsSignIn(state, action) {
            state.isSignIn = action.payload
        },
        setAuthenticatedUser(state, action) {
            state.authenticatedUser = action.payload
        },
        setRefreshRequired(state, action) {
            state.refreshRequired = action.payload
        },
    }
})

export const { toggleDarkMode, setAccessToken, setRefreshToken,  setIsSignIn, setAuthenticatedUser, setRefreshRequired } = appSettingsSlice.actions;

export const selectDarkMode = state => state.appSettings.darkMode;
export const selectAuthenticateduser = state => state.appSettings.authenticatedUser;
export const selectAccessToken = state => state.appSettings.accessToken;
export const selectRefreshToken = state => state.appSettings.refreshToken;
export const selectIsSignIn= state => state.appSettings.isSignIn;
export const selectRefreshRequired= state => state.appSettings.refreshRequired;

export default appSettingsSlice.reducer;