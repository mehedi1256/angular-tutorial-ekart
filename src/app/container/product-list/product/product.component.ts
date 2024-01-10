import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  @Input()
  product: {
    id: number,
    title: string,
    price: number,
    discountPrice?: number,
    inStock: boolean,
    description: string,
    category: string,
    image: string,
    rating: object,
  };
}
