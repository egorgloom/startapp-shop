import { FC } from 'react';

import { useGetProductsQuery } from '../../features/apiSlice';

import { IProduct } from '../../interfaces/interfaces';

import Loading from '../../UI/Button/Loading/Loading';

import ProductItem from '../Product/ProductItem';



import styles from './Catalog.module.scss'

interface ICatalog { }

const Catalog: FC<ICatalog> = () => {

  const { data, error} = useGetProductsQuery('');

  if(error) {
    return <div>Error</div>
  }

  return !data ? (<Loading title='Loading...' />) : (
    <div className={styles.catalogContainer}>
      {data.map((elem: IProduct) => <ProductItem elem={elem} key={elem.id} />)}
    </div>)


};

export default Catalog;