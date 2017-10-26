import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {TestComponent} from './test/test.component';
import {environment} from "../environments/environment";
import {getLocale} from "../i18n-providers";

export function localeFactory() {
  return getLocale(environment);
}

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {provide: LOCALE_ID, useFactory: localeFactory}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
