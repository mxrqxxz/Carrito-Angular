import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from '../../models/cartItem';

@Component({
  selector: 'navbar',
  imports: [],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {

  @Input() items: CartItem[] = [];
  @Output() showCartEventEmitter = new EventEmitter();

  showCart(): void {
    this.showCartEventEmitter.emit();
  }
}
