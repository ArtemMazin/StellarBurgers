import { configureStore } from '@reduxjs/toolkit';
import ingredientsReducer from './services/ingredients-slice';
import constructorReducer from './services/constructor-slice';
import orderReducer from './services/order-slice';

export default configureStore({
  reducer: {
    initialIngredients: ingredientsReducer,
    constructorIngredients: constructorReducer,
    order: orderReducer,
  },
  devTools: true,
});
