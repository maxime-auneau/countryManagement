import {Component, OnInit} from '@angular/core';
import {Country} from "../../models/country.model";
import {DataExportService} from "../../services/data-export.service";

@Component({
  selector: 'app-country-list.pages',
  templateUrl: './country-list.pages.component.html',
  styleUrls: ['./country-list.pages.component.scss']
})
export class CountryListPagesComponent implements OnInit {
  countries: Country[] = [
    new Country(0, "France", 67000000, "555 695 km²", "Europe", 640679, "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png"),
    new Country(1, "Allemagne", 83000000, "357 588 km²", "Europe", 357386, "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png"),
    new Country(2, "Espagne", 47000000, "505 990 km²", "Europe", 505990, "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/1200px-Flag_of_Spain.svg.png"),
    new Country(3, "Italie", 60000000, "302 073 km²", "Europe", 301340, "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/1200px-Flag_of_Italy.svg.png"),
    new Country(4, "Portugal", 10000000, "92 152 km²", "Europe", 92212, "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/1200px-Flag_of_Portugal.svg.png"),
    new Country(5, "Belgique", 11000000, "30 688 km²", "Europe", 30528, "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Belgium.svg/1200px-Flag_of_Belgium.svg.png"),
    new Country(6, "Suisse", 8000000, "41 285 km²", "Europe", 41285, "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Switzerland.svg/1200px-Flag_of_Switzerland.svg.png"),
    new Country(7, "Royaume-Uni", 66000000, "130 279 km²", "Europe", 242495, "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png"),
    new Country(8, "Pays-Bas", 17000000, "41 850 km²", "Europe", 41526, "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/1200px-Flag_of_the_Netherlands.svg.png"),
    new Country(9, "Luxembourg", 600000, "2 586 km²", "Europe", 2586, "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Flag_of_Luxembourg.svg/1200px-Flag_of_Luxembourg.svg.png"),
    new Country(10, "Danemark", 6000000, "42 952 km²", "Europe", 43094, "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/1200px-Flag_of_Denmark.svg.png"),
  ];
  displayedCountries: Country[] = [];
  showAddCountryForm: boolean = false;
  country: Country = new Country(0, "", 0, "", "", 0, "");
  searchTerm: string = '';

  constructor(private dataExportService: DataExportService) {
  }

  createCountry() {
    this.country.id = this.countries.length;
    this.countries.push(this.country);
    localStorage.setItem('countries', JSON.stringify(this.countries));
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
    localStorage.setItem('countries', JSON.stringify(this.countries));
    this.updateDisplayedCountries();
  }

  ngOnInit(): void {
    if (localStorage.getItem('countries')) {
      this.countries = JSON.parse(localStorage.getItem('countries') as string);
      this.updateDisplayedCountries();
    } else {
      localStorage.setItem('countries', JSON.stringify(this.countries));
      this.countries = JSON.parse(localStorage.getItem('countries') as string);
      this.updateDisplayedCountries();
    }
  }

  exportData(): void {
    this.dataExportService.downloadFile(this.countries, 'countries');
  }
}
