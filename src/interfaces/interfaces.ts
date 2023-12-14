export interface IProduct {
    quantity: number;
    id: number ,
    title?: string,
    price: number,
    description?:string,
    image?: string,
    rating?: IRating,
}

export interface IRating {
    rate?: string,
    count?: number,
}

export type ICart = Omit<IProduct, 'rating'>

export interface ISocialLink {
    id: number,
    title: string,
    link: string,
    icon: string
}

export type usefulLinks = Omit<ISocialLink, 'link' | 'icon'>