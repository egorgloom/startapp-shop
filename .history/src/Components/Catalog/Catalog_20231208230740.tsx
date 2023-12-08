import { FC } from 'react';


import styles from './Catalog.module.scss'

interface ICatalog {}

const Catalog: FC<ICatalog> = () => {
  return (
    <div className={styles.catalogContainer}>

    </div>
  );
};

export default Catalog;