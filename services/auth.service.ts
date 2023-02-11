import {Injectable} from '@angular/core';
import {BehaviorSubject, map, Observable, Subject} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LoginCredentials} from "../security/LoginCredentials";
import {User} from "../models/User";
import {SingupRequest} from "../security/SingupRequest";

const AUTH_API = 'http://localhost:8080/api/auth/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedInSubject = new BehaviorSubject<boolean>(false)

  private isAdmin = new BehaviorSubject<boolean>(false)

  constructor(private http: HttpClient) {
  }

  sendStatus(value: boolean) {
    this.isLoggedInSubject.next(value);
  }

  getStatus() {
    return this.isLoggedInSubject.asObservable();
  }

  sendAdmin(value: boolean) {
    if (localStorage.getItem('role') == 'ROLE_ADMIN') {
      this.isAdmin.next(true)
    } else {
      this.isAdmin.next(false);

    }
  }

  getAdmin() {
    return this.isAdmin.asObservable()
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
    this.sendStatus(false)
    localStorage.clear();
  }

  userIsLoggedIn() {
    if (localStorage.getItem('authToken')) {
      this.sendStatus(true)
    } else {
      this.sendStatus(false)
    }
  }
}
