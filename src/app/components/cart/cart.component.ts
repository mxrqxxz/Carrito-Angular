import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from '../../models/cartItem';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cart',
  imports: [CommonModule],
  templateUrl: './cart.component.html',
})
export class CartComponent {

  @Input() total: number = 0;
  @Input() items: CartItem[] = [];
  @Output() idProductEventEmitter: EventEmitter<number> = new EventEmitter();
  @Output() showCartEventEmitter = new EventEmitter();

  onDeleteCart(id: number): void {
    this.idProductEventEmitter.emit(id);
  }

  showCart(): void {
    this.showCartEventEmitter.emit();
  }
}
