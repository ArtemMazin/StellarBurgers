import * as api from '@/utils/api-ingredients';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const createOrder = createAsyncThunk('ingredients/create-order', async (allID) => {
  if (!allID) throw new Error('Выберите булку и ингредиенты');
  const { order } = await api.createOrder(allID);
  return order;
});

export const orderSlice = createSlice({
  name: 'order',
  initialState: {
    order: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    removeOrder: {
      reducer: (state) => {
        state.order = null;
      },
    },
  },
  extraReducers(builder) {
    builder
      .addCase(createOrder.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.order = action.payload;
        state.error = null;
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { removeOrder } = orderSlice.actions;
export default orderSlice.reducer;
