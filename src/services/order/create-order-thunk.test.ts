import { expect, jest, it } from '@jest/globals';
import { createOrder } from './order-slice';

global.fetch = jest.fn();

describe('createOrderThunk', () => {
  it('should createOrder with resolved response', async () => {
    (fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ success: true, order: { number: 1 } }),
    });

    const dispatch = jest.fn();
    const thunk = createOrder(['1', '2', '3']);

    await thunk(
      dispatch,
      () => ({}),
      () => ({}),
    );

    const { calls } = dispatch.mock as jest.MockedFunction<any>;

    expect(calls).toHaveLength(2);
    expect(calls[0][0].type).toEqual('ingredients/create-order/pending');
    expect(calls[1][0].type).toEqual('ingredients/create-order/fulfilled');
    expect(calls[1][0].payload).toEqual({ number: 1 });
  });

  it('should createOrder with rejected response', async () => {
    (fetch as jest.Mock).mockResolvedValue({
      ok: false,
    });

    const dispatch = jest.fn();
    const thunk = createOrder(['1', '2', '3']);

    await thunk(
      dispatch,
      () => ({}),
      () => ({}),
    );

    const { calls } = dispatch.mock as jest.MockedFunction<any>;

    expect(calls).toHaveLength(2);
    expect(calls[0][0].type).toEqual('ingredients/create-order/pending');
    expect(calls[1][0].type).toEqual('ingredients/create-order/rejected');
    expect(calls[1][0].meta.rejectedWithValue).toEqual(true);
  });
});
