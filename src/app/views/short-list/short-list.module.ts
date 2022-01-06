import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { declarations, ShortListRoutingModule } from './short-list-routing.module';
import { SharedModule } from 'src/app/shared';
import { StoreModule } from '@ngrx/store';
import { ShortlistEffects, shortlistFeatureKey, shortListReducer } from './store';
import { EffectsModule } from '@ngrx/effects';
import { ApplicationService } from 'src/app/_services';
import { ShortlistResolver } from './shortlist.resolver';

 

@NgModule({
  declarations: [
   ...declarations
  ],
  imports: [
    CommonModule,
    ShortListRoutingModule,
    SharedModule,
    StoreModule.forFeature(shortlistFeatureKey, shortListReducer),
    EffectsModule.forFeature([ShortlistEffects])
  ],
  providers: [ApplicationService,ShortlistResolver]
})
export class ShortListModule { }
