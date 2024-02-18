import { expect, jest, it } from '@jest/globals';
import { logout } from './actions';

global.fetch = jest.fn();

describe('logoutThunk', () => {
  it('should logout', async () => {
    (fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ success: true, message: 'User logged out' }),
    });
    const dispatch = jest.fn();
    const thunk = logout();

    await thunk(
      dispatch,
      () => ({}),
      () => ({}),
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { calls } = dispatch.mock as jest.MockedFunction<any>;

    expect(calls).toHaveLength(2);
    expect(calls[0][0].type).toEqual('user/logout/pending');
    expect(calls[1][0].type).toEqual('user/logout/fulfilled');
    expect(calls[1][0].payload).toEqual({ success: true, message: 'User logged out' });
  });

  it('should logout with rejected response', async () => {
    (fetch as jest.Mock).mockResolvedValue({
      ok: false,
    });

    const dispatch = jest.fn();
    const thunk = logout();

    await thunk(
      dispatch,
      () => ({}),
      () => ({}),
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { calls } = dispatch.mock as jest.MockedFunction<any>;

    expect(calls).toHaveLength(2);
    expect(calls[0][0].type).toEqual('user/logout/pending');
    expect(calls[1][0].type).toEqual('user/logout/rejected');
    expect(calls[1][0].meta.rejectedWithValue).toEqual(true);
  });
});
