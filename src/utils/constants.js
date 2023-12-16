export const BASE_API_URL = 'https://norma.nomoreparties.space/api';

export const REG_EXP_EMAIL =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/i;

export const REG_EXP_NAME = /^[А-ЯA-Zё\s-]+$/imu;

export const REG_EXP_PASSWORD = /^(?=.*[0-9])(?=.*[A-Za-z]).{6,}$/i;

export const messages = {
  SUCCESS_REGISTRATION: 'Регистрация прошла успешно',
  SUCCESS_LOGIN: 'Вы вошли в аккаунт',
  LOGOUT_SUCCESS: 'Вы вышли из аккаунта',
  SERVER_ERROR: 'На сервере произошла ошибка',
  UPDATE_PROFILE: 'Профиль сохранён',
  INPUT_EMAIL: 'Неверный формат почты',
  INPUT_NAME: 'Имя может содержать только латиницу, кириллицу, пробел или дефис',
  INPUT_PASSWORD: 'Пароль должен содержать минимум одну букву и одну цифру',
};
