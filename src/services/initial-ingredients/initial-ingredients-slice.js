import { getIngredients } from '@/utils/api';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getIngredientsThunk = createAsyncThunk('ingredients/get-ingredients', async () => {
  const { data } = await getIngredients();
  return data;
});

export const initialIngredientsSlice = createSlice({
  name: 'initialIngredients',
  initialState: {
    initialIngredients: [],
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getIngredientsThunk.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getIngredientsThunk.fulfilled, (state, action) => {
        state.error = null;
        state.status = 'succeeded';
        state.initialIngredients = action.payload;
      })
      .addCase(getIngredientsThunk.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default initialIngredientsSlice.reducer;
