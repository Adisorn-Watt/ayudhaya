import { Injectable } from '@angular/core';
import { Package } from 'src/app/domain/package/package';
import { Country } from 'src/app/domain/country/country';

@Injectable({
  providedIn: 'root'
})
export class CentralStoreService {

  private selectedCountry: Country = { countryName: "Germany", countryId: "01" };
  private selectedPackage: Package;
  private selectedDate: {
    start: string,
    end: string,
  }

  constructor() { }

  getSelectedCountry() {
    return this.selectedCountry;
  }

  setSelectedCountry(country: Country) {
    this.selectedCountry = country
  }

  getSelectedPackage() {
    return this.selectedPackage;
  }

  setSelectedPackage(p: Package) {
    this.selectedPackage = p;
  }

  getSelectedDate() {
    return this.selectedDate;
  }

  setSelectedDate(start: string, end: string) {
    this.selectedDate.start = start;
    this.selectedDate.end = end;
  }


}
