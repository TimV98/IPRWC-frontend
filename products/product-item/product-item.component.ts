import {Component, Input} from '@angular/core';
import {Product} from "../../models/Product.model";
import {ShoppingCartService} from "../../services/shopping-cart.service";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent {

  @Input() product: Product;

  constructor(private shoppingCartService: ShoppingCartService) {}

  convertProductToCartItem(){
    this.shoppingCartService.convertProductToCartItem(this.product)
  }

}
