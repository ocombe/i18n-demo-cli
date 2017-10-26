import {StaticProvider, TRANSLATIONS, TRANSLATIONS_FORMAT} from "@angular/core";
import {environment} from "./environments/environment";

declare const require;

interface EnvJitConfig {
  IS_AOT?: boolean,
  LOCALE_DATA?: {
    locale: string;
    i18nFile: string;
    i18nFormat: string;
  }
}

export function getTranslationProviders(env: EnvJitConfig | any): { providers: StaticProvider[] } {
  const PROVIDERS = [];

  // Providers are automatically setup by the AngularCompilerPlugin for AOT
  if(!env.IS_AOT && env.LOCALE_DATA && env.LOCALE_DATA.locale && env.LOCALE_DATA.locale !== 'en-US' && env.LOCALE_DATA.i18nFile && env.LOCALE_DATA.i18nFormat) {
    try {
      const translations = require(`raw-loader!./locale/${env.LOCALE_DATA.i18nFile}`);
      PROVIDERS.push(
        {provide: TRANSLATIONS, useValue: translations},
        {provide: TRANSLATIONS_FORMAT, useValue: env.LOCALE_DATA.i18nFormat}
      )
    } catch(e) {
      throw new Error(`Unable to load translations for locale ${env.LOCALE_DATA.locale}, please check that the file "${env.LOCALE_DATA.i18nFile}" exists`);
    }
  }

  return {providers: PROVIDERS};
}

export function getLocale(env: EnvJitConfig | any): string {
  if(env.LOCALE_DATA && env.LOCALE_DATA.locale) {
    return environment.LOCALE_DATA.locale;
  }

  return 'en-US';
}
