import type {NextPage} from 'next';
import EricssonLogo from '../public/logo.svg';
import styles from '../styles/Home.module.scss';
import Search from '../components/Search/Search';
import {useEffect, useState} from 'react';
import Modal from '../components/Modal/Modal';
import Button from '../components/Button/Button';
import Table from '../components/Table/Table';

const Home: NextPage = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log('open:', open);
  }, [open]);

  return (
    <div className={styles.root}>
      <header className={styles.headerRoot}>
        <div className={styles.headerContainer}>
          <EricssonLogo className={styles.headerLogo} />
          <div className={styles.headerText}>User Management</div>
        </div>
      </header>
      <div className={styles.mainRoot}>
        <div className={styles.mainContainer}>
          <div className={styles.mainRow}>
            <Search />
            <Button onClick={() => setOpen(true)}>
              Add User
            </Button>
          </div>
          <div className={styles.mainRow}>
            <Table />
          </div>
        </div>
      </div>
      <Modal open={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export default Home;
