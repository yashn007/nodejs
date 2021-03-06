import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import { map } from 'rxjs/operators';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
@Injectable()
export class AuthApi {
  url : any;
  private readonly apiController: string = 'users';

  constructor(private api: HttpService, private http: HttpClient) {
    this.url = 'users/';
   }

   session(): Observable<any> {
    let url = this.url + 'session';
    return this.http.get(url).pipe(map(result => {
      return result;
    }));
  };
}
