import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule,
} from '@angular/material';
import { RouterModule } from '@angular/router';

import { AppLayoutComponent } from './app-layout.component';

@NgModule({
  declarations: [AppLayoutComponent],
  exports: [AppLayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
  ],
})
export class AppLayoutModule {}
