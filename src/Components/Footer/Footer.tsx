import { FC } from 'react';

import { Link } from 'react-router-dom';

import { usefulLinks, IFooter } from '../../interfaces/interfaces';

import { socialLinks, usefulLink } from '../../utils/common';

import styles from './Footer.module.scss'


const Footer: FC = () => {


    return (
        <footer className={styles.footer} >
            <div className={styles.footerBlockInfo}>
                <div>
                    <h3 className={styles.usefulLinks}>полезные ссылки</h3>
                    <hr />
                    <ul className={styles.usefulLinksUl}>
                        {usefulLink.map((elem: usefulLinks) =>
                            <Link to={'/'} key={elem.id}><li>{elem.title}</li></Link>
                        )}
                    </ul>
                </div>
                <div>
                    <h3 className={styles.usefulLinks}>социальные сети</h3>
                    <hr />
                    <p className={styles.lorem}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima fugiat error totam est mollitia magni exercitationem, eos hic libero ea, ipsa nulla! Impedit explicabo labore sapiente ullam incidunt rem. Voluptatem?</p>
                    <ul className={styles.footerLinks}>
                        {socialLinks.map((elem: IFooter) =>
                            <li key={elem.id}>
                                <a href={elem.link} target='_blank' title={elem.title} rel="noreferrer">
                                    <img src={elem.icon} alt={elem.title} />
                                </a>
                            </li>
                        )}
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