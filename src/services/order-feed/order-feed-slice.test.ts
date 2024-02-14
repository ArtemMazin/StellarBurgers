import { initialState } from './order-feed-slice';
import { orders } from '../../mocks/orders-mock';
import wsOrdersReducer from './order-feed-slice';

describe('wsOrdersSlice', () => {
  it('should handle onError action', () => {
    const errorMessage = 'Error connecting to socket';

    const action = {
      type: 'socket-orders/onError',
      payload: errorMessage,
    };

    const result = wsOrdersReducer(initialState, action);

    expect(result.wsError).toEqual(errorMessage);
  });

  it('should handle onMessage action and update state', () => {
    const action = {
      type: 'socket-orders/onMessage',
      payload: {
        orders,
        total: 10,
        totalToday: 5,
      },
    };

    const result = wsOrdersReducer(initialState, action);

    expect(result.orders).toEqual(orders);
    expect(result.total).toEqual(10);
    expect(result.totalToday).toEqual(5);
  });
});
