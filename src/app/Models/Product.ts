export class Product {
    id: number;
    title: string;
    price: number;
    discountPrice?: number;
    inStock: boolean;
    description: string;
    category: string;
    image: string;
    rating: object;
}