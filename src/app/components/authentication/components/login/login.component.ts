import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  onSignInGoogle() {
    this.authenticationService.signInWithGoogle().then(
      (result) => {
        localStorage.setItem('user', JSON.stringify(result));
        this.snackBar.open('Login was successfull', 'Undo');
        this.router.navigate(['main-page/users']);
      },
      (error) => {
        this.snackBar.open(error.error.message, 'Undo');
      }
    );
  }
}
