import { FC } from 'react';
import { NavLink, Link } from 'react-router-dom';

import  LOGO  from './../../assets/images/ojjo.svg'

import { GrCart } from "react-icons/gr";

interface IHeader {}

const Header: FC<IHeader> = () => {
  return (
    <div className={styles.header}>
    <div className={styles.headerContainer}>
        <nav>
            <ul className={styles.nav}>
                <NavLink to={'/'}><li>Контрагентам</li></NavLink>
                <NavLink to={'/'}><li>Дизайнерам</li></NavLink>
                <NavLink to={'/'}><li>Вакансии</li></NavLink>
            </ul>
        </nav>
        <NavLink to={'/'}><img src={LOGO} alt={LOGO} className={styles.logo} /></NavLink>
        <div className={styles.userPanel}>
            <div>
                <Search />
            </div>
            <div>
                <button className={styles.userBtn}>Вход</button>
                <span className={styles.userBtn}>/</span>
                <button className={styles.userBtn}>Регистрация</button>
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