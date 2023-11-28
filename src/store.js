import { configureStore } from '@reduxjs/toolkit';
import { ingredientsSlice } from './services/ingredients-slice';

export default configureStore({
  reducer: ingredientsSlice.reducer,
  devTools: true,
});
