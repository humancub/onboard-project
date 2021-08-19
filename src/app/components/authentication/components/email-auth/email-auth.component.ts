import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../core';

@Component({
  selector: 'app-email-auth',
  templateUrl: './email-auth.component.html',
  styleUrls: ['./email-auth.component.scss'],
})
export class EmailAuthComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  public loginUser() {
    this.authenticationService
      .loginWithEmail(this.email.value, this.password.value)
      .then(
        (res) => {
          this.router.navigate(['main-page/users']);
          this.snackBar.open('Login was successfull', 'Undo');
          localStorage.setItem('user', JSON.stringify(res));
        },
        (error) => {
          this.snackBar.open('This email does not exist', 'Undo');
        }
      );
  }
}
