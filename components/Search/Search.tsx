import styles from './Search.module.scss';
import {FC} from 'react';

type SearchProps = {}

const Search: FC<SearchProps> = ({}) => {

  const handleBlur = (e: any): void => {
    if (e.key === 'Escape') {
      e.currentTarget.blur();
    }
  };

  return <div className={styles.root}>
    {/*<SearchIcon className={styles.icon} />*/}
    <input className={styles.input} placeholder={'Search'}
      // onKeyUp={(e) => console.log((e.key))} />
           onKeyUp={(e) => handleBlur((e))} />
    {/*<button className={styles.key}>*/}
    {/*  /*/}
    {/*</button>*/}
  </div>;
};

export default Search;