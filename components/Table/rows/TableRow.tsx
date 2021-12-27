import EllipsisIcon from '../../../public/three-dots-vertical.svg';
import styles from '../Table.module.scss';
import {FC, useRef, useState} from 'react';
import Dropdown from '../../Dropdown/Dropdown';
import {EMAIL_KEY, USERNAME_KEY} from '../../../lib/keys';

type TableRowProps = {
  item: any;
}

const TableRow: FC<TableRowProps> = ({item}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  return <>
    <tr className={styles.row}>
      <td>{item[USERNAME_KEY]}</td>
      <td>{item[EMAIL_KEY]}</td>
      <td>
        <button className={styles.listButton} onClick={() => setOpen(!open)}><EllipsisIcon className={styles.rowIcon} />
        </button>
        <Dropdown open={open} item={item} outsideRef={ref} setOpen={() => setOpen(false)} />
      </td>
    </tr>
  </>;
};

export default TableRow;