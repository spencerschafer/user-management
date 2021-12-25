import type {NextPage} from 'next';
import EricssonLogo from '../public/logo.svg';
import styles from '../styles/Home.module.scss';
import Search from '../components/Search/Search';
import {useEffect, useState} from 'react';
import Modal from '../components/Modal/Modal';
import Button from '../components/Button/Button';
import Table from '../components/Table/Table';
import {getAllItems} from '../lib/helpers';

const Home: NextPage = () => {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState(getAllItems());

  useEffect(() => {
    console.log('open:', open);
  }, [open]);

  useEffect(() => {
    setItems(getAllItems());
  }, []);

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
            <Table items={items} />
          </div>
        </div>
      </div>
      <Modal open={open} onClose={() => setOpen(false)} onSubmit={() => setItems(getAllItems())}/>
    </div>
  );
};

export default Home;
