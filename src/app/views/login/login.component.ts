import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../@core/backend/common/services/users.service';
import swal from 'sweetalert2';


@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html',
  styleUrls:['login.component.scss']
})
export class LoginComponent {
  user: any;
  constructor(private router: Router,private userService:UsersService){
    this.user = {
      email:'',
      password:''
    };
  };

  ngOnInit(): void {};

  routerToPage(link){
    this.router.navigate([link]);
  };

  Login(){
    this.userService.Login(this.user).subscribe(result =>{
      if(result['success']) {
        swal.fire(
          'Login',
          'You are logged in successfully',
          'success'
        );
        var data = result['data'];
        localStorage.setItem('role',data.role);
        localStorage.setItem('token',data.token);
        localStorage.setItem('is_approved',data.is_approved);
        localStorage.setItem('is_delete',data.is_delete);
        this.routerToPage('/dashboard');
      } else {
        swal.fire(
          'Login!',
          result['message'],
          'error'
        );
        this.user = {
          email:'',
          password:''
        };
      }
    })
  }
}
