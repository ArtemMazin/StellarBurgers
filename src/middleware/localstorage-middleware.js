import { saveState } from '@/localstorage';
import { addIngredient, chooseBun, deleteIngredient } from '@/services/constructor-slice';
import { createListenerMiddleware } from '@reduxjs/toolkit';

export const localStorageMiddleware = createListenerMiddleware();

localStorageMiddleware.startListening({
  actionCreator: addIngredient,
  effect: (_, listenerApi) => {
    saveState(listenerApi.getState());

    listenerApi.cancelActiveListeners();
  },
});

localStorageMiddleware.startListening({
  actionCreator: deleteIngredient,
  effect: (_, listenerApi) => {
    saveState(listenerApi.getState());

    listenerApi.cancelActiveListeners();
  },
});

localStorageMiddleware.startListening({
  actionCreator: chooseBun,
  effect: (_, listenerApi) => {
    saveState(listenerApi.getState());

    listenerApi.cancelActiveListeners();
  },
});
