import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ShipmentsComponent } from './home-page/shipments/shipments.component';
import { PostOfficesComponent } from './home-page/post-offices/post-offices.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ShipmentsComponent,
    PostOfficesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
