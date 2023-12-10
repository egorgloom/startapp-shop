import { FC } from 'react';
import { NavLink, Link } from 'react-router-dom';

import LOGO from '../../images/ojjo.svg'

import { GrCart } from "react-icons/gr";

import styles from './Header.module.scss'

interface IHeader { }

const Header: FC<IHeader> = () => {
    return (
        <div className={styles.header}>

            <NavLink to={'/'}><img src={LOGO} alt={LOGO} className={styles.logo} /></NavLink>
            <div className={styles.userPanel}>
                <div className={styles.cartUser}>
                    <Link to={'cart'}>
                        <GrCart style={{width: '40px', height: '40px'}}/>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Header;