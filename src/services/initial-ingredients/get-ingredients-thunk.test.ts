import { getIngredients } from './initial-ingredients-slice';
import { ingredients } from '../../mocks/ingredients-mock';
import { expect, jest, it } from '@jest/globals';

global.fetch = jest.fn();

describe('getIngredientsThunk', () => {
  it('should getIngredients with resolved response', async () => {
    (fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ success: true, data: ingredients }),
    });

    const dispatch = jest.fn();
    const thunk = getIngredients();

    await thunk(
      dispatch,
      () => ({}),
      () => ({}),
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { calls } = dispatch.mock as jest.MockedFunction<any>;

    expect(calls).toHaveLength(2);
    expect(calls[0][0].type).toEqual('ingredients/get-ingredients/pending');
    expect(calls[1][0].type).toEqual('ingredients/get-ingredients/fulfilled');
    expect(calls[1][0].payload).toEqual(ingredients);
  });

  it('should getIngredients with rejected response', async () => {
    (fetch as jest.Mock).mockResolvedValue({
      ok: false,
    });

    const dispatch = jest.fn();
    const thunk = getIngredients();

    await thunk(
      dispatch,
      () => ({}),
      () => ({}),
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { calls } = dispatch.mock as jest.MockedFunction<any>;

    expect(calls).toHaveLength(2);
    expect(calls[0][0].type).toEqual('ingredients/get-ingredients/pending');
    expect(calls[1][0].type).toEqual('ingredients/get-ingredients/rejected');
    expect(calls[1][0].meta.rejectedWithValue).toEqual(true);
  });
});
