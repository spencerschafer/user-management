import styles from './Button.module.scss';
import {FC} from 'react';

type ButtonProps = {
  onClick: () => void;
}

const Button: FC<ButtonProps> = ({children, onClick}) => {
  return <button className={styles.root} onClick={onClick}>
    {children}
  </button>;
};

export default Button;