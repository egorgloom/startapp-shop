import { FC } from 'react';

import { Route, Routes } from 'react-router-dom';

import Catalog from './../Catalog/Catalog';

import Cart from './../Cart/Cart';

import SingleProduct from './../Product/SingleProduct';


const AppRoutes: FC = () => {
    return (
        <>
            <Routes>
                <Route index element={<Catalog />} />
                <Route path='cart' element={<Cart />} />
                <Route path='product/:id' element={<SingleProduct/>} />
            </Routes>
        </>
    );
};

export default AppRoutes;