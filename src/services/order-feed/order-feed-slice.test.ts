import { onError, onMessage, initialState } from './order-feed-slice';
import { orders } from '../../mocks/orders-mock';
import wsOrdersReducer from './order-feed-slice';

describe('wsOrdersSlice', () => {
  it('should handle onError action', () => {
    const errorMessage = 'Error connecting to socket';

    const action = {
      type: onError.type,
      payload: errorMessage,
    };

    const result = wsOrdersReducer(initialState, action);

    expect(result.wsError).toEqual(errorMessage);
  });

  it('should handle onMessage action and update state', () => {
    const action = {
      type: onMessage.type,
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
