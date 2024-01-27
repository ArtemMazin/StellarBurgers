import { ChangeEvent } from 'react';

export type TIngredient = {
  _id: string;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v: number;
  customId: string;
};

export type THandleOverlay = (e: React.MouseEvent<HTMLElement>) => void;

export type TInputProps = {
  icon?: 'EditIcon' | 'ShowIcon' | 'HideIcon' | 'CloseIcon';
  isIcon?: boolean;
  handleInput: (e: ChangeEvent<HTMLInputElement>, regExp: RegExp, error: string) => void;
  value: string;
  error: string;
  inputValid: boolean;
  placeholder?: string;
};

export type TLoginSuccess = {
  success: boolean;
  accessToken: string;
  refreshToken: string;
  user: {
    email: string;
    name: string;
  };
};

export type TUser = {
  email: string;
  name: string;
  password?: string;
};

export enum WebsocketStatus {
  CONNECTING = 'CONNECTING...',
  ONLINE = 'ONLINE',
  OFFLINE = 'OFFLINE',
}
