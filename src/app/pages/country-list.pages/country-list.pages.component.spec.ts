import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryListPagesComponent } from './country-list.pages.component';

describe('CountryListPagesComponent', () => {
  let component: CountryListPagesComponent;
  let fixture: ComponentFixture<CountryListPagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountryListPagesComponent]
    });
    fixture = TestBed.createComponent(CountryListPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
