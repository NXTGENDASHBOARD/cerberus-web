import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { APP_COMPONENTS, APP_MODULES } from './app.imports';
import { SHARED_MODULES } from './shared/shared.import';
import { ErrorInterceptor, JwtInterceptor } from './_helpers';
import { ThemeService } from './_services';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { NgApexchartsModule } from 'ng-apexcharts';
import { metaReducers, reducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [APP_COMPONENTS],
  imports: [
    APP_MODULES,
    EffectsModule.forRoot([]),
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      },
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    SHARED_MODULES,
    NgApexchartsModule,
  ],
  providers: [
    ThemeService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [APP_COMPONENTS],
})
export class AppModule {}
