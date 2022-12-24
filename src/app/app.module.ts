import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DecoupageModule } from './decoupage/decoupage.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DecoupageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
