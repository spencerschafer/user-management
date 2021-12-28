import * as yup from 'yup';
import {EMAIL_KEY, PASSWORD_KEY, USERNAME_KEY} from './keys';
import _ from 'lodash';

export const emailRegExp =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const lowerCaseRegExp = /(?=.*[a-z])/;
export const upperCaseRegExp = /(?=.*[A-Z])/;
export const digitRegExp = /(?=.*\d)/;
export const specialCharRegExp = /(?=.*[!"#$%&'()*+,-./:;<=>?@\[\\\]^_`{|}~])/;

export const schema = yup.object().shape({
  [USERNAME_KEY]: yup.string().required('Please enter a username'),
  [EMAIL_KEY]: yup.string()
    .required('Please enter your email')
    .matches(emailRegExp, 'Please enter a valid email'),
  [PASSWORD_KEY]: yup.string()
    .required('Please enter a password')
    .min(7, 'Password needs to be 7 or more characters')
    .matches(lowerCaseRegExp, 'Password needs at least 1 lowercase character')
    .matches(upperCaseRegExp, 'Password needs at least 1 uppercase character')
    .matches(digitRegExp, 'Password needs at least 1 number')
    .matches(specialCharRegExp, 'Password needs at least 1 special character'),
});

export const getErrorMessage = (key: string, obj: any) => {
  const result = (_.find(obj.inner, val => val['path'] === key));
  console.log(result);
  try {
    return (_.find(obj.inner, val => val['path'] === key)).message;
  } catch {
    return undefined;
  }
};