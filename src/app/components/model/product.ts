export interface Product{
    id:number,
    title:string,
    price:string,
    description:string,
    category:string,
    image:string,
    rating:Irating
}

interface Irating{
    rate:number,
    count:number
}

export interface ProductList{
    id:number,
    title:string,
    price:string,
    description:string,
    image:string,
}