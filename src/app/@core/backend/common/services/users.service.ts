import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UsersApi } from '../api/users.api';

@Injectable()
export class UsersService {
  userModel: any;
  constructor(private api: UsersApi, private http: HttpClient) {}

  Login(data): Observable<any[]> {
    return this.api.Login(data);
  };

  ResetPasword(data):Observable<any[]>{
    return this.api.ResetPasword(data);
  };


  ForgotPassword(data):Observable<any[]>{
    return this.api.ForgotPassword(data);
  };

  CreateAccount(data):Observable<any[]>{
    return this.api.CreateAccount(data);
  };
  // GetAllUsersList():Observable<any> {
  //   return this.api.GetAllUsersList();
  // }
  // DeleteUser(data):Observable<any>{
  //   return this.api.DeleteUser(data);
  // }
  // UpdateUser(data):Observable<any>{
  //   return this.api.UpdateUser(data);
  // }
}
