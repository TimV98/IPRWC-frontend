import {Injectable} from '@angular/core';
import {Product} from "../models/Product.model";
import {Order} from "../models/Order";
import {HttpClient} from "@angular/common/http";
import {ShoppingCartItem} from "../models/ShoppingCartItem";


const ORDER_API: string = "http://localhost:8080/api/order/";

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private _shoppingCart: ShoppingCartItem[] = []

  private _cartItem: ShoppingCartItem;

  constructor(private http: HttpClient) {
  }

  convertProductToCartItem(product: Product) {
    this._cartItem = new ShoppingCartItem();
    this._cartItem.product_name = product.product_name;
    this._cartItem.quantity = 1;
    this._cartItem.price = product.price;
    this._shoppingCart.push(this._cartItem);

  }

  postOrder(order: Order) {
    return this.http.post(ORDER_API + 'add', order)
  }

  deleteOrder(id: number) {
    return this.http.delete(ORDER_API + 'delete/' + id)
  }

  get shoppingCart(): ShoppingCartItem[] {
    return this._shoppingCart;
  }

  set shoppingCart(value: ShoppingCartItem[]) {
    this._shoppingCart = value;
  }

  get cartItem(): ShoppingCartItem {
    return this._cartItem;
  }

  set cartItem(value: ShoppingCartItem) {
    this._cartItem = value;
  }
}
