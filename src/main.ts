import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import {ChankyaAppModule} from './app/app.module';
import {environment} from './environments/environment';

Amplify.configure(awsconfig);
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(ChankyaAppModule);






