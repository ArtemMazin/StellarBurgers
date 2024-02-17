import { initialState } from './initial-ingredients-slice';
import initialIngredientsReducer from './initial-ingredients-slice';
import { ingredients } from '../../mocks/ingredients-mock';
import { expect, it } from '@jest/globals';

describe('initialIngredientsSlice', () => {
  it('should handle fulfilled "getIngredients" action', () => {
    const action = {
      type: 'ingredients/get-ingredients/fulfilled',
      payload: ingredients,
    };

    const result = initialIngredientsReducer(initialState, action);

    expect(result.status).toEqual('succeeded');
    expect(result.initialIngredients).toEqual(ingredients);
  });

  it('should set status to loading when "getIngredients" is pending', () => {
    const action = {
      type: 'ingredients/get-ingredients/pending',
    };

    const result = initialIngredientsReducer(initialState, action);

    expect(result.status).toEqual('loading');
    expect(result.error).toBe('');
  });

  it('should set error message when "getIngredients" is rejected', () => {
    const errorMessage = new Error('Error fetching ingredients');

    const action = {
      type: 'ingredients/get-ingredients/rejected',
      error: errorMessage,
    };

    const result = initialIngredientsReducer(initialState, action);

    expect(result.status).toEqual('failed');
    expect(result.error).toEqual(errorMessage.message);
  });
});
