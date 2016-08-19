// Imports for loading & configuring the in-memory web api
import { XHRBackend } from '@angular/http';

import { InMemoryBackendService,
         SEED_DATA }  from 'angular2-in-memory-web-api';
import { OfflineData }   from './app/offline-data';

import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import {bootstrap} from '@angular/platform-browser-dynamic'
import { HTTP_PROVIDERS } from '@angular/http';

import { UserService } from './app/user.service';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
    HTTP_PROVIDERS,
    UserService,
    { provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem server
    { provide: SEED_DATA,  useClass: OfflineData },
    ]);
