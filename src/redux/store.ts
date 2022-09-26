import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./slices/appSlice";
import academyReducer from "./slices/academySlice";
import notificationsReducer from "./slices/notificationSlice";

export const store = configureStore({
    reducer: {
        app: appReducer,
        academy: academyReducer,
        notifications: notificationsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
