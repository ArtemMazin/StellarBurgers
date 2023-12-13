import * as api from '@/utils/api-ingredients';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getIngredients = createAsyncThunk('ingredients/get-ingredients', async () => {
  const { data } = await api.getIngredients();
  return data;
});

export const initialIngredientsSlice = createSlice({
  name: 'initialIngredients',
  initialState: {
    initialIngredients: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getIngredients.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getIngredients.fulfilled, (state, action) => {
        state.error = null;
        state.status = 'succeeded';
        state.initialIngredients = action.payload;
      })
      .addCase(getIngredients.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default initialIngredientsSlice.reducer;
