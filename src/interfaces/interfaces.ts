export interface IProduct {
    quantity: number;

    id?: number ,
    title?: string,
    price?: number,
    description?:string,
    image?: string,
    rating?: IRating,
}

export interface IRating {
    rate?: string,
    count?: number,
}