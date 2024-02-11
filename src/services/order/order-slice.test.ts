import { createOrder, getOrderById, initialState, removeOrder } from './order-slice';
import { orders } from '../../mocks/orders-mock';
import orderReducer from './order-slice';

describe('order slice', () => {
  it('should handle fulfilled createOrder action', () => {
    const order = orders[0];
    const action = {
      type: createOrder.fulfilled,
      payload: order,
    };
    const result = orderReducer(initialState, action);

    expect(result.status).toEqual('succeeded');
    expect(result.order).toEqual(order);
  });

  it('should set status to loading when createOrder is pending', () => {
    const action = { type: createOrder.pending.type };
    const state = orderReducer(initialState, action);

    expect(state.status).toEqual('loading');
  });

  it('should set error message when createOrder is rejected', () => {
    const errorMessage = 'Order creation failed';
    const action = {
      type: createOrder.rejected.type,
      error: { message: errorMessage },
    };
    const state = orderReducer(initialState, action);

    expect(state.error).toEqual(errorMessage);
  });

  it('should remove order when removeOrder is called', () => {
    const initialStateWithOrder = { ...initialState, order: orders[0] };
    const action = { type: removeOrder.type };
    const state = orderReducer(initialStateWithOrder, action);

    expect(state.order).toBeNull();
  });

  it('should set currentOrder when getOrderById is fulfilled', () => {
    const order = orders[0];
    const action = {
      type: getOrderById.fulfilled.type,
      payload: { orders },
    };
    const state = orderReducer(initialState, action);

    expect(state.currentOrder).toEqual(order);
  });
});
