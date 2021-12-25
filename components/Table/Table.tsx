import {FC} from 'react';
import styles from './Table.module.scss';
import TableHeaderRow from './rows/TableHeaderRow';
import TableRowNoUsers from './rows/TableRowNoUsers';
import TableRow from './rows/TableRow';

type TableProps = {items: any}

const Table: FC<TableProps> = ({items}) => {

  return <table className={styles.root}>
    <thead className={styles.header}>
    <TableHeaderRow />
    </thead>
    <tbody className={styles.body}>
    {items.length === 0 ? <TableRowNoUsers /> : items.map((item: any, index: number) => {
      console.log(items.length);
      const obj = JSON.parse(localStorage.getItem(item));
      console.log(obj);
      return <TableRow username={obj.username} email={obj.email} key={index} />;
    })}
    </tbody>
  </table>;
};

export default Table;