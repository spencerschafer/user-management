import {FC} from 'react';
import styles from './Table.module.scss';

type TableProps = {}

const Table: FC<TableProps> = ({}) => {
  return <table className={styles.root}>
    <thead className={styles.header}>
    <tr>
      <td>
        Users
      </td>
    </tr>
    </thead>
    <tbody className={styles.body}>
    {/*<tr className={styles.tableRowNoUsers}>*/}
    {/*  <td>No users found</td>*/}
    {/*</tr>*/}
    <tr className={styles.row}>
      <td>Spencer Schafer</td>
    </tr>
    <tr className={styles.row}>
      <td>Spencer Schafer</td>
    </tr>
    <tr className={styles.row}>
      <td>Spencer Schafer</td>
    </tr>
    <tr className={styles.row}>
      <td>Spencer Schafer</td>
    </tr>
    <tr className={styles.row}>
      <td>Spencer Schafer</td>
    </tr>
    <tr className={styles.row}>
      <td>Spencer Schafer</td>
    </tr>
    <tr className={styles.row}>
      <td>Spencer Schafer</td>
    </tr>
    <tr className={styles.row}>
      <td>Spencer Schafer</td>
    </tr>
    <tr className={styles.row}>
      <td>Spencer Schafer</td>
    </tr>
    <tr className={styles.row}>
      <td>Spencer Schafer</td>
    </tr>
    <tr className={styles.row}>
      <td>Spencer Schafer</td>
    </tr>
    <tr className={styles.row}>
      <td>Spencer Schafer</td>
    </tr>
    <tr className={styles.row}>
      <td>Spencer Schafer</td>
    </tr>
    <tr className={styles.row}>
      <td>Spencer Schafer</td>
    </tr>
    <tr className={styles.row}>
      <td>Spencer Schafer</td>
    </tr>
    <tr className={styles.row}>
      <td>Spencer Schafer</td>
    </tr>
    </tbody>
  </table>;
};

export default Table;