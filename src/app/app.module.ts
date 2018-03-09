import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { PackagesComponent } from './views/packages/packages.component';
import { LeisureComponent } from './views/leisure/leisure.component';
import { AboutLankaComponent } from './views/about-lanka/about-lanka.component';
import { TestimonialsComponent } from './views/testimonials/testimonials.component';
import { AboutSisComponent } from './views/about-sis/about-sis.component';
import { ContactsComponent } from './views/contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PackagesComponent,
    LeisureComponent,
    AboutLankaComponent,
    TestimonialsComponent,
    AboutSisComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
