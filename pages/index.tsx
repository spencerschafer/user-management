import type {NextPage} from 'next';
import Logo from '../public/logo.svg';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.root}>
      <header className={styles.headerRoot}>
        <div className={styles.headerContainer}>
          <Logo className={styles.headerLogo} />
          <div className={styles.headerText}>User Management</div>
        </div>
      </header>
      <div className={styles.mainRoot}>
        <div className={styles.mainContainer}>
          <div className={styles.mainRow}>
            <div className={styles.mainSearch} />
            <button className={styles.mainButton}>Add User</button>
          </div>
          <div className={styles.mainRow}>

            <table className={styles.tableRoot}>
              <thead className={styles.tableHeader}>
              Users
              </thead>
              <tbody className={styles.tableBody}>
              {/*<tr className={styles.tableRowNoUsers}>No users found</tr>*/}
              <tr className={styles.tableRow}>Spencer Schafer</tr>
              <tr className={styles.tableRow}>Spencer Schafer</tr>
              <tr className={styles.tableRow}>Spencer Schafer</tr>
              <tr className={styles.tableRow}>Spencer Schafer</tr>
              <tr className={styles.tableRow}>Spencer Schafer</tr>
              <tr className={styles.tableRow}>Spencer Schafer</tr>
              <tr className={styles.tableRow}>Spencer Schafer</tr>
              <tr className={styles.tableRow}>Spencer Schafer</tr>
              <tr className={styles.tableRow}>Spencer Schafer</tr>
              <tr className={styles.tableRow}>Spencer Schafer</tr>
              <tr className={styles.tableRow}>Spencer Schafer</tr>
              <tr className={styles.tableRow}>Spencer Schafer</tr>
              <tr className={styles.tableRow}>Spencer Schafer</tr>
              <tr className={styles.tableRow}>Spencer Schafer</tr>
              <tr className={styles.tableRow}>Spencer Schafer</tr>
              <tr className={styles.tableRow}>Spencer Schafer</tr>
              </tbody>
            </table>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
