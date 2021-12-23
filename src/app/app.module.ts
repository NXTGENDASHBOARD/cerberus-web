import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { APP_COMPONENTS, APP_MODULES } from './app.imports';
import { SHARED_MODULES } from './shared/shared.import';
import { ErrorInterceptor, JwtInterceptor } from './_helpers';
import { ThemeService } from './_services';


@NgModule({
  declarations: [
    APP_COMPONENTS,
   ],
  imports: [
    APP_MODULES,
    SHARED_MODULES
  ],
  providers: [ThemeService, 
    // TODO: When we get to tokenization management with ITS 4.1 APi integration
    // { provide: APP_INITIALIZER, useFactory: appInitializer, multi: true, deps: [AccountService] },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [APP_COMPONENTS]
})
export class AppModule { }