import { FC } from 'react';

import { NavLink, Link } from 'react-router-dom';

import LOGO from '../../images/ojjo.svg'

import { GrCart } from "react-icons/gr";

import cl from './Header.module.scss'

import Search from '../Search/Search';

import { useTypedSelector } from './../../hooks/useTypedSelector';

interface IHeader { }

const Header: FC<IHeader> = () => {

    const { cart } = useTypedSelector(state => state.cart);
    
    return (
        <div className={cl.header}>
            <NavLink to={'/'}><img src={LOGO} alt={LOGO} className={cl.logo} /></NavLink>
            <Search />
            <div className={cl.userPanel}>
                <div className={cl.cartUser}>
                    <Link to={'cart'}>
                        <GrCart style={{ width: '30px', height: '30px' }} />
                        <span>{cart.length}</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;