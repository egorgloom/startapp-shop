import { FC } from 'react';
import SingleProduct from '../Product/SingleProduct';

interface IProductItemPage {}

const ProductItemPage: FC<IProductItemPage> = () => {
  return (
    <>
    <SingleProduct />
    </>
  );
};

export default ProductItemPage;