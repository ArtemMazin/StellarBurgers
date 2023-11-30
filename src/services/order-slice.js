import { createOrder } from '@/utils/api';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const createOrderThunk = createAsyncThunk('ingredients/create-order', async (allID) => {
  const { order } = await createOrder(allID);
  return order;
});

export const orderSlice = createSlice({
  name: 'createOrder',
  initialState: {
    order: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(createOrderThunk.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(createOrderThunk.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.order = action.payload;
      })
      .addCase(createOrderThunk.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default orderSlice.reducer;
