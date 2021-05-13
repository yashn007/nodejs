import { Injectable } from '@angular/core';
import { HttpService } from '../api/http.service';
import { HttpParams, HttpClient } from '@angular/common/http';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
import { tap,map } from 'rxjs/operators';

@Injectable({
  providedIn : 'root'
})
export class AuthService {
  token :any;
  constructor(private http: HttpClient){
    this.token =  localStorage.token;
  };


  Session() {
    this.token =  localStorage.token;
    if(!this.token) {
      this.token = '';
    }
    let url = 'users/session';
    return this.http.post(url,{},{ headers: new HttpHeaders({'token':this.token})}).pipe(
      tap(res => (
        res
      ),
      map(res => {
        res;
      },
      error => {
        var res = {
          success:false
        };
        res;
      })
    ));
  }
}
