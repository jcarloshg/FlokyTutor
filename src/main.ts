import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

import { Amplify } from 'aws-amplify';
import { DataStore } from '@aws-amplify/datastore';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);
DataStore.configure(aws_exports);
// (async () => { await DataStore.start(); })();