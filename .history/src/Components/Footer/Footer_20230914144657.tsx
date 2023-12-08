import React from 'react';

import VISA from '../../images/visa.svg';
import MASTER_CARD from '../../images/master-card.svg';
import YOUTUBE from '../../images/youtube.svg';
import VK from '../../images/vk.svg';
import FACEBOOK from '../../images/facebook.svg';
import TELEGRAM from '../../images/telegram.svg';
import EMAIL from '../../images/email.svg';
import PHONE from '../../images/old-phone.svg';

import styles from '../../styles/Footer.module.css';

import { Link } from 'react-router-dom';




export default function Footer() {
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
                    <h3 className={styles.usefulLinks}>оплата</h3>
                    <hr />
                    <p className={styles.lorem}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima fugiat error totam est mollitia magni exercitationem, eos hic libero ea, ipsa nulla! Impedit explicabo labore sapiente ullam incidunt rem. Voluptatem?</p>
                    <ul className={styles.footerLinks}>
                        <li><a href="https://by.visa.com/" title='Оплата с помощью Visa' target='_blank' rel="noreferrer">
                            <img src={VISA} alt="Visa" />
                        </a>
                        </li>
                        <li>
                            <a href="https://www.mastercard.com/global/en.html" title='Оплата с помощью MasterCard' target='_blank' rel="noreferrer">
                                <img src={MASTER_CARD} alt="MasterCard" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className={styles.usefulLinks}>контакты</h3>
                    <hr />
                    <ul className={styles.usefulLinksUl}>
                        <li>
                            <img src={PHONE} alt="phone" />
                            <a href="tel: 88122345655">8 (812) 234-56-55</a>
                        </li>
                        <li>
                            <img src={PHONE} alt="phone" />
                            <a href="tel: 88122345655">8 (812) 234-56-55</a>
                        </li>
                        <li>
                            <img src={EMAIL} alt="email" />
                            <a href="mailto: ojjo@ojjo.ru"> ojjo@ojjo.ru</a>
                        </li>
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
    )
}
