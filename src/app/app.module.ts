import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AppRoutingModule } from './routes/app-routing.module';
import { RootComponent } from './components/root/root.component';
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RootComponentsModule } from './components';
import { AuthenticationService } from './components/authentication/core';

import { UsersEffects, usersReducer } from './components/main-page/store';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AngularFireDatabaseModule } from '@angular/fire/database';

@NgModule({
  imports: [
    BrowserModule,
    AngularFirestoreModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RootComponentsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    StoreModule.forRoot({ usersReducer }),
    EffectsModule.forRoot([UsersEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    AngularFireDatabaseModule,
  ],
  providers: [AuthenticationService],
  bootstrap: [RootComponent],
})
export class AppModule {}
