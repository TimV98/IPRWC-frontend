import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {UserProfileComponent} from "./user-profile/user-profile.component";
import {UserProfileEditComponent} from "./user-profile/user-profile-edit/user-profile-edit.component";
import {AdminProfileComponent} from "./admin-profile/admin-profile.component";
import {AdminUserListComponent} from "./admin-profile/admin-user-list/admin-user-list.component";
import {AdminItemListComponent} from "./admin-profile/admin-item-list/admin-item-list.component";
import {
  AdminEditUserComponent
} from "./admin-profile/admin-user-list/admin-user-item/admin-edit-user/admin-edit-user.component";
import {
  AdminItemFormComponent
} from "./admin-profile/admin-item-list/admin-item/admin-item-form/admin-item-form.component";

const securityRoutes: Routes = [

  {path: 'login', component: LoginComponent},
  {path: 'profile', component: UserProfileComponent},
  {path: 'profile/edit', component: UserProfileEditComponent},
  {
    path: 'admin', component: AdminProfileComponent, children: [
      {path: 'userlist', component: AdminUserListComponent},
      {path: 'products', component: AdminItemListComponent},
      {path: 'userlist/:id/edit', component: AdminEditUserComponent},
      {path: 'products/add', component: AdminItemFormComponent},
      {path: 'products/:id/edit', component: AdminItemFormComponent}
    ]
  }

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(securityRoutes)
  ],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule {
}
