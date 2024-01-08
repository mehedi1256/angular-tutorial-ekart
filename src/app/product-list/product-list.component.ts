import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  name = "Mehedi Hassan Shovo";
  product = {
    name: 'iPhone 14 pro max',
    price: 999,
    color: 'Matte black',
    discount: 8.5,
    inStock: 12,
    pImage: './assets/images/iphone14pro-max.jpeg'
  }

  getDiscountedPrice() {
    return this.product.price - (this.product.price * this.product.discount / 100)
  }
}
