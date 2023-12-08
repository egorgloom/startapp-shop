import { FC } from 'react';


import styles from './Catalog.module.scss'

interface ICatalog {}

const Catalog: FC<ICatalog> = () => {
  return (
    <div className={styles.catalogContainer}>
      <h1 className={styles.catalog}>Долго, дорого, богато!</h1>

    </div>
  );
};

export default Catalog;