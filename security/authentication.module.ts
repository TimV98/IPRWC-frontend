import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {httpInterceptorProviders} from "../interceptors/HttpRequestInterceptor";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {AuthInterceptor} from "../interceptors/AuthInterceptor";
import {UserProfileEditComponent} from './user-profile/user-profile-edit/user-profile-edit.component';
import {UserProfileComponent} from "./user-profile/user-profile.component";
import {AdminProfileComponent} from "./admin-profile/admin-profile.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {RouterLink} from "@angular/router";
import {AuthenticationRoutingModule} from "./authentication-routing.module";
import { AdminItemListComponent } from './admin-profile/admin-item-list/admin-item-list.component';
import { AdminUserListComponent } from './admin-profile/admin-user-list/admin-user-list.component';
import { AdminItemComponent } from './admin-profile/admin-item-list/admin-item/admin-item.component';
import { AdminUserItemComponent } from './admin-profile/admin-user-list/admin-user-item/admin-user-item.component';
import { AdminEditUserComponent } from './admin-profile/admin-user-list/admin-user-item/admin-edit-user/admin-edit-user.component';
import { AdminItemFormComponent } from './admin-profile/admin-item-list/admin-item/admin-item-form/admin-item-form.component';


@NgModule({
  declarations: [
    UserProfileEditComponent,
    UserProfileComponent,
    AdminProfileComponent,
    LoginComponent,
    RegisterComponent,
    AdminItemListComponent,
    AdminUserListComponent,
    AdminItemComponent,
    AdminUserItemComponent,
    AdminEditUserComponent,
    AdminItemFormComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    AuthenticationRoutingModule
  ],

  providers: [httpInterceptorProviders, {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}]
})
export class AuthenticationModule {
}
