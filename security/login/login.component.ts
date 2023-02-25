import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {LoginCredentials} from "../../models/LoginCredentials";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  submitted: boolean;
  loginForm: FormGroup;
  private loginCredentials: LoginCredentials = new LoginCredentials();
  showErrorMessage: boolean;
  errorMessage: string;

  constructor(private authService: AuthService, private router: Router) {

  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, [Validators.required])
    })
  }


  login() {
    this.submitted = true;
    this.loginCredentials.email = this.loginForm?.value.email;
    this.loginCredentials.password = this.loginForm?.value.password
    this.authService.loginUser(this.loginCredentials).subscribe({
      next: res => {
        localStorage.setItem('authToken', res.accessToken)
        localStorage.setItem('role', res.roles[0])
        if (this.authService.getLoginStatus()) {
          this.authService.sendLoginStatus(true)
        }
        if (localStorage.getItem('role') == 'ROLE_ADMIN') {
          this.authService.sendAdmin(true);
        }
        this.router.navigate(['/profile'])
      }, error: (err: HttpErrorResponse) => {
        if(err.status === 401) {
          this.loginForm.controls['email'].setErrors({'invalid': true})
          this.loginForm.controls['password'].setErrors({'invalid': true})

          this.showErrorMessage = true;
          this.errorMessage = "Wrong Credentials!";
        }
      }

    })
  }

}
