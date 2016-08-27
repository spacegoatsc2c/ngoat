// Imports for loading & configuring the in-memory web api
import { enableProdMode } from '@angular/core';
import { AppModule, environment } from './app/';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
