import styles from '../Table.module.scss';

const TableHeaderRow = () => {
  return <tr className={styles.rowNoUsers}>
    <td>No users found</td>
  </tr>;
};

export default TableHeaderRow;