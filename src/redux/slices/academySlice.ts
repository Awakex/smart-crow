import { createSlice } from "@reduxjs/toolkit";
import { getAcademyBlocks } from "../thunks/academyThunk";
import { IAcademyBlock } from "../../types/IAcademyBlock";

interface IAcademy {
    isAcademyLoading: boolean;
    academyBlocks: IAcademyBlock[] | undefined;
}

const initialState: IAcademy = {
    academyBlocks: undefined,
    isAcademyLoading: false,
};

export const academySlice = createSlice({
    name: "academy",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAcademyBlocks.fulfilled, (state, action) => {
            state.academyBlocks = action.payload;
            state.isAcademyLoading = false;
        });
        builder.addCase(getAcademyBlocks.pending, (state) => {
            state.isAcademyLoading = true;
        });
        builder.addCase(getAcademyBlocks.rejected, (state) => {
            state.isAcademyLoading = false;
        });
    },
});

export const {} = academySlice.actions;

export default academySlice.reducer;
