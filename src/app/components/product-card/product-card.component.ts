import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'product-card',
  imports: [],
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent {

  @Input() product!: Product;

  @Output() productEventEmitter:EventEmitter<Product> = new EventEmitter<Product>();
  
  onAddCart(product: Product): void {
    this.productEventEmitter.emit(product);
  }
}
