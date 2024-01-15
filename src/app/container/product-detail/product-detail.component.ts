import { Component } from '@angular/core';
import { Product } from './../../Models/Product';
@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  product: Product;
}
