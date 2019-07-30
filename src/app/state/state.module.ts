import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { appReducer } from './app.state';
import { NgrxAutoEntityModule } from '@briebug/ngrx-auto-entity';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(appReducer, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true,
      },
    }),
    EffectsModule.forRoot([]),
    NgrxAutoEntityModule.forRoot()
  ],
  declarations: []
})
export class StateModule { }