import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserInfoAPI } from "../../core/api/user-info";

export const getUserInfo = createAsyncThunk("user-info", async (_, thunkAPI) => {
    try {
        const response = await UserInfoAPI.getUserInfo();
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue({ error: e });
    }
});
