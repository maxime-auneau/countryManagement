import {Component, Input, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Country} from "../../models/country.model";

@Component({
  selector: 'app-country-view.pages',
  templateUrl: './country-view.pages.component.html',
  styleUrls: ['./country-view.pages.component.scss']
})
export class CountryViewPagesComponent implements OnInit {
  country!: Country;
  title!: string;
  constructor(private location: Location) {}

  ngOnInit(): void {
    this.country = this.location.getState() as Country;
    this.title = this.country.nom;
  }
}
