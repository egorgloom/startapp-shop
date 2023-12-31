import { FC } from 'react';

import { FaPlus, FaMinus} from 'react-icons/fa';
import { IoMdClose } from "react-icons/io";

import { Link } from 'react-router-dom';

import { useActions } from '../../hooks/useActions';

import { ICart } from '../../interfaces/interfaces';

import cl from './CartItem.module.scss'

interface IOrderItem {
    elem: ICart
}

const OrderItem: FC<IOrderItem> = ({ elem }) => {

    const { addToCart, removeToCart } = useActions()

    const changeQuantity = (elem: ICart, quantity: number) => {
        addToCart({ ...elem, quantity })
    }


    return (
        <div className={cl.cartItem}>
            <Link to={`/product/${elem.id}`}>
            <img src={elem.image} alt="productImage" />
            <span className={cl.description}>{elem.title}</span>
            </Link>
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
            <IoMdClose className={cl.IoMdClose}
                onClick={() => removeToCart({id : elem.id})}
            />

        </div>
    );
};

export default OrderItem;