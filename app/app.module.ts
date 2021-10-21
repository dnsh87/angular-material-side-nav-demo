import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    CoreModule,
    AppRoutingModule,
  ],
})
export class AppModule {}
