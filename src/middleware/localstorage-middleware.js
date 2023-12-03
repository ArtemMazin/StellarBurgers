import { saveState } from '@/localstorage';
import {
  addIngredient,
  chooseBun,
  deleteIngredient,
} from '@/services/constructor/constructor-slice';
import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit';

export const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);

  saveState(store.getState());

  return result;
};

// export const localStorageMiddleware = createListenerMiddleware();
// localStorageMiddleware.startListening({
//   matcher: isAnyOf(addIngredient, deleteIngredient, chooseBun),
//   effect: (_, listenerApi) => {
//     saveState(listenerApi.getState());

//     listenerApi.cancelActiveListeners();
//   },
// });
