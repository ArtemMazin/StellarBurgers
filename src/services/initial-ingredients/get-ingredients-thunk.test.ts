import { getIngredients } from './initial-ingredients-slice';
import { ingredients } from '../../mocks/ingredients-mock';
import { expect, jest, it } from '@jest/globals';

global.fetch = jest.fn();

describe('getIngredientsThunk', () => {
  it('should dispatch "getIngredients" action', async () => {
    (fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ success: true, data: ingredients }),
    });

    const dispatch = jest.fn();
    const thunk = getIngredients();

    await thunk(dispatch, {} as any, {} as any);
    const { calls } = dispatch.mock as jest.MockedFunction<any>;

    expect(calls).toHaveLength(2);
    expect(calls[0][0].type).toEqual(getIngredients.pending.type);
    expect(calls[1][0].type).toEqual(getIngredients.fulfilled.type);
    expect(calls[1][0].payload).toEqual(ingredients);
  });
});
