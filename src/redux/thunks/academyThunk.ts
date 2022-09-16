import { createAsyncThunk } from "@reduxjs/toolkit";
import { AcademyAPI } from "../../core/api/academy";

export const getAcademyBlocks = createAsyncThunk(
    "academy/get/academy-blocks",
    async (_, thunkAPI) => {
        try {
            const response = await AcademyAPI.getAcademyBlocks();
            return response.data.content;
        } catch (e) {
            return thunkAPI.rejectWithValue({ error: e });
        }
    }
);
