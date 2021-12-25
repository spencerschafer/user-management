import {FC, useEffect} from 'react';
import styles from './Table.module.scss';
import {getAllItems} from '../../lib/helpers';
import TableHeaderRow from './rows/TableHeaderRow';
import TableRowNoUsers from './rows/TableRowNoUsers';
import TableRow from './rows/TableRow';

type TableProps = {}

const Table: FC<TableProps> = ({}) => {

  useEffect(() => {
    getAllItems();
  }, []);

  return <table className={styles.root}>
    <thead className={styles.header}>
    <TableHeaderRow />
    </thead>
    <tbody className={styles.body}>
    <TableRowNoUsers />
    <TableRow username={'Spencer Schafer'} email={'spencerschafer@gmail.com'}/>
    </tbody>
  </table>;
};

export default Table;