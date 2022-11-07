import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JournaleditComponent } from './journal/journaledit.component';
import { DisperrComponent } from './shared/disperr/disperr.component';

@NgModule({
  declarations: [
    AppComponent,
    JournaleditComponent,
    DisperrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
