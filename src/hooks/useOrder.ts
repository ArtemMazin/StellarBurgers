import { TOrder } from '@/utils/types';

const useOrder = (orders: TOrder[] | null, number: string | undefined) => {
  const order = orders?.length ? orders.filter((item) => item.number === Number(number))[0] : null;

  return order;
};

export default useOrder;
