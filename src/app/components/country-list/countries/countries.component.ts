import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Country} from "../../../models/country.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent {
  countryIndex: number | null = null;
  showEditForm: boolean = false;
  countryOriginal!: Country;
  countryEdited: Country = new Country(0, "", 0, "", "", 0, "");

  @Input() countries: Country[] = [];
  @Output() countryEdit = new EventEmitter<{ index: number, newCountry: Country }>();

  constructor(private router: Router) {}

  openForm(country: Country, index: number): void {
    this.countryIndex = index;
    this.showEditForm = true;
    this.countryOriginal = {...country};
    this.countryEdited = {...country};
  };

  editCountry() {
    if (this.countryIndex !== null) {
      this.countryEdit.emit({index: this.countryEdited.id, newCountry: this.countryEdited});
      this.resetForm();
    }
  }

  cancelEdit() {
    this.showEditForm = false;
    this.countryIndex = null;
  }

  resetForm() {
    this.showEditForm = false;
    this.countryIndex = null;
    this.countryEdited = new Country(0, "", 0, "", "", 0, "");
  }

  viewCountry(country: Country) {
    console.log(country);
    localStorage.setItem("countries", JSON.stringify(this.countries));
    this.router.navigate(["country", country.nom], {state: country}).then(r => console.log(r));
  }

}
