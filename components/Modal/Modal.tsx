import {Dispatch, FC, SetStateAction, useEffect, useReducer} from 'react';
import CloseIcon from '../../public/x.svg';
import styles from './Modal.module.scss';
import clsx from 'clsx';
import Input from '../Input/Input';
import Button from '../Button/Button';
import {userReducer, userState} from '../../lib/reducer';
import {ADD_USER_KEY, EMAIL_KEY, PASSWORD_KEY, USERNAME_KEY} from '../../lib/keys';
import {getAllItems} from '../../lib/helpers';

type ModalProps = {
  open: boolean;
  onClose: Dispatch<SetStateAction<any>>;
  onSubmit: Dispatch<SetStateAction<any>>;
}

const Modal: FC<ModalProps> = ({open, onClose, onSubmit}) => {
  const [state, dispatch] = useReducer(userReducer, userState);

  const addUser = () => {
    localStorage.setItem(state[EMAIL_KEY], JSON.stringify(state));
    dispatch({type: ADD_USER_KEY});
    onSubmit(getAllItems());
    onClose(false);
  };

  const handleDispatch = (type: string, payload: any) => {
    dispatch({type: type, payload: payload});
  };

  useEffect(() => {
    console.log(state);
  }, [state]);

  return <div className={clsx(styles.root, {[styles.open]: open})}>
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.heading}>Add User</h1>
        <button className={styles.button} onClick={onClose}>
          <CloseIcon className={styles.closeIcon} />
        </button>
      </div>
      <div className={styles.inputFields}>
        <Input heading={'Username'} error={''}
               onInput={(e) => handleDispatch(USERNAME_KEY, (e.target as HTMLInputElement).value)} type={'text'}
               value={state[USERNAME_KEY]} />
        <Input heading={'Email'} error={''}
               onInput={(e) => handleDispatch(EMAIL_KEY, (e.target as HTMLInputElement).value)}
               type={'email'} value={state[EMAIL_KEY]} />
        <Input heading={'Password'} error={''}
               onInput={(e) => handleDispatch(PASSWORD_KEY, (e.target as HTMLInputElement).value)} type={'password'}
               value={state[PASSWORD_KEY]} />
      </div>
      <div className={styles.footer}>
        <Button onClick={() => addUser()}>
          Add User
        </Button>
      </div>
    </div>
  </div>;
};

export default Modal;