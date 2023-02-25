import {Injectable} from '@angular/core';
import {BehaviorSubject, catchError, throwError} from "rxjs";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {LoginCredentials} from "../models/LoginCredentials";
import {SingupRequest} from "../models/SingupRequest";

const AUTH_API = 'http://localhost:8080/api/auth/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedInSubject = new BehaviorSubject<boolean>(false)

  private isAdmin = new BehaviorSubject<boolean>(false)

  failedLogin: boolean;

  constructor(private http: HttpClient) {
  }

  loginUser(loginCredentials: LoginCredentials) {
    return this.http.post<any>(
      AUTH_API + 'login',
      loginCredentials,
    )
  }

  registerUser(signUpReq: SingupRequest) {
    return this.http.post(
      AUTH_API + 'register',
      signUpReq,
    );
  }

  logout() {
    this.sendLoginStatus(false)
    localStorage.clear();
  }

  userIsLoggedIn() {
    if (localStorage.getItem('authToken')) {
      this.sendLoginStatus(true)
    } else {
      this.sendLoginStatus(false)
    }
  }


  sendLoginStatus(value: boolean) {
    this.isLoggedInSubject.next(value);
  }

  getLoginStatus() {
    return this.isLoggedInSubject.asObservable();
  }


  sendAdmin(value: boolean) {
    if (localStorage.getItem('role') == 'ROLE_ADMIN') {
      this.isAdmin.next(value)
    } else {
      this.isAdmin.next(value);

    }
  }

  getAdmin() {
    return this.isAdmin.asObservable()
  }

}
