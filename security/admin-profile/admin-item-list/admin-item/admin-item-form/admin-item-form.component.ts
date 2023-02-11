import {Component, OnInit} from '@angular/core';
import {Product} from "../../../../../products/Product.model";
import {ProductService} from "../../../../../services/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-admin-item-form',
  templateUrl: './admin-item-form.component.html',
  styleUrls: ['./admin-item-form.scss']
})
export class AdminItemFormComponent implements OnInit {

  product: Product = this.productService.product;
  idPresent: boolean = false;
  id: number;
  productForm: FormGroup

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    this.hasId();
    if (this.idPresent) {
      this.productService.getProduct(this.id).subscribe(data => {
        this.product = this.productService.product = data;

        if (this.idPresent) {
          this.productForm = new FormGroup({
            product_name: new FormControl(this.product.product_name),
            price: new FormControl(this.product.price),
            product_rating: new FormControl(this.product.product_rating),
            description: new FormControl(this.product.description),
            image: new FormControl(this.product.image)
          })
          this.productForm.value.product_name = data.product_name;
          this.productForm.value.price = data.price;
          this.productForm.value.product_rating = data.product_rating;
          this.productForm.value.description = data.description;
          this.productForm.value.image = data.image;
        }
      })
    } else {
      this.productForm = new FormGroup({
        product_name: new FormControl(),
        price: new FormControl(),
        product_rating: new FormControl(),
        description: new FormControl(),
        image: new FormControl()
      })
    }
  }

  hasId() {
    this.route.params.subscribe(data => {
      this.id = data['id'];
      if (this.id) {
        return this.idPresent = true;
      }
      return this.idPresent = false;
    })
  }

  submitForm() {
    this.product.product_name = this.productForm.value.product_name;
    this.product.price = this.productForm.value.price;
    this.product.product_rating = this.productForm.value.product_rating;
    this.product.description = this.productForm.value.description;
    this.product.image = this.productForm.value.image;
    if (this.idPresent) {
      this.productService.editProduct(this.id, this.product).subscribe(() => {
        this.router.navigate(['/admin/products'])
      });
    } else {
      this.productService.addProduct(this.product).subscribe(() => {
        this.router.navigate(['/admin/products'])
      })
    }
  }
}
