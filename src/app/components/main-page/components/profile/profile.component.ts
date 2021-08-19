import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { loading } from '../../store';
import { Store } from '@ngrx/store';
import { EndpointService, IProfile } from '../../core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit, OnDestroy {
  public profile$: Observable<IProfile> = this.activatedRoute.params.pipe(
    switchMap(({ id }) => this.endpointService.getProfile(id))
  );

  public loading$: Observable<boolean> = this.store.select(loading);
  private destroy$ = new Subject();

  constructor(
    private endpointService: EndpointService,
    private activatedRoute: ActivatedRoute,
    private store: Store
  ) {}

  ngOnInit(): void {}

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
