import {FC, MutableRefObject, useContext, useEffect} from 'react';
import CloseIcon from '../../public/x.svg';
import styles from './Modal.module.scss';
import clsx from 'clsx';
import Input from '../Input/Input';
import Button from '../Button/Button';
import {EMAIL_KEY, PASSWORD_KEY, RESET_STATE_KEY, USERNAME_KEY, VALIDATE_STATE_KEY} from '../../lib/keys';
import {Context, ModalType} from '../../lib/context';
import {validateInput} from '../../lib/helpers';
import {schema} from '../../lib/validation';

type ModalProps = {
  open: ModalType;
  outsideRef: MutableRefObject<null>;
}

const Modal: FC<ModalProps> = ({open, outsideRef}) => {
  const context = useContext(Context);
  const modalType = context.open;

  const addUser = () => {
    validateInput(context.state).then(() => {
      context.addUser(context.state);
      context.updateUsers();
      context.toggleOpen(null);
      context.updateState(RESET_STATE_KEY);
      context.updateErrors(RESET_STATE_KEY);
    }).catch((err) => {
      context.updateErrors(VALIDATE_STATE_KEY, err);
    });
  };

  const closeModal = () => {
    context.toggleOpen(null);
    context.updateState(RESET_STATE_KEY);
  };

  useEffect(() => {
    const handleClickOutside = (e: any) => {
      // @ts-ignore
      if (outsideRef.current && !outsideRef.current.contains(e.target)) {
        context.toggleOpen(null);
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
        <h1 className={styles.heading}>{modalType === 'add' ? 'Add User' : 'Edit User'}</h1>
        <button className={styles.button} onClick={() => closeModal()}>
          <CloseIcon className={styles.closeIcon} />
        </button>
      </div>
      <div className={styles.inputFields}>
        <Input heading={'Username'} schema={schema} field={USERNAME_KEY} type={'text'}
               value={context.state[USERNAME_KEY]} />
        <Input heading={'Email'} schema={schema} field={EMAIL_KEY} type={'email'} value={context.state[EMAIL_KEY]} />
        <Input heading={'Password'} schema={schema} field={PASSWORD_KEY} type={'text'}
               value={context.state[PASSWORD_KEY]} />
      </div>
      <div className={styles.footer}>
        <Button onClick={() => addUser()}>
          {modalType === 'add' ? 'Add User' : 'Save'}
        </Button>
      </div>
    </div>
  </div>;
};

export default Modal;