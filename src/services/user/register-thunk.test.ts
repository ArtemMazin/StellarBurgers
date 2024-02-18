import { expect, jest, it } from '@jest/globals';
import { register } from './actions';

global.fetch = jest.fn();

const user = {
  id: '123',
  name: '<NAME>',
  email: '<EMAIL>',
};

describe('registerThunk', () => {
  it('should register with resolved response', async () => {
    (fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ success: true, user }),
    });

    const dispatch = jest.fn();
    const thunk = register({ name: '<NAME>', email: '<EMAIL>', password: '<PASSWORD>' });

    await thunk(
      dispatch,
      () => ({}),
      () => ({}),
    );

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { calls } = dispatch.mock as jest.MockedFunction<any>;

    expect(calls).toHaveLength(2);
    expect(calls[0][0].type).toEqual('user/register-user/pending');
    expect(calls[1][0].type).toEqual('user/register-user/fulfilled');
    expect(calls[1][0].payload).toEqual({
      success: true,
      user,
    });
  });

  it('should register with rejected response', async () => {
    (fetch as jest.Mock).mockResolvedValue({
      ok: false,
    });

    const dispatch = jest.fn();
    const thunk = register({ name: '<NAME>', email: '<EMAIL>', password: '<PASSWORD>' });

    await thunk(
      dispatch,
      () => ({}),
      () => ({}),
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { calls } = dispatch.mock as jest.MockedFunction<any>;

    expect(calls).toHaveLength(2);
    expect(calls[0][0].type).toEqual('user/register-user/pending');
    expect(calls[1][0].type).toEqual('user/register-user/rejected');
    expect(calls[1][0].meta.rejectedWithValue).toEqual(true);
  });
});
