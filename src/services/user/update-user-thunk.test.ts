import { expect, jest, it } from '@jest/globals';
import { updateUser } from './actions';

global.fetch = jest.fn();

const updatedUser = {
  name: '<NAME>',
  email: '<EMAIL>',
  password: '<PASSWORD>',
};

describe('updateUserThunk', () => {
  it('should update user with resolved response', async () => {
    (fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(updatedUser),
    });
    const dispatch = jest.fn();
    const thunk = updateUser(updatedUser);

    await thunk(
      dispatch,
      () => ({}),
      () => ({}),
    );

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { calls } = dispatch.mock as jest.MockedFunction<any>;

    expect(calls).toHaveLength(2);
    expect(calls[0][0].type).toEqual('user/update-profile-user/pending');
    expect(calls[1][0].type).toEqual('user/update-profile-user/fulfilled');
    expect(calls[1][0].payload).toEqual(updatedUser);
  });

  it('should update user with rejected response', async () => {
    (fetch as jest.Mock).mockResolvedValue({
      ok: false,
    });

    const dispatch = jest.fn();
    const thunk = updateUser(updatedUser);

    await thunk(
      dispatch,
      () => ({}),
      () => ({}),
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { calls } = dispatch.mock as jest.MockedFunction<any>;

    expect(calls).toHaveLength(2);
    expect(calls[0][0].type).toEqual('user/update-profile-user/pending');
    expect(calls[1][0].type).toEqual('user/update-profile-user/rejected');
    expect(calls[1][0].meta.rejectedWithValue).toEqual(true);
  });
});
