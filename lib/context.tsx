import {createContext, FC, useEffect, useReducer, useState} from 'react';
import {EDIT_USER_KEY, EMAIL_KEY} from './keys';
import {getAllUsers} from './helpers';
import {userReducer, userState} from './reducer';

export type ModalType = null | 'add' | 'edit';

type AppContextType = {
  open: ModalType;
  toggleOpen: (value: ModalType) => void;
  users: any[];
  updateUsers: () => void;
  addUser: (state: any) => void;
  editUser: (state: any) => void;
  removeUser: (user: any) => void;
  state: any;
  updateState: (action: string, payload?: any) => void;
}

const AppContextDefaultState = {
  open: null,
  toggleOpen: () => {
  },
  users: [],
  updateUsers: () => {
  },
  addUser: () => {
  },
  editUser: () => {
  },
  removeUser: () => {
  },
  state: {},
  updateState: () => {
  },
};

export const Context = createContext<AppContextType>(AppContextDefaultState);

export const AppContext: FC = ({children}) => {
  const [users, setUsers] = useState<[]>([]);
  const [open, setOpen] = useState<ModalType>(null);
  const [state, dispatch] = useReducer(userReducer, userState);

  const toggleOpen = (value: ModalType) => {
    setOpen(value);
  };

  const updateUsers = () => {
    setUsers(getAllUsers());
  };

  const addUser = (state: any) => {
    localStorage.setItem(state[EMAIL_KEY], JSON.stringify(state));
  };

  const editUser = (user: any) => {
    dispatch({type: EDIT_USER_KEY, payload: user});
  };

  const removeUser = (user: any) => {
    localStorage.removeItem(user[EMAIL_KEY]);
  };

  const updateState = (action: string, payload?: any) => {
    dispatch({type: action, payload: payload});
  };

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <Context.Provider
      value={{open, toggleOpen, users, updateUsers, addUser, editUser, removeUser, state, updateState}}>
      {children}
    </Context.Provider>);
};
