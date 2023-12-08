import { FC } from 'react';

import { Link } from 'react-router-dom';

import styles from './Footer.module.scss'

import VISA from '../../images/visa.svg';
import MASTER_CARD from '../../images/master-card.svg';
import YOUTUBE from '../../images/youtube.svg';
import VK from '../../images/vk.svg';
import FACEBOOK from '../../images/facebook.svg';
import TELEGRAM from '../../images/telegram.svg';
import EMAIL from '../../images/email.svg';
import PHONE from '../../images/old-phone.svg';

interface IFooter { }

const Footer: FC<IFooter> = () => {
    return (
        <footer className={styles.footer} >
            <div className={styles.footerBlockInfo}>
                <div style={{ width: '50%' }}>
                    <h3 className={styles.usefulLinks}>полезные ссылки</h3>
                    <hr />
                    <ul className={styles.usefulLinksUl}>
                        <Link to={'/'}><li>Доставка</li></Link>
                        <Link to={'/'}><li>Оплата</li></Link>
                        <Link to={'/'}><li>Акции</li></Link>
                        <Link to={'/'}><li>Политика конфиденциальности</li></Link>
                    </ul>
                </div>
                <div style={{ width: '50%' }}>
                    <h3 className={styles.usefulLinks}>оплата</h3>
                    <hr />
                    <p className={styles.lorem}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima fugiat error totam est mollitia magni exercitationem, eos hic libero ea, ipsa nulla! Impedit explicabo labore sapiente ullam incidunt rem. Voluptatem?</p>
                    
                </div>
                <div style={{ width: '50%' }}>
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
                <div style={{ width: '50%' }}>
                    <h3 className={styles.usefulLinks}>социальные сети</h3>
                    <hr />
                    <p className={styles.lorem}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima fugiat error totam est mollitia magni exercitationem, eos hic libero ea, ipsa nulla! Impedit explicabo labore sapiente ullam incidunt rem. Voluptatem?</p>
                    
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