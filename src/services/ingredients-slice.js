import getIngredients from '@/utils/api';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getIngredientsThunk = createAsyncThunk('ingredients/get-ingredients', async () => {
  const { data } = await getIngredients();
  return data;
});

export const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState: {
    entities: [],
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getIngredientsThunk.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(getIngredientsThunk.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.entities = action.payload;
      })
      .addCase(getIngredientsThunk.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});
