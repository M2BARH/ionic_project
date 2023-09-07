import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorService } from '../error.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  email:string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(public router:Router, public errorService:ErrorService) { }

  ngOnInit() {
  }

  signup() {
    if (!this.email) {
      this.errorService.displayErrorToast("Email cannot be empty");
      return;
    }
    if (!this.password) {
      this.errorService.displayErrorToast("Password cannot be empty");
      return;
    }
    if (!this.confirmPassword) {
      this.errorService.displayErrorToast("Please confirm password");
      return;
    }

    this.goToMain();
  }

  goToLogin() {
    this.router.navigate(['/login'])
  }

  goToMain() {
    this.router.navigate(['main']);
  }

}
