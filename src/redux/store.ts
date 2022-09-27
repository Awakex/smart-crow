import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./slices/appSlice";
import academyReducer from "./slices/academySlice";

export const store = configureStore({
    reducer: {
        app: appReducer,
        academy: academyReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
