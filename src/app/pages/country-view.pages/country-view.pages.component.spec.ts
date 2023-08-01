import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryViewPagesComponent } from './country-view.pages.component';

describe('CountryViewPagesComponent', () => {
  let component: CountryViewPagesComponent;
  let fixture: ComponentFixture<CountryViewPagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountryViewPagesComponent]
    });
    fixture = TestBed.createComponent(CountryViewPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
