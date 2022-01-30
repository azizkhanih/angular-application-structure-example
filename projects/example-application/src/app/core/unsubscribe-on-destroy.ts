import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

// TODO: Add Angular decorator.
@Injectable()
export abstract class UnsubscribeOnDestroy implements OnDestroy
{
  onDestroy$ = new Subject<void>();

  ngOnDestroy(): void
  {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
