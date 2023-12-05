import { saveState } from '@/localstorage';
import {
  addIngredient,
  chooseBun,
  deleteAllIngredient,
  deleteIngredient,
  updateIngredients,
} from '@/services/constructor/constructor-slice';
import { removeOrder } from '@/services/order/order-slice';
import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit';

export const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);

  saveState(store.getState());

  return result;
};

// export const localStorageMiddleware = createListenerMiddleware();
// localStorageMiddleware.startListening({
//   matcher: isAnyOf(
//     addIngredient,
//     deleteIngredient,
//     chooseBun,
//     updateIngredients,
//     deleteAllIngredient,
//     removeOrder,
//   ),
//   effect: (_, listenerApi) => {
//     saveState(listenerApi.getState());

//     listenerApi.cancelActiveListeners();
//   },
// });
