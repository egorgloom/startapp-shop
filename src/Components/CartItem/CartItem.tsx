import { FC } from 'react';

import { FaPlus, FaMinus, FaRegWindowClose } from 'react-icons/fa';

import { useActions } from '../../hooks/useActions';

import { ICart } from '../../interfaces/interfaces';

import cl from './CartItem.module.scss'

interface ICartItem {
    elem: ICart
}

const CartItem: FC<ICartItem> = ({ elem }) => {

    const { addToCart, removeToCart } = useActions()

    const changeQuantity = (elem: ICart, quantity: number) => {
        addToCart({ ...elem, quantity })
    }


    return (
        <div className={cl.cartItem}>
            <img src={elem.image} alt="productImage" />
            <span className={cl.description}>{elem.description}</span>
            <div className={cl.quantity}>
                <FaMinus
                    className={cl.minus}
                    onClick={() => changeQuantity(elem, Math.max(1, elem.quantity - 1))} />
                <span>{elem.quantity}</span>
                <FaPlus
                    className={cl.plus}
                    onClick={() => changeQuantity(elem, Math.max(1, elem.quantity + 1))} />
            </div>
            <span className={cl.price}>{Math.ceil((elem.price * elem.quantity))}$</span>
            <FaRegWindowClose
            style={{cursor: 'pointer'}}
                onClick={() => removeToCart({id : elem.id})}
            />
        </div>
    );
};

export default CartItem;