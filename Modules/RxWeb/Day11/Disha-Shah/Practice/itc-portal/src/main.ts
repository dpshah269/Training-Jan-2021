import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


import { bootstrapRxWebFramework } from '@rxweb/framework';
import { AppSpinner } from './app/domain/customize-design/spinner';
// import { BaseMultilingual } from './app/domain/customize-design/base-multilingual';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

bootstrapRxWebFramework({
  template: { 'rxSpinner': AppSpinner }
  // ,decorators:{multilingual: BaseMultilingual}
});