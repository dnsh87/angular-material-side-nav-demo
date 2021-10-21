import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent, HomeModule } from 'features/home';

import { AppLayoutComponent, AppLayoutModule } from './app-layout';

const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: 'home', component: HomeComponent },
    ],
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [
    AppLayoutModule,
    HomeModule,
    RouterModule.forRoot(routes),
  ],
})
export class AppRoutingModule {}
