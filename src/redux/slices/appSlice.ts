import { createSlice } from "@reduxjs/toolkit";
import { getUserInfo } from "../thunks/appThunk";
import { IUserInfo } from "../../types/IUserInfo";

interface IApp {
    isAppLoading: boolean;
    isAppReady: boolean;
    isUserLoading: boolean;
    user: IUserInfo | undefined;
    isTabsOpen: boolean;
}

const initialState: IApp = {
    isAppLoading: false,
    isAppReady: false,
    isUserLoading: false,
    user: undefined,
    isTabsOpen: true,
};

export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        updateIsAppLoading: (state, action) => {
            state.isAppLoading = action.payload;
        },
        updateIsAppReady: (state, action) => {
            state.isAppReady = action.payload;
        },
        updateIsTabsOpen: (state, action) => {
            state.isTabsOpen = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getUserInfo.fulfilled, (state, action) => {
            state.user = action.payload;
            state.isUserLoading = false;
        });
        builder.addCase(getUserInfo.pending, (state) => {
            state.isUserLoading = true;
        });
        builder.addCase(getUserInfo.rejected, (state) => {
            state.isUserLoading = false;
            console.log("Ошибка загрузки пользователя");
        });
    },
});

export const { updateIsAppLoading, updateIsAppReady, updateIsTabsOpen } = appSlice.actions;

export default appSlice.reducer;
