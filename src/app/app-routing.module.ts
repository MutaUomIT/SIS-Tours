import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./views/home/home.component";
import {PackagesComponent} from "./views/packages/packages.component";
import {LeisureComponent} from "./views/leisure/leisure.component";
import {AboutLankaComponent} from "./views/about-lanka/about-lanka.component";
import {TestimonialsComponent} from "./views/testimonials/testimonials.component";
import {AboutSisComponent} from "./views/about-sis/about-sis.component";
import {ContactsComponent} from "./views/contacts/contacts.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'packages/:id', component: PackagesComponent },
  { path: 'leisure', component: LeisureComponent },
  { path: 'about-lanka', component: AboutLankaComponent },
  { path: 'testimonials', component: TestimonialsComponent },
  { path: 'about-us', component: AboutSisComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes,{useHash : true}) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
