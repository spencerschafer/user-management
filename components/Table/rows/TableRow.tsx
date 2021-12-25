import EllipsisIcon from '../../../public/three-dots-vertical.svg';
import styles from '../Table.module.scss';
import {FC} from 'react';

type TableHeaderRowProps = {
  username: string;
  email: string;
}

const TableHeaderRow: FC<TableHeaderRowProps> = ({username, email}) => {
  return <>
    <tr className={styles.row}>
      <td>{username}</td>
      <td>{email}</td>
      <td>
        <button className={styles.listButton}><EllipsisIcon className={styles.rowIcon} /></button>
      </td>
    </tr>
  </>;
};

export default TableHeaderRow;