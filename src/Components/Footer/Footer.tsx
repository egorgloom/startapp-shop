import { FC } from 'react';

import { Link } from 'react-router-dom';

import styles from './Footer.module.scss'


import YOUTUBE from '../../images/youtube.svg';
import VK from '../../images/vk.svg';
import FACEBOOK from '../../images/facebook.svg';
import TELEGRAM from '../../images/telegram.svg';
import EMAIL from '../../images/email.svg';


const Footer: FC = () => {
    return (
        <footer className={styles.footer} >
            <div className={styles.footerBlockInfo}>
                <div>
                    <h3 className={styles.usefulLinks}>полезные ссылки</h3>
                    <hr />
                    <ul className={styles.usefulLinksUl}>
                        <Link to={'/'}><li>Доставка</li></Link>
                        <Link to={'/'}><li>Оплата</li></Link>
                        <Link to={'/'}><li>Акции</li></Link>
                        <Link to={'/'}><li>Политика конфиденциальности</li></Link>
                    </ul>
                </div>
                <div>
                    <h3 className={styles.usefulLinks}>социальные сети</h3>
                    <hr />
                    <p className={styles.lorem}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima fugiat error totam est mollitia magni exercitationem, eos hic libero ea, ipsa nulla! Impedit explicabo labore sapiente ullam incidunt rem. Voluptatem?</p>
                    <ul className={styles.footerLinks}>
                        <li>
                            <a href="https://www.youtube.com/" target='_blank' title='Наш YouTube' rel="noreferrer">
                                <img src={YOUTUBE} alt="YOUTUBE" />
                            </a>
                        </li>
                        <li>
                            <a href="https://vk.com/feed" target='_blank' title='Наш VK' rel="noreferrer">
                                <img src={VK} alt="VK" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/" target='_blank' title='Наш Facebook' rel="noreferrer">
                                <img src={FACEBOOK} alt="FACEBOOK" />
                            </a>
                        </li>
                        <li>
                            <a href="https://telegram.org/" target='_blank' title='Наш Telegram' rel="noreferrer">
                                <img src={TELEGRAM} alt="TELEGRAM" />
                            </a>
                        </li>
                        <li>
                            <a href="mailto: ojjo@ojjo.ru" target='_blank' title='Написать нам на наш E-mail' rel="noreferrer">
                                <img src={EMAIL} alt="EMAIL" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className={styles.developer}>
                <p className={styles.lorem}>Created by Egor Orlov</p>
            </div>
        </footer>
    );
};

export default Footer;