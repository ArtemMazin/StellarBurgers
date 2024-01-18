import * as api from '@/utils/api';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const createOrder = createAsyncThunk(
  'ingredients/create-order',
  async (allID: string[], { rejectWithValue }) => {
    try {
      const { order } = await api.createOrder(allID);

      return order;
    } catch (error) {
      return rejectWithValue('Не получилось оформить заказ, попробуйте снова');
    }
  },
);

type TInitialOrderSlice = {
  order: {
    number: number;
  } | null;
  status: string;
  error: string | undefined | null;
};

const initialState: TInitialOrderSlice = {
  order: null,
  status: 'idle',
  error: null,
};

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    removeOrder(state) {
      state.order = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(createOrder.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.order = action.payload;
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { removeOrder } = orderSlice.actions;
export default orderSlice.reducer;
