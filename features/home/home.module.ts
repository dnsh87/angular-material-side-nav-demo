import { NgModule } from '@angular/core';

import { SharedModule } from 'app/shared';

import { HelloFrameworkModule } from './hello-framework';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    SharedModule,
    HelloFrameworkModule,
  ],
})
export class HomeModule {}
