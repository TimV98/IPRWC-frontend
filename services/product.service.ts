import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Product} from "../models/Product.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.prod";

const PRODUCT_API: string = environment.API_URL +environment.PRODUCTS;

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _products: Product[] = []

  private _product: Product = new Product();

  get products(): Product[] {
    return this._products;
  }

  set products(value: Product[]) {
    this._products = value;
  }

  constructor(private http: HttpClient) {
  }


  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(PRODUCT_API + "getAll")
  }

  getFoto(){
    return this.http.get<any>("http://localhost:8080/api/photos/dd2-logo.png")
  }

  getProduct(id: number) {
    return this.http.get<Product>(PRODUCT_API + 'get/' + id)
  }

  addProduct(product: FormData){
    return this.http.post<any>(PRODUCT_API + 'add', product,)
  }

  editProduct(id: number, product: FormData) {
    return this.http.put(PRODUCT_API + "edit/" + id, product)
  }

  deleteProduct(id: number) {
    return this.http.delete(PRODUCT_API + "delete/" + id)
  }

  get product(): Product {
    return this._product;
  }

  set product(value: Product) {
    this._product = value;
  }
}
