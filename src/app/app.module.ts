import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { PackagesComponent } from './views/packages/packages.component';
import { LeisureComponent } from './views/leisure/leisure.component';
import { AboutLankaComponent } from './views/about-lanka/about-lanka.component';
import { AboutSisComponent } from './views/about-sis/about-sis.component';
import { ContactsComponent } from './views/contacts/contacts.component';
import { FormsModule } from "@angular/forms";
import { PackageListComponent } from './views/packages/package-list/package-list.component';
import { NgSelectModule, NG_SELECT_DEFAULT_CONFIG } from "@ng-select/ng-select";
import { MailSendingService } from './services/mail-sending.service';
import { MsgPopupService } from './services/msg-popup.service';
import { CommonModule, DatePipe } from '@angular/common';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { SendInquiryComponent } from './views/send-inquiry/send-inquiry.component';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PackagesComponent,
    LeisureComponent,
    AboutLankaComponent,
    AboutSisComponent,
    ContactsComponent,
    PackageListComponent,
    SendInquiryComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgSelectModule,
    Ng4LoadingSpinnerModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [
    DatePipe,
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
