import {FC} from 'react';
import styles from './Table.module.scss';
import TableHeaderRow from './rows/TableHeaderRow';
import TableRow from './rows/TableRow';

type TableProps = {
  items: any,
  updateItems: any
}

const Table: FC<TableProps> = ({items, updateItems}) => {

  return <table className={styles.root}>
    <thead className={styles.header}>
    <TableHeaderRow />
    </thead>
    <tbody className={styles.body}>
    {/*{items.length === 0 ? <TableRowNoUsers /> : items.map((item: any, index: number) => {*/}
    {items.map((item: any, index: number) => {
      const obj = JSON.parse(localStorage.getItem(item));
      return <TableRow item={obj} key={index} updateItems={updateItems}/>;
    })}
    </tbody>
  </table>;
};

export default Table;