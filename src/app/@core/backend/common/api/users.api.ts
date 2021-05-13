import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import { map } from 'rxjs/operators';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
@Injectable()
export class UsersApi {
  url : any;
  user_url:any;
  token =  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmZGM2YWE3NmEwMWNkMWUwMjNiMDY2NSIsInVzZXJuYW1lIjoidW5kZWZpbmVkIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjA4OTYyNzEyfQ.B_DSG9J4wBNcw3EgyXIis7-V8KJGXolNYcfQDbGsOeo";
  private readonly apiController: string = 'users';

  constructor(private api: HttpService, private http: HttpClient) {
    this.url = 'users/';
   }

   Login(data): Observable<any> {
    let url = this.url + 'login';
    return this.http.post(url, data).pipe(map(result => {
      return result;
    }));
  };

  CreateAccount(data):Observable<any> {
    let url =  this.url+'create/account';
    return this.http.post(url,data).pipe(map(result => {
      return result;
    }));
  };

  ResetPasword(data):Observable<any> {
    let url = this.url + 'reset/password';
    return this.http.post(url,data).pipe(map(result => {
      return result;
    }));
  };

  ForgotPassword(data):Observable<any> {
    let url =  'email/forgot/password';
    return this.http.post(url,data).pipe(map(result => {
      return result;
    }));
  };
}
