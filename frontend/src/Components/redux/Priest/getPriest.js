import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPriests } from '../../../Services/Apis';

const initialState = {
  priests: 0,
  loading: false,
  error: null,
};

export const fetchPriestData = createAsyncThunk(
  'PriestData/fetchPriestData',
  async () => {
   
    const res = await getPriests();
    if(res) return res.priests;
  }
);

export const counterSlice = createSlice({
  name: 'PriestData',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchPriestData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPriestData.fulfilled, (state, action) => {
        state.loading = false;
        state.priests = action.payload;
      })
      .addCase(fetchPriestData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { reducer } = counterSlice.actions;
export default counterSlice.reducer;