import {createContext, Dispatch, FC, SetStateAction, useState} from 'react';
import {EMAIL_KEY} from './keys';
import {getAllUsers} from './helpers';

type AppContextType = {
  open: boolean;
  toggleOpen: (value: boolean) => void;
  users: [];
  updateUsers: () => void;
  addUser: (state: any) => void;
  editUser: (state: any) => void;
  removeUser: (user: any) => void;
}

const AppContextDefaultState = {
  open: false,
  toggleOpen: (value: boolean) => {
  },
  users: [],
  updateUsers: () => {
  },
  addUser: (state: any) => {
  },
  editUser: (user: any) => {
  },
  removeUser: (user: any) => {
  },
};

export const Context = createContext(AppContextDefaultState);

export const AppContext: FC = ({children}) => {
  const [users, setUsers] = useState<[]>([]);
  const [open, setOpen] = useState(false);


  const toggleOpen = (value: boolean) => {
    setOpen(value);
  };

  const updateUsers = () => {
    setUsers(getAllUsers());
  };

  const addUser = (state: any) => {
    console.log(state);
    localStorage.setItem(state[EMAIL_KEY], state);
  };

  const editUser = (users: any) => {
    setUsers(users);
  };

  const removeUser = (user: any) => {
    console.log(user);
    localStorage.removeItem(localStorage.key(user));
    updateUsers();
  };

  return (
    <Context.Provider
      value={{open, toggleOpen, users, updateUsers, addUser, editUser, removeUser}}>
      {children}
    </Context.Provider>);
};
