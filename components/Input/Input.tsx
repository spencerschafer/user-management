import styles from './Input.module.scss';
import {Dispatch, FC, SetStateAction} from 'react';

type InputProps = {
  error: any;
  heading: string;
  onInput: Dispatch<SetStateAction<any>>;
  type: 'text' | 'email' | 'password'
  value: string;
}

const Input: FC<InputProps> = ({error, heading, onInput, type, value}) => {
  return <div className={styles.root}>
    <div className={styles.header}>
      <h3 className={styles.heading}>{heading}</h3>
      <p className={styles.error}>{error}</p>
    </div>
    <input className={styles.input} type={type} onInput={onInput} value={value} />
  </div>;
};

export default Input;