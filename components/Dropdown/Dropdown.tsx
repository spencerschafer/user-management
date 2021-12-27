import {Dispatch, FC, MutableRefObject, SetStateAction, useEffect} from 'react';
import styles from './Dropdown.module.scss';
import {EMAIL_KEY} from '../../lib/keys';
import {getAllItems} from '../../lib/helpers';

type DropdownProps = {
  item: any;
  open: boolean;
  outsideRef: MutableRefObject<null>;
  updateItems: any;
  setOpen: Dispatch<SetStateAction<any>>
}

const Dropdown: FC<DropdownProps> = ({item, open, outsideRef, updateItems, setOpen}) => {

  const editUser = () => {

  };

  const deleteUser = () => {
    localStorage.removeItem(localStorage.key(item));
    updateItems(getAllItems());
  };

  useEffect(() => {
    const handleClickOutside = (e: any) => {
      // @ts-ignore
      if (outsideRef.current && !outsideRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [outsideRef]);

  return (open ? <div className={styles.root} ref={outsideRef}>
    <button className={styles.button}>Edit</button>
    <button className={styles.button} onClick={() => deleteUser()}>Delete</button>
  </div> : null);
};

export default Dropdown;