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

  const editUser = (user: any) => {
    context.editUser(user);
    context.toggleOpen('edit');
    setOpen(false);
  };

  const removeUser = (user: any) => {
    context.removeUser(user);
    context.updateUsers();
    setOpen(false);
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
    <button className={styles.button} onClick={() => editUser(item)}>Edit</button>
    <button className={styles.button} onClick={() => removeUser(item)}>Delete</button>
  </div> : null);
};

export default Dropdown;