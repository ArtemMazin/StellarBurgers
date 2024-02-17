import { expect, jest, it } from '@jest/globals';
import { login } from './actions';

global.fetch = jest.fn();

const user = {
  success: true,
  accessToken: 'Bearer <KEY>',
  refreshToken: '<KEY>',
  user: {
    id: '65cffc199d001001ed05ce6f',
    name: '<NAME>',
    email: '<EMAIL>',
  },
};

describe('loginThunk', () => {
  it('should login with resolved response', async () => {
    (fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(user),
    });
    const dispatch = jest.fn();
    const thunk = login({ email: '<EMAIL>', password: '<PASSWORD>' });

    await thunk(
      dispatch,
      () => ({}),
      () => ({}),
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { calls } = dispatch.mock as jest.MockedFunction<any>;

    expect(calls).toHaveLength(2);

    expect(calls[0][0].type).toEqual('user/login-user/pending');
    expect(calls[1][0].type).toEqual('user/login-user/fulfilled');
    expect(calls[1][0].payload).toEqual(user);
  });

  it('should login with rejected response', async () => {
    (fetch as jest.Mock).mockResolvedValue({
      ok: false,
    });

    const dispatch = jest.fn();
    const thunk = login({ email: '<EMAIL>', password: '<PASSWORD>' });
    await thunk(
      dispatch,
      () => ({}),
      () => ({}),
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { calls } = dispatch.mock as jest.MockedFunction<any>;

    expect(calls).toHaveLength(2);
    expect(calls[0][0].type).toEqual('user/login-user/pending');
    expect(calls[1][0].type).toEqual('user/login-user/rejected');
    expect(calls[1][0].meta.rejectedWithValue).toEqual(true);
  });
});
