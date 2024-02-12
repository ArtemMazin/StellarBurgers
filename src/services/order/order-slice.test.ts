import { createOrder, getOrderById, initialState, removeOrder } from './order-slice';
import { orders } from '../../mocks/orders-mock';
import orderReducer from './order-slice';

describe('order slice', () => {
  const ingredientsId = [
    '643d69a5c3f7b9001cfa093d',
    '643d69a5c3f7b9001cfa0943',
    '643d69a5c3f7b9001cfa093d',
  ];

  it('should handle fulfilled "createOrder" action', () => {
    const order = orders[0];

    const result = orderReducer(
      initialState,
      createOrder.fulfilled(order, 'fulfilled', ingredientsId),
    );

    expect(result.status).toEqual('succeeded');
    expect(result.order).toEqual(order);
  });

  it('should set status to loading when "createOrder" is pending', () => {
    const result = orderReducer(initialState, createOrder.pending('pending', ingredientsId));

    expect(result.status).toEqual('loading');
  });

  it('should set error message when "createOrder" is rejected', () => {
    const errorMessage = new Error('Order creation failed');

    const result = orderReducer(
      initialState,
      createOrder.rejected(errorMessage, 'rejected', ingredientsId),
    );

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

    const result = orderReducer(
      initialState,
      getOrderById.fulfilled({ success: true, orders }, 'fulfilled', '12345'),
    );

    expect(result.status).toEqual('succeeded');
    expect(result.currentOrder).toEqual(order);
  });
});
