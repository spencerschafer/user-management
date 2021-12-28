import styles from './Input.module.scss';
import {FC, useContext} from 'react';
import {ObjectSchema} from 'yup';
import {Context} from '../../lib/context';
import clsx from 'clsx';

type InputProps = {
  field: string;
  heading: string;
  schema: ObjectSchema<any>;
  type: 'text' | 'email' | 'password'
  value: string;
}

const Input: FC<InputProps> = ({heading, field, schema, type, value}) => {
    const context = useContext(Context);

    const handleDispatch = (action: string, payload: any) => {
      context.updateState(action, payload);
    };

    return <div className={styles.root}>
      <div className={styles.header}>
        <h3 className={styles.heading}>{heading}</h3>
        <p className={styles.error}>{context.errors[field]}</p>
      </div>
      <input className={clsx(styles.input, {[styles.hasError]: context.errors[field]})} type={type} value={value}
             onInput={(e) => handleDispatch(field, (e.target as HTMLInputElement).value)}
      />
    </div>;
  }
;

export default Input;