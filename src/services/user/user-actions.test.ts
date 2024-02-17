import { initialState } from './user-slice';
import userSliceReducer from './user-slice';

const user = {
  id: '123',
  name: 'John Doe',
  email: 'john@doe.com',
};

const updatedUser = {
  id: '456',
  name: '<NAME>',
  email: 'jane@doe.com',
};

describe('userSlice', () => {
  it('should handle setUser action', () => {
    const action = {
      type: 'user/setUser',
      payload: user,
    };

    const result = userSliceReducer(initialState, action);

    expect(result.user).toEqual(user);
  });

  it('should handle setAuthChecked action', () => {
    const isAuthChecked = true;

    const action = {
      type: 'user/setAuthChecked',
      payload: isAuthChecked,
    };

    const result = userSliceReducer(initialState, action);

    expect(result.isAuthChecked).toEqual(isAuthChecked);
  });

  it('should handle login.fulfilled action', () => {
    const action = {
      type: 'user/login-user/fulfilled',
      payload: { user },
    };

    const result = userSliceReducer(initialState, action);

    expect(result.user).toEqual(user);
  });

  it('should handle logout.fulfilled action', () => {
    const action = { type: 'user/logout-user/fulfilled' };

    const result = userSliceReducer(initialState, action);

    expect(result.user).toBeNull();
  });

  it('should handle updateUser.fulfilled action', () => {
    const action = {
      type: 'user/update-profile-user/fulfilled',
      payload: { user: updatedUser },
    };

    const result = userSliceReducer(initialState, action);

    expect(result.user).toEqual(updatedUser);
  });

  it('should handle register.fulfilled action', () => {
    const action = {
      type: 'user/register-user/fulfilled',
      payload: { user },
    };

    const result = userSliceReducer(initialState, action);

    expect(result.user).toEqual(user);
  });
});
