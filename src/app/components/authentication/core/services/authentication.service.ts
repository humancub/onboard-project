import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  constructor(
    public firebaseAuth: AngularFireAuth,
    public angularFireAuth: AngularFireAuth,

    public router: Router
  ) {
    this.angularFireAuth.authState.subscribe((userResponse) => {
      if (userResponse) {
        localStorage.setItem('user', JSON.stringify(userResponse));
      } else {
        localStorage.setItem('user', '');
      }
    });
  }

  public loginWithEmail(email: any, password: any) {
    return this.angularFireAuth.signInWithEmailAndPassword(email, password);
  }

  public registerWithEmail(email: string, password: string) {
    return this.angularFireAuth.createUserWithEmailAndPassword(email, password);
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['authentication/login']);
  }

  public isUserLoggedIn(): boolean {
    return !!localStorage.getItem('user');
  }

  public signInWithGoogle() {
    return this.firebaseAuth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    );
  }
}
