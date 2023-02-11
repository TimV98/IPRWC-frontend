import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {UserService} from "../../services/user.service";
import {User} from "../../models/User";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) {
  }
  user: User = this.userService.user;

  ngOnInit(): void {
    this.userService.getUserProfile().subscribe(res =>{
      this.user = res;
      this.userService.user = this.user
    });
  }

}
