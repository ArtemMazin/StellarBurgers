import { THandleOverlay } from '@/utils/types';
import React from 'react';

type TModalContext = {
  onClose?: () => void;
  handleOverlay?: THandleOverlay;
};

const ModalContext = React.createContext<TModalContext>({});
export default ModalContext;
