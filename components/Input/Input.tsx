import styles from './Input.module.scss';
import {FC, useContext} from 'react';
import {ObjectSchema} from 'yup';
import {Context} from '../../lib/context';
import clsx from 'clsx';

type InputProps = {
  disabled?: boolean;
  field: string;
  heading: string;
  schema: ObjectSchema<any>;
  type: 'text' | 'email' | 'password'
  value: string;
}

const Input: FC<InputProps> = ({disabled, heading, field, schema, type, value}) => {
    const context = useContext(Context);

    const handleDispatch = (action: string, payload: any) => {
      context.updateState(action, payload);
    };

    return <div className={styles.root}>
      <div className={styles.header}>
        <h3 className={styles.heading}>{heading}</h3>
        <p className={styles.error}>{context.errors[field]}</p>
      </div>
      <input className={clsx(styles.input, {[styles.hasError]: context.errors[field], [styles.disabled]: disabled})}
             type={type} value={value}
             onInput={disabled ? undefined : (e) => handleDispatch(field, (e.target as HTMLInputElement).value)}
             disabled={disabled}
      />
    </div>;
  }
;

export default Input;