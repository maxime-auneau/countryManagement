import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CountryListPagesComponent} from './pages/country-list.pages/country-list.pages.component';
import {CountriesComponent} from './components/country-list/countries/countries.component';
import {FormsModule} from "@angular/forms";
import {NgOptimizedImage} from "@angular/common";
import { CountryViewPagesComponent } from './pages/country-view.pages/country-view.pages.component';
import { ViewHeaderComponent } from './components/country/view-header/view-header.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryListPagesComponent,
    CountriesComponent,
    CountryViewPagesComponent,
    ViewHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
