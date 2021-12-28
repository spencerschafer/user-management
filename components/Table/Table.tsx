import {FC} from 'react';
import styles from './Table.module.scss';
import TableHeaderRow from './rows/TableHeaderRow';
import TableRow from './rows/TableRow';
import TableRowNoUsers from './rows/TableRowNoUsers';

type TableProps = {
  items: any,
}

const Table: FC<TableProps> = ({items}) => {
  return <table className={styles.root}>
    <thead className={styles.header}>
    <TableHeaderRow />
    </thead>
    <tbody className={styles.body}>
    {items.length === 0 ? <TableRowNoUsers /> : items.map((item: any, index: number) => {
      const obj = localStorage.getItem(item);
      if (obj) {
        return <TableRow item={JSON.parse(obj)} key={index} />;
      } else return null;
    })}
    </tbody>
  </table>;
};

export default Table;