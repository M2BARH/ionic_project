import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorService } from '../error.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string = '';
  password: string = '';

  constructor(private router: Router, private errorService: ErrorService) { }

  ngOnInit() {
  }

  login() {

    if (!this.email) {
      this.errorService.displayErrorToast('Email cannot be empty.');
      return;
    }

    if (!this.password) {
      this.errorService.displayErrorToast('Password cannot be empty.');
      return;
    }

    this.goToMain();
  }

  goToForgotPassword() {
    this.router.navigate(['/forgot-password']);
  }

  goToSignUp() {
    this.router.navigate(['/signup']);
  }

  goToMain() {
    this.router.navigate(['/main']);
  }

}

