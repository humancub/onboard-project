import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../core';

@Component({
  selector: 'app-create-email',
  templateUrl: './create-email.component.html',
  styleUrls: ['./create-email.component.scss'],
})
export class CreateEmailComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  public createUser() {
    this.authenticationService
      .registerWithEmail(this.email.value, this.password.value)
      .then(
        (res) => {
          this.router.navigate(['main-page/users']);
          this.snackBar.open('Login was successfull', 'Undo');
          localStorage.setItem('user', JSON.stringify(res));
        },
        (error) => {
          this.snackBar.open('Oops, weird error', 'Undo');
        }
      );
  }
}
