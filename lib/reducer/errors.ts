import {EMAIL_KEY, PASSWORD_KEY, RESET_STATE_KEY, USER_CLICKED_SUBMIT, USERNAME_KEY, VALIDATE_STATE_KEY} from '../keys';
import {userState} from './state';
import {getErrorMessage} from '../validation';

export const errorReducer = (state: any, action: any) => {
  switch (action.type) {
    case EMAIL_KEY:
      return {
        [USER_CLICKED_SUBMIT]: true,
        [EMAIL_KEY]: 'Email already exists',
      };
    case VALIDATE_STATE_KEY:
      return {
        [USER_CLICKED_SUBMIT]: true,
        [USERNAME_KEY]: getErrorMessage(USERNAME_KEY, action.payload),
        [EMAIL_KEY]: getErrorMessage(EMAIL_KEY, action.payload),
        [PASSWORD_KEY]: getErrorMessage(PASSWORD_KEY, action.payload),
      };
    case RESET_STATE_KEY:
      return {
        ...userState,
      };
    default:
      throw new Error();
  }
};