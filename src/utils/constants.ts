export const BASE_API_URL = 'https://norma.nomoreparties.space/api';

export const REG_EXP_EMAIL =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/i;

export const REG_EXP_NAME = /^[А-ЯA-Zё\s-]+$/imu;

export const REG_EXP_PASSWORD = /^(?=.*[0-9])(?=.*[A-Za-z]).{6,}$/i;

export const messages = {
  SUCCESS_REGISTRATION: 'Регистрация прошла успешно',
  SUCCESS_LOGIN: 'Вы вошли в аккаунт',
  SUCCESS_LOGOUT: 'Вы вышли из аккаунта',
  SUCCESS_ORDER: 'Оформляем заказ',
  SUCCESS_PROFILE_UPDATE: 'Профиль обновлен',
  ERROR_ORDER_LOGIN: 'Для оформления заказа войдите в аккаунт',
  ERROR_ORDER_INGREDIENTS: 'Выберите булку и ингредиенты',
  ERROR_INPUT_EMAIL: 'Неверный формат почты',
  ERROR_INPUT_NAME: 'Имя может содержать только латиницу, кириллицу, пробел или дефис',
  ERROR_INPUT_PASSWORD: 'Пароль должен содержать минимум одну букву и одну цифру',
  ERROR_FORM_FIELDS: 'Заполните все поля формы',
  WARN_ORDER_WAITING: 'Заказ оформляется, подождите',
};
