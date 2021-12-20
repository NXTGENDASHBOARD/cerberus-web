import { NgModule } from '@angular/core';
import { APP_COMPONENTS, APP_MODULES } from './app.imports';
import { SHARED_MODULES } from './shared/shared.import';
import { ThemeService } from './_services';


@NgModule({
  declarations: [
    APP_COMPONENTS,
   ],
  imports: [
    APP_MODULES,
    SHARED_MODULES
  ],
  providers: [ThemeService],
  bootstrap: [APP_COMPONENTS]
})
export class AppModule { }
