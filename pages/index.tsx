import type {NextPage} from 'next';
import EricssonLogo from '../public/logo.svg';
import styles from '../styles/Home.module.scss';
import Search from '../components/Search/Search';
import {useContext, useEffect, useRef} from 'react';
import Modal from '../components/Modal/Modal';
import Button from '../components/Button/Button';
import Table from '../components/Table/Table';
import {Context} from '../lib/context';

const Home: NextPage = () => {
  const context = useContext(Context);
  const ref = useRef(null);

  useEffect(() => {
    context.updateUsers();
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
            {/*<Search />*/}
            <Button onClick={() => context.toggleOpen('add')}>
              Add User
            </Button>
          </div>
          <div className={styles.mainRow}>
            <Table items={context.users} />
          </div>
        </div>
      </div>
      <Modal open={context.open} outsideRef={ref} />
    </div>
  );
};

export default Home;
