import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({})

  constructor(private authService: AuthService, private router: Router) {

  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'email': new FormControl(null),
      'password': new FormControl(null)
    })
    this.authService.getStatus();
  }


  login() {
    const email = this.loginForm?.value.email;
    const password = this.loginForm?.value.password
    this.authService.loginUser(email, password).subscribe((res: any) => {
      localStorage.setItem('authToken', res.accessToken)
      localStorage.setItem('role', res.roles[0])
      if (this.authService.getStatus())
        this.authService.sendStatus(true)
      if (localStorage.getItem('role') == 'ROLE_ADMIN'){
        this.authService.sendAdmin(true);
      }
      this.router.navigate(['/profile'])
    })
  }

}
