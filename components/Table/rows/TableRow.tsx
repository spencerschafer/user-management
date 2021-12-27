import EllipsisIcon from '../../../public/three-dots-vertical.svg';
import styles from '../Table.module.scss';
import {FC, useState} from 'react';
import Dropdown from '../../Dropdown/Dropdown';

type TableHeaderRowProps = {
  data: any;
}

const TableHeaderRow: FC<TableHeaderRowProps> = ({data}) => {
  const [open, setOpen] = useState(false);

  return <>
    <tr className={styles.row}>
      <td>{data.username}</td>
      <td>{data.email}</td>
      <td>
        <button className={styles.listButton} onClick={() => setOpen(!open)}><EllipsisIcon className={styles.rowIcon} />
        </button>
        <Dropdown open={open} />
      </td>
    </tr>
  </>;
};

export default TableHeaderRow;