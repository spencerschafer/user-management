import {EDIT_USER_KEY, EMAIL_KEY, PASSWORD_KEY, RESET_STATE_KEY, USERNAME_KEY} from './keys';

export const userState = {
  [USERNAME_KEY]: '',
  [EMAIL_KEY]: '',
  [PASSWORD_KEY]: '',
};

export const userReducer = (state: any, action: any) => {
  switch (action.type) {
    case USERNAME_KEY:
      return {
        ...state,
        [USERNAME_KEY]: action.payload,
      };
    case EMAIL_KEY:
      return {
        ...state,
        [EMAIL_KEY]: action.payload,
      };
    case PASSWORD_KEY:
      return {
        ...state,
        [PASSWORD_KEY]: action.payload,
      };
    case EDIT_USER_KEY:
      return {
        [USERNAME_KEY]: action.payload[USERNAME_KEY],
        [EMAIL_KEY]: action.payload[EMAIL_KEY],
        [PASSWORD_KEY]: action.payload[PASSWORD_KEY],
      };
    case RESET_STATE_KEY:
      return {
        ...userState,
      };
    default:
      throw new Error();
  }
};
