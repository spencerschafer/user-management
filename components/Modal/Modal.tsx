import {Dispatch, FC, SetStateAction} from 'react';
import CloseIcon from '../../public/x.svg';
import styles from './Modal.module.scss';
import clsx from 'clsx';
import Input from '../Input/Input';
import Button from '../Button/Button';

type ModalProps = {
  open: boolean;
  onClose: Dispatch<SetStateAction<any>>;
}

const Modal: FC<ModalProps> = ({open, onClose}) => {
  return <div className={clsx(styles.root, {[styles.open]: open})}>
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.heading}>Add User</h1>
        <button className={styles.button} onClick={onClose}>
          <CloseIcon className={styles.closeIcon} />
        </button>
      </div>
      <div className={styles.inputFields}>
        <Input heading={'Username'} error={''} onInput={() => {
        }} type={'text'} />
        <Input heading={'Email'} error={''} onInput={() => {
        }} type={'email'} />
        <Input heading={'Password'} error={''} onInput={() => {
        }} type={'password'} />
      </div>
      <div className={styles.footer}>
        <Button onClick={() => {
        }}>
          Add User
        </Button>
      </div>
    </div>
  </div>;
};

export default Modal;