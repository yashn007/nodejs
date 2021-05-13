import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../@core/backend/common/services/users.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styleUrls:['register.component.scss']
})
export class RegisterComponent {
  user:any;
  constructor(private router: Router,private userService:UsersService) {
    this.user = {
      name:"",
      email:"",
      password:"",
      role:"user",
      c_password:'',
      terms_condition:false
    };
  };

  ngOnInit(): void {
  };

  routerToPage(link){
    this.router.navigate([link]);
  };

  CreateAccount() {
    this.userService.CreateAccount(this.user).subscribe(result=> {
      console.log(result);
      if(result['success']) {
        swal.fire(
          'Register!',
          result['message'],
          'success'
        );
        this.routerToPage('/login');
      } else {
        swal.fire(
          'Register!',
          result['message'],
          'error'
        );
        this.user = {
          email:'',
          password:''
        };
      }
    });
  };
}
