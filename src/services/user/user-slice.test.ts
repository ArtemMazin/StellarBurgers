import { login, logout } from './actions';
import { userSlice, setUser, setAuthChecked, initialState } from './user-slice';

describe('userSlice', () => {
  it('should handle setUser action', () => {
    const user = {
      id: '123',
      name: 'John Doe',
      email: 'john@doe.com',
    };

    const action = {
      type: setUser.type,
      payload: user,
    };

    const result = userSlice.reducer(initialState, action);

    expect(result.user).toEqual(user);
  });

  it('should handle setAuthChecked action', () => {
    const isAuthChecked = true;

    const action = {
      type: setAuthChecked.type,
      payload: isAuthChecked,
    };

    const result = userSlice.reducer(initialState, action);

    expect(result.isAuthChecked).toEqual(isAuthChecked);
  });

  it('should handle login.fulfilled action', () => {
    const user = {
      id: '123',
      name: 'Jane Doe',
      email: 'jane@doe.com',
    };

    const action = {
      type: login.fulfilled.type,
      payload: { user },
    };

    const result = userSlice.reducer(initialState, action);

    expect(result.user).toEqual(user);
  });

  it('should handle logout.fulfilled action', () => {
    const action = { type: logout.fulfilled.type };

    const result = userSlice.reducer(initialState, action);

    expect(result.user).toBeNull();
  });
});
