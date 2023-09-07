import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorService } from '../error.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  email: string = '';
  newPassword: string = '';
  confirmNewPassword: string = '';

  constructor(private router: Router, private errorService: ErrorService) { }

  ngOnInit() {
  }

  resetPassword() {

    if (!this.email) {
      this.errorService.displayErrorToast("Email cannot be empty.");
      return;
    }
    if (!this.newPassword) {
      this.errorService.displayErrorToast("Password cannot be empty.");
      return;
    }
    if (!this.confirmNewPassword) {
      this.errorService.displayErrorToast("Please confirm password.");
      return;
    }

    this.goToLogin();
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

}
