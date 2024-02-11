import { orders } from '../../mocks/orders-mock';
import { onError, onMessage, initialState } from './history-orders-slice';
import wsHistoryOrdersReducer from './history-orders-slice';

describe('historyOrdersSlice', () => {
  it('should handle onError action', () => {
    const errorMessage = 'Error connecting to socket';

    const action = {
      type: onError.type,
      payload: errorMessage,
    };

    const result = wsHistoryOrdersReducer(initialState, action);

    expect(result.wsError).toEqual(errorMessage);
  });

  it('should handle onMessage action', () => {
    const action = {
      type: onMessage.type,
      payload: { orders },
    };

    const result = wsHistoryOrdersReducer(initialState, action);

    expect(result.orders).toEqual(orders);
  });
});
