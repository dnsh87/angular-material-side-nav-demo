import { NgModule } from '@angular/core';

import { MaterialModule, SharedModule } from 'app/shared';

import { HelloFrameworkComponent } from './hello-framework.component';

@NgModule({
  declarations: [HelloFrameworkComponent],
  exports: [HelloFrameworkComponent],
  imports: [
    SharedModule,
    MaterialModule,
  ],
})
export class HelloFrameworkModule {}
