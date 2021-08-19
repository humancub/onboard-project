import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IGetUsersResponse, IProfile, IUser } from '../models';
import { map } from 'rxjs/operators';

import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class EndpointService {
  constructor(
    private http: HttpClient,
    private angularFirestore: AngularFirestore
  ) {}

  public getUsers(): Observable<IUser[]> {
    return this.http
      .get<IGetUsersResponse>(environment.usersUrl, {
        headers: { 'app-id': environment.appId },
      })
      .pipe(map((response: IGetUsersResponse) => response.data));
  }

  public getFavoriteUsers(): Observable<any> {
    return this.angularFirestore.collection('favorite-users').valueChanges();
  }

  public addToFavorite(user: IUser): Promise<any> {
    return this.angularFirestore.collection('favorite-users').add(user);
  }

  public getProfile(userId: string): Observable<IProfile> {
    return this.http.get<IProfile>(`${environment.profileUrl}/${userId}`, {
      headers: { 'app-id': environment.appId },
    });
  }
}
