import { FC } from 'react';

import { useTypedSelector } from '../../hooks/useTypedSelector';

interface ICart {}

const Cart: FC<ICart> = () => {

  const { cart } = useTypedSelector(state => state)
  console.log(cart)
  return (
    <div>
        CArt
    </div>
  );
};

export default Cart;