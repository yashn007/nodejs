import { Component, ViewChild,ElementRef } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { UsersService } from '../../@core/backend/common/services/users.service';
import swal from 'sweetalert2';
import { ReCaptcha2Component } from 'ngx-captcha';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: 'forgot-password.component.html',
  styleUrls:['forgot.component.scss']
})
export class ForgotPasswordComponent {
  forgotForm: FormGroup;
  token:any;
  user:any;
  sitekey:any;
  submitted = false;
  @ViewChild('captchaElem') captchaElem: ReCaptcha2Component;
  @ViewChild('langInput') langInput: ElementRef;
  public captchaIsLoaded = false;
  public captchaSuccess = false;
  public captchaIsExpired = false;
  public captchaResponse?: string;
  public theme: 'light' | 'dark' = 'light';
  public size: 'compact' | 'normal' = 'normal';
  public lang = 'en';
  public type: 'image' | 'audio';
  constructor(private activatedRoute: ActivatedRoute, private UsersService:UsersService,private router:  Router,private formBuilder: FormBuilder) {
    this.forgotForm = this.formBuilder.group({
      email:['',Validators.required],
      recaptcha: ['', Validators.required]
    });
    this.sitekey = "6Ldk_7kaAAAAAA6Zdcyi8qX9kb7wZsolXGXjIJHi"
    this.user = {
      email:''
    };
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.token =  params.token;
    });
  };
  ngOnInit(): void {};

  routerToPage(link){
    this.router.navigate([link]);
  };

  get f() { return this.forgotForm.controls; }

  onReset() {
    this.submitted = false;
    this.forgotForm.reset();
}

  ForgotPassword(){
    this.submitted = true;

    // stop here if form is invalid
    if (this.forgotForm.invalid) {
      return;
    }
    let condition = {
      email:this.forgotForm.value.email
    };
    this.UsersService.ForgotPassword(condition).subscribe(result =>{
      if(result['success']) {
        swal.fire(
          'Forgot Password',
          result['message'],
          'success'
        );
        this.router.navigate(['/login']);
      } else {
        swal.fire(
          'Forgot Password',
          result['message'],
          'error'
        );
      }
    });
  };

  handleSuccess(data) {
    console.log(data, ' -  - - - data');
  }
}
