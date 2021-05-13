import { Component } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { UsersService } from '../../@core/backend/common/services/users.service';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { MustMatch } from '../must-match.validator';
import swal from 'sweetalert2';
@Component({
  selector: 'app-reset-password',
  templateUrl: 'reset-password.component.html',
  styleUrls:['reset-password.component.scss']
})
export class ResetPasswordComponent {
  ResetForm: FormGroup;
  token:any;
  user:any;
  submitted = false;

  constructor(private activatedRoute: ActivatedRoute, private UsersService:UsersService,private router: Router,private formBuilder: FormBuilder) {
    this.ResetForm = this.formBuilder.group({
      password:['',Validators.required],
      c_password:['',Validators.required]
    }, {
      validator: MustMatch('password', 'c_password')
  });
    this.user = {
      password:'',
      c_password:''
    };
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.token =  params.token;
    });
  };
  ngOnInit(): void {};
  get f() { return this.ResetForm.controls; }

  ResetPassword(){
    this.submitted = true;
    if (this.ResetForm.invalid) {
      return;
    }
    let data = this.ResetForm.value;
    data.token =  this.token;
    this.UsersService.ResetPasword(data).subscribe(result =>{
      if(result['success']) {
        swal.fire(
          'Reset Password',
          result['message'],
          'success'
        );
        this.router.navigate(['/login']);
      } else {
        swal.fire(
          'Reset Password!',
          result['message'],
          'error'
        );
      }
    });
  };
}

