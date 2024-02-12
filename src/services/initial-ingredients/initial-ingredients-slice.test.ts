import { getIngredients, initialState } from './initial-ingredients-slice';
import initialIngredientsReducer from './initial-ingredients-slice';
import { ingredients } from '../../mocks/ingredients-mock';

describe('initialIngredientsSlice', () => {
  it('should handle fulfilled "getIngredients" action', () => {
    const result = initialIngredientsReducer(
      initialState,
      getIngredients.fulfilled(ingredients, 'fulfilled'),
    );

    expect(result.status).toEqual('succeeded');
    expect(result.initialIngredients).toEqual(ingredients);
  });

  it('should set status to loading when "getIngredients" is pending', () => {
    const result = initialIngredientsReducer(initialState, getIngredients.pending('pending'));

    expect(result.status).toEqual('loading');
    expect(result.error).toBe('');
  });

  it('should set error message when "getIngredients" is rejected', () => {
    const errorMessage = new Error('Error fetching ingredients');

    const result = initialIngredientsReducer(
      initialState,
      getIngredients.rejected(errorMessage, 'rejected'),
    );

    expect(result.status).toEqual('failed');
    expect(result.error).toEqual(errorMessage.message);
  });
});
