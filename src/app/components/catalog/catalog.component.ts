import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'catalog',
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './catalog.component.html',
})
export class CatalogComponent {

  @Input() products!: Product[]; 
  @Output() productEventEmitter:EventEmitter<Product> = new EventEmitter<Product>();
  onAddCart(product: Product): void {
    this.productEventEmitter.emit(product);
  }
}
