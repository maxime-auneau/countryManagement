import {Component} from '@angular/core';
import {Country} from "../../models/country.model";

@Component({
  selector: 'app-country-list.pages',
  templateUrl: './country-list.pages.component.html',
  styleUrls: ['./country-list.pages.component.scss']
})
export class CountryListPagesComponent {
  countries: Country[] = [];
  displayedCountries: Country[] = [];
  showAddCountryForm: boolean = false;
  country: Country = new Country(0, "", 0, "", "", 0, "");
  searchTerm: string = '';

  createCountry() {
    this.country.id = this.countries.length;
    this.countries.push(this.country);
    this.country = new Country(0, "", 0, "", "", 0, "");
    this.showAddCountryForm = false;
    this.updateDisplayedCountries();
  }

  updateDisplayedCountries(): void {
    if (this.searchTerm) {
      this.displayedCountries = this.countries.filter(country =>
        country.nom.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.displayedCountries = [...this.countries];
    }
  }

  updateFilteredCountries(searchTerm: string): void {
    this.searchTerm = searchTerm;
    this.updateDisplayedCountries();
  }

  updatedCountries({index, newCountry}: { index: number, newCountry: Country }): void {
    this.countries[index] = newCountry;
    this.updateDisplayedCountries();
  }
}
