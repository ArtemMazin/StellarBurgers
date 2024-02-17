import { ingredient, ingredients } from '../../mocks/ingredients-mock';
import { initialState } from './constructor-slice';
import constructorReducer from './constructor-slice';

describe('constructorSlice initialState', () => {
  afterEach(() => {
    return initialState;
  });

  it('should return default state when passed an empty action', () => {
    const result = constructorReducer(undefined, { type: 'test' });
    expect(result).toEqual(initialState);
  });

  it('should add ingredient with "addIngredient" action', () => {
    const action = {
      type: 'constructorIngredients/addIngredient',
      payload: ingredient,
    };

    const result = constructorReducer(initialState, action);

    expect(result.ingredients[0]).toEqual(ingredient);
  });

  it('should choose bun with "chooseBun" action', () => {
    const action = {
      type: 'constructorIngredients/chooseBun',
      payload: ingredient,
    };

    const result = constructorReducer(initialState, action);

    expect(result.bun).toEqual(ingredient);
  });

  it('should update ingredients with "updateIngredients" action', () => {
    const state = {
      bun: null,
      ingredients: ingredients,
    };
    const action = {
      type: 'constructorIngredients/updateIngredients',
      payload: ingredients[1],
    };

    const result = constructorReducer(state, action);

    expect(result.ingredients).toEqual(ingredients[1]);
  });

  it('should delete ingredient with "deleteIngredient" action', () => {
    const state = {
      bun: null,
      ingredients: ingredients,
    };
    const action = {
      type: 'constructorIngredients/deleteIngredient',
      payload: ingredients[1],
    };

    const result = constructorReducer(state, action);

    expect(result.ingredients).toEqual(ingredients[1]);
  });

  it('should delete all ingredients with "deleteAllIngredients" action', () => {
    const state = {
      bun: ingredient,
      ingredients: ingredients,
    };
    const action = {
      type: 'constructorIngredients/deleteAllIngredients',
    };

    const result = constructorReducer(state, action);

    expect(result).toEqual(initialState);
  });
});
