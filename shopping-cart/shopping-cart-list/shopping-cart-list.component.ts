import {Component} from '@angular/core';
import {ShoppingCartItem} from "../../models/ShoppingCartItem";
import {ShoppingCartService} from "../../services/shopping-cart.service";

@Component({
  selector: 'app-shopping-cart-list',
  templateUrl: './shopping-cart-list.component.html',
  styleUrls: ['./shopping-cart-list.component.scss']
})
export class ShoppingCartListComponent {

  shoppingCart: ShoppingCartItem[] = this.shoppingCartService.shoppingCart;
  indexItem: number;


  constructor(private shoppingCartService: ShoppingCartService) {
  }

  checkQuantity(item: ShoppingCartItem, index: number) {
    console.log(item.quantity)
    this.shoppingCart.at(index)!.price! = this.shoppingCart.at(index)!.price! * this.shoppingCart.at(index)!.quantity!;
    if (this.shoppingCart.at(index)!.quantity === 1) {
      this.shoppingCart.at(index)!.price! = this.shoppingCart.at(index)!.price! / 2;
    }
    if (this.shoppingCart.at(index)!.quantity === 0) {
      this.shoppingCart.splice(index, 1)
    }

  }
}
