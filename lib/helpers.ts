import {schema} from './validation';

export const getAllUsers = (): any => {
  try {
    const items = Object.keys(localStorage);
    console.log(items);
    return items;
  } catch (err) {
    return [];
  }
};

export const validateUserInput = (state: any) => {
  schema.validate(state).then((success) => {
    console.log(success);
  }).catch((err) => {
    console.log(err);
    console.log(err.errors);
  });
};

export const validateInput = (state: any) => {
  return schema.validate(state, {abortEarly: false});
};