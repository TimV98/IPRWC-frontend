import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ShoppingCartItem} from "../../models/ShoppingCartItem";
import {ShoppingCartService} from "../../services/shopping-cart.service";

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.scss']
})
export class ShoppingCartItemComponent {

  @Input() item: ShoppingCartItem = this.shoppingCartService.cartItem;
  @Output() itemEmitter = new EventEmitter<ShoppingCartItem>();


  constructor(private shoppingCartService :ShoppingCartService) {
  }

  subtractQuantity() {
    this.item.quantity!--;
    this.itemEmitter.emit(this.item)
  }

  addQuantity() {
    this.item.quantity!++;
    this.itemEmitter.emit(this.item)
  }
}
