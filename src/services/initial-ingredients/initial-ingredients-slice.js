import * as api from '@/utils/api';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getIngredients = createAsyncThunk(
  'ingredients/get-ingredients',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.getIngredients();

      return data;
    } catch (error) {
      return rejectWithValue('Возникла ошибка, обновите страницу');
    }
  },
);

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
        state.error = null;
      })
      .addCase(getIngredients.fulfilled, (state, action) => {
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
