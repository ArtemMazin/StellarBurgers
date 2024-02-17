import { orders } from '../../mocks/orders-mock';
import { initialState } from './history-orders-slice';
import wsHistoryOrdersReducer from './history-orders-slice';

describe('historyOrdersSlice', () => {
  it('should handle onError action', () => {
    const errorMessage = 'Error connecting to socket';

    const action = {
      type: 'socket-profile-orders/onError',
      payload: errorMessage,
    };

    const result = wsHistoryOrdersReducer(initialState, action);

    expect(result.wsError).toEqual(errorMessage);
  });

  it('should handle onMessage action', () => {
    const action = {
      type: 'socket-profile-orders/onMessage',
      payload: { orders },
    };

    const result = wsHistoryOrdersReducer(initialState, action);

    expect(result.orders).toEqual(orders);
  });
});
