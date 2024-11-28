import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getFeedback } from "../../../Services/Apis";

const initialState = {
  feedbacks: 0,
  loading: false,
  error: null,
};

export const fetchData = createAsyncThunk(
  "PriestFeedbacks",
  async (id) => {
    const res = await getFeedback(id);
    return res.feedbacks;
  }
);

export const feedbackSlice = createSlice({
    name: 'PreistFeedbacks',
    initialState,
    extraReducers: (builder) => {
      builder
        .addCase(fetchData.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchData.fulfilled, (state, action) => {
          state.loading = false;
          state.feedbacks = action.payload;
        })
        .addCase(fetchData.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
  });

export const { reducer } = feedbackSlice.actions;
export default feedbackSlice.reducer;
