import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild{

  constructor(private authService: AuthService, private router: Router) {}


  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.Session().pipe(
      map(data => {
        if(data['success']){
          return true;
        } else {
          localStorage.clear();
          this.router.navigate(['/login']);
          return false;
        }
      })
    );
  };


  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
  boolean | Observable<boolean> | Promise<boolean> {
    return this.authService.Session().pipe(
      map(data => {
        if(data['success']){
          console.log
          this.router.navigate(['/dashboard']);
          return false;
        } else {
          localStorage.clear();
          return true;
        }
      })
    );
  };
}
