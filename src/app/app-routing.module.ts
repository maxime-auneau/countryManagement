import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CountryListPagesComponent} from './pages/country-list.pages/country-list.pages.component';
import {CountryViewPagesComponent} from "./pages/country-view.pages/country-view.pages.component";

const routes: Routes = [
  {path: '', component: CountryListPagesComponent},
  {path: 'country/:name', component: CountryViewPagesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
