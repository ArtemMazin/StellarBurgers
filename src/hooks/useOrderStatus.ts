import { TOrder } from '@/utils/types';

export const useOrderStatus = (order: TOrder) => {
  switch (order.status) {
    case 'done':
      return 'Выполнен';
    case 'pending':
      return 'Готовится';
    case 'created':
      return 'Создан';
  }
};
