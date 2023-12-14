import YOUTUBE from '../images/youtube.svg';
import VK from '../images/vk.svg';
import FACEBOOK from '../images/facebook.svg';
import TELEGRAM from '../images/telegram.svg';
import EMAIL from '../images/email.svg';

import { usefulLinks, IFooter } from '../interfaces/interfaces';



export const BASE_URL = 'https://server-shop-co.onrender.com/';

export const sumPrice = (arr: number[]) => arr.reduce((a: number,b: number) => a + b, 0);


export const usefulLink: usefulLinks[] = [{
    id: 1,
    title: 'Доставка',
},
{
    id: 2,
    title: 'Оплата',
},
{
    id: 3,
    title: 'Акции',
},
{
    id: 4,
    title: 'Политика конфиденциальности',
}


]

export const socialLinks: IFooter[] = [{
    id: 1,
    title: 'Наш YouTube',
    link: 'https://www.youtube.com/',
    icon: YOUTUBE,
},
{
    id: 2,
    title: 'Наш VK',
    link: 'https://vk.com/feed',
    icon: VK,

},
{
    id: 3,
    title: 'Наш Facebook',
    link: 'https://www.facebook.com/',
    icon: FACEBOOK,

},
{
    id: 4,
    title: 'Наш Telegram',
    link: 'https://telegram.org/',
    icon: TELEGRAM,

},
{
    id: 5,
    title: 'Наш Email',
    link: 'mailto: ojjo@ojjo.ru',
    icon: EMAIL,

}
]