import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';

import styles from './Catalog.module.scss'

interface ICatalog {}

const Catalog: FC<ICatalog> = () => {
  return (
    <div className={styles.catalogContainer}>
      <h1 className={styles.catalog}>Долго, дорого, богато!</h1>
      <Link to={ROUTES.PRODUCTS}>
        <button>каталог изделий</button>
      </Link>
    </div>
  );
};

export default Catalog;