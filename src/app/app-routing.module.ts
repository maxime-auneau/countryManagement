import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CountryListPagesComponent} from './pages/country-list.pages/country-list.pages.component';

const routes: Routes = [
  {path: '', component: CountryListPagesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
