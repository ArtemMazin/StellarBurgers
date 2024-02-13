import { createOrder, getOrderById, initialState, removeOrder } from './order-slice';
import { orders } from '../../mocks/orders-mock';
import orderReducer from './order-slice';

describe('order slice', () => {
  it('should handle fulfilled "createOrder" action', () => {
    const order = orders[0];

    const action = {
      type: createOrder.fulfilled.type,
      payload: order,
    };

    const result = orderReducer(initialState, action);

    expect(result.status).toEqual('succeeded');
    expect(result.order).toEqual(order);
  });

  it('should set status to loading when "createOrder" is pending', () => {
    const action = {
      type: createOrder.pending.type,
    };

    const result = orderReducer(initialState, action);

    expect(result.status).toEqual('loading');
  });

  it('should set error message when "createOrder" is rejected', () => {
    const errorMessage = new Error('Order creation failed');
    const action = {
      type: createOrder.rejected.type,
      error: errorMessage,
    };

    const result = orderReducer(initialState, action);

    expect(result.error).toEqual(errorMessage.message);
  });

  it('should remove order when "removeOrder" is called', () => {
    const initialStateWithOrder = { ...initialState, order: orders[0] };
    const action = { type: removeOrder.type };
    const result = orderReducer(initialStateWithOrder, action);

    expect(result.order).toBeNull();
  });

  it('should set currentOrder when "getOrderById" is fulfilled', () => {
    const order = orders[0];

    const action = {
      type: getOrderById.fulfilled.type,
      payload: { success: true, orders },
    };

    const result = orderReducer(initialState, action);

    expect(result.status).toEqual('succeeded');
    expect(result.currentOrder).toEqual(order);
  });
});
