import {FC} from 'react';
import styles from './Dropdown.module.scss';

type DropdownProps = {
  open: boolean;
}

const Dropdown: FC<DropdownProps> = ({open}) => {
  return (open ? <div className={styles.root}>
    <button className={styles.button}>Edit</button>
    <button className={styles.button}>Delete</button>
  </div> : null);
};

export default Dropdown;