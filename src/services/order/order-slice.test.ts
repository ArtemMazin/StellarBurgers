import { initialState } from './order-slice';
import { orders } from '../../mocks/orders-mock';
import orderReducer from './order-slice';

describe('order slice', () => {
  it('should handle fulfilled "createOrder" action', () => {
    const order = orders[0];

    const action = {
      type: 'ingredients/create-order/fulfilled',
      payload: order,
    };

    const result = orderReducer(initialState, action);

    expect(result.status).toEqual('succeeded');
    expect(result.order).toEqual(order);
  });

  it('should set status to loading when "createOrder" is pending', () => {
    const action = {
      type: 'ingredients/create-order/pending',
    };

    const result = orderReducer(initialState, action);

    expect(result.status).toEqual('loading');
  });

  it('should set error message when "createOrder" is rejected', () => {
    const errorMessage = new Error('Order creation failed');
    const action = {
      type: 'ingredients/create-order/rejected',
      error: errorMessage,
    };

    const result = orderReducer(initialState, action);

    expect(result.error).toEqual(errorMessage.message);
  });

  it('should remove order when "removeOrder" is called', () => {
    const initialStateWithOrder = { ...initialState, order: orders[0] };
    const action = { type: 'order/removeOrder' };
    const result = orderReducer(initialStateWithOrder, action);

    expect(result.order).toBeNull();
  });

  it('should set currentOrder when "getOrderById" is fulfilled', () => {
    const order = orders[0];

    const action = {
      type: 'ingredients/get-order-by-id/fulfilled',
      payload: { success: true, orders },
    };

    const result = orderReducer(initialState, action);

    expect(result.status).toEqual('succeeded');
    expect(result.currentOrder).toEqual(order);
  });
});
