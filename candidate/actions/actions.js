import * as types from '../constants/actionTypes';


export const saveBox = (name, value) => ({
  type: "SAVE",
  paylod: name, value
});

export const validate = (first, last, user, email, password, passwordConfirm) => ({
  type: "VALIDATE",
  payload: first, last, user, email, password, passwordConfirm
});

export const reset = (trigger) => ({
  type: "RESET",
  payload: trigger
});