import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INotification } from "../../types/INotification";

interface INotifications {
    queue: Array<INotification>;
    activeNotification: INotification | undefined;
}

const initialState: INotifications = {
    queue: [],
    activeNotification: undefined,
};

const getNotificationWithHighestPriority = (state: Array<INotification>) => {
    return state.reduce((max, notification) => (max.priority ? max : notification));
};

export const notificationsSlice = createSlice({
    name: "notifications",
    initialState,
    reducers: {
        addNotificationInQueue: (state, action: PayloadAction<INotification>) => {
            state.queue.push(action.payload);
            state.activeNotification = getNotificationWithHighestPriority(state.queue);
        },
        removeNotificationFromQueue: (state, action: PayloadAction<string>) => {
            state.queue.filter((notification) => notification.key !== action.payload);
            state.activeNotification = getNotificationWithHighestPriority(state.queue);
        },
    },
});

export const { addNotificationInQueue, removeNotificationFromQueue } = notificationsSlice.actions;

export default notificationsSlice.reducer;
