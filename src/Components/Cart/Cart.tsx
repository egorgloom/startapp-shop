import { FC } from 'react';

import { useTypedSelector } from '../../hooks/useTypedSelector';

import { ICart } from '../../interfaces/interfaces';

import cl from './Cart.module.scss'

import CartItem from '../CartItem/CartItem';

import Button from '../../UI/Button/Button';

import { sumPrice } from '../../utils/common';


const Cart: FC = () => {

  const cart = useTypedSelector(state => state.cart.cart);

  return (
    <div className={cl.cartBlock}>

      {cart.length ?
        cart.map((elem: ICart) => <CartItem elem={elem} key={elem.id} />
        )
        : <div>Cart is empty</div>}


      <div className={cl.actions}>
        <div className={cl.total}>
          TOTAL PRICE:{" "}
          <span>
            {sumPrice(cart.map(({ price, quantity }) => Math.ceil((price * quantity))))}$
          </span>
        </div>
        <Button title='Proceed to checkout' disabled={!cart.length ? true : false} />
      </div>
    </div>
  );
};

export default Cart;