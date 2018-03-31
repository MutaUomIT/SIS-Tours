import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { PackagesComponent } from './views/packages/packages.component';
import { LeisureComponent } from './views/leisure/leisure.component';
import { AboutLankaComponent } from './views/about-lanka/about-lanka.component';
import { TestimonialsComponent } from './views/testimonials/testimonials.component';
import { AboutSisComponent } from './views/about-sis/about-sis.component';
import { ContactsComponent } from './views/contacts/contacts.component';
import {FormsModule} from "@angular/forms";
import { PackageListComponent } from './views/packages/package-list/package-list.component';
import {NgSelectModule, NG_SELECT_DEFAULT_CONFIG} from "@ng-select/ng-select";
import { MailSendingService } from './services/mail-sending.service';
import { MsgPopupService } from './services/msg-popup.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PackagesComponent,
    LeisureComponent,
    AboutLankaComponent,
    TestimonialsComponent,
    AboutSisComponent,
    ContactsComponent,
    PackageListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgSelectModule
  ],
  providers: [
    MailSendingService,
    MsgPopupService,
    {
      provide: NG_SELECT_DEFAULT_CONFIG,
      useValue: {
        notFoundText: 'Custom not found'
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
