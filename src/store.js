import { configureStore } from '@reduxjs/toolkit';
import ingredientsReducer from './services/ingredients-slice';
import constructorReducer from './services/constructor-slice';

export default configureStore({
  reducer: { initialIngredients: ingredientsReducer, constructorIngredients: constructorReducer },
  devTools: true,
});
