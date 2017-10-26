import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';
import {getTranslationProviders} from "./i18n-providers";

if(environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule, getTranslationProviders(environment));
