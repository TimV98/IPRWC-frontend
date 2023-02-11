import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RegisterComponent} from './security/register/register.component';
import {NavigationComponent} from './navigation/navigation.component';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import {ShoppingCartItemComponent} from './shopping-cart/shopping-cart-item/shopping-cart-item.component';
import {ShoppingCartListComponent} from './shopping-cart/shopping-cart-list/shopping-cart-list.component';
import {ProductModule} from "./products/product.module";
import {AuthenticationModule} from "./security/authentication.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ShoppingCartComponent,
    ShoppingCartItemComponent,
    ShoppingCartListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductModule,
    AuthenticationModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
