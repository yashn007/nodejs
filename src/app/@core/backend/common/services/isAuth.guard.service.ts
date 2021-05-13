import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IsAuthGuard implements CanActivate{

constructor(private authService: AuthService, private router: Router) {}


  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.Session().pipe(
      map(data => {
        if(data['success']){
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
