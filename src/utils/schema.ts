import { string, array } from "yup";

export const SCHEMA = {
  NICKNAME: string()
    .required()
    .max(30)
    .matches(/^[0-9aA-zZаА-яЯёЁ]+$/),
  NAME: string()
    .required()
    .max(50)
    .matches(/^[0-9aA-zZаА-яЯёЁ]+$/),
  SURNAME: string()
    .required()
    .max(50)
    .matches(/^[aA-zZаА-яЯёЁ]+$/),
  SEX: string()
    .required()
    .matches(/^man|woman$/),
  ADVANTAGES: array().of(string().required().max(50)),
  RADIO: string()
    .required()
    .matches(/^[0-9]+$/),
  ABOUT: string().required().max(200),
};
