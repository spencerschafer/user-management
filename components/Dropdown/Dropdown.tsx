import {Dispatch, FC, MutableRefObject, SetStateAction, useContext, useEffect} from 'react';
import styles from './Dropdown.module.scss';
import {Context} from '../../lib/context';

type DropdownProps = {
  item: any;
  open: boolean;
  outsideRef: MutableRefObject<null>;
  setOpen: Dispatch<SetStateAction<any>>
}

const Dropdown: FC<DropdownProps> = ({item, open, outsideRef, setOpen}) => {
  const context = useContext(Context);

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
    <button className={styles.button} onClick={() => {
      context.removeUser(item);
      setOpen(false);
    }}>Delete
    </button>
  </div> : null);
};

export default Dropdown;