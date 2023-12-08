import { FC } from 'react';
import { NavLink, Link } from 'react-router-dom';

import  LOGO  from './../../assets/images/ojjo.svg'

import { GrCart } from "react-icons/gr";

import styles from './Header.module.scss'

interface IHeader {}

const Header: FC<IHeader> = () => {
  return (
    <div className={styles.header}>
    <div className={styles.headerContainer}>
        <NavLink to={'/'}><img src={LOGO} alt={LOGO} className={styles.logo} /></NavLink>
        <div className={styles.userPanel}>
            <div>
                <Search />
            </div>
            <div className={styles.cartUser}>
                <Link to={'/cart'}>
                    <GrCart />
                </Link>
            </div>
        </div>
    </div>
</div>
  );
};

export default Header;