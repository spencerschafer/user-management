import {Dispatch, FC, MutableRefObject, SetStateAction, useContext, useEffect, useReducer} from 'react';
import CloseIcon from '../../public/x.svg';
import styles from './Modal.module.scss';
import clsx from 'clsx';
import Input from '../Input/Input';
import Button from '../Button/Button';
import {userReducer, userState} from '../../lib/reducer';
import {ADD_USER_KEY, EMAIL_KEY, PASSWORD_KEY, USERNAME_KEY} from '../../lib/keys';
import {Context} from '../../lib/context';

type ModalProps = {
  open: boolean;
  outsideRef: MutableRefObject<null>;
}

const Modal: FC<ModalProps> = ({open, outsideRef}) => {
  const context = useContext(Context);
  const [state, dispatch] = useReducer(userReducer, userState);

  const addUser = () => {
    localStorage.setItem(state[EMAIL_KEY], JSON.stringify(state));
    dispatch({type: ADD_USER_KEY});
    context.updateUsers();
    context.toggleOpen(false);
  };

  const handleDispatch = (type: string, payload: any) => {
    dispatch({type: type, payload: payload});
  };

  useEffect(() => {
    console.log(state);
  }, [state]);

  useEffect(() => {
    const handleClickOutside = (e: any) => {
      // @ts-ignore
      if (outsideRef.current && !outsideRef.current.contains(e.target)) {
        context.toggleOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [outsideRef]);

  return <div className={clsx(styles.root, {[styles.open]: open})}>
    <div className={styles.container} ref={outsideRef}>
      <div className={styles.header}>
        <h1 className={styles.heading}>Add User</h1>
        <button className={styles.button} onClick={() => context.toggleOpen(false)}>
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