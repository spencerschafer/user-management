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
    </tr>
  </>;
};

export default TableHeaderRow;