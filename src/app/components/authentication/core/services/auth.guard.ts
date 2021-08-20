import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from '..';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    public authenticationService: AuthenticationService,
    public router: Router
  ) {}
  canActivate(): boolean {
    if (!this.authenticationService.isUserLoggedIn()) {
      this.router.navigate(['/authentication/login']);
    }

    return true;
  }
}
