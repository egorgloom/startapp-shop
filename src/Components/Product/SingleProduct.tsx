import { FC } from 'react';

import { useParams } from 'react-router-dom';

import { useGetProductQuery } from '../../features/apiSlice';

import { useActions } from '../../hooks/useActions';

import Button from '../../UI/Button/Button';
import Loading from '../../UI/Loading/Loading';


import cl from './SingleProduct.module.scss'


const SingleProduct: FC = () => {

  const { id } = useParams()

  const { data } = useGetProductQuery({ id })

  const {addToCart} = useActions()

  return !data ? (<Loading title='Loading...' />) : (
    <div className={cl.singleProduct}>
      <img src={data.image} alt="product" />
      <div className={cl.descriptionBlock}>
        <h3>{data.title}</h3>
        <p className={cl.description}>{data.description}</p>
        <p className={cl.price}>Price: {data.price}$</p>
        <span className={cl.rating}>Rating: {data.rating?.rate}</span>
        <Button title="Add to cart" onClick={()=> addToCart(data)}/>
      </div>
    </div>

  );
};

export default SingleProduct;