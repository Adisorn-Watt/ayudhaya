import { Injectable } from '@angular/core'
import { Package } from 'src/app/domain/package/package'
import { Country } from 'src/app/domain/country/country'

@Injectable({
  providedIn: 'root',
})
export class CentralStoreService {
  private selectedCountry: Country = {
    countryName: 'Germany',
    countryId: '01',
  }
  private selectedPackage: Package
  private selectedDate: {
    start: string
    end: string
  }

  constructor() {}

  getSelectedCountry(): Country {
    return this.selectedCountry
  }

  setSelectedCountry(country: Country): void {
    this.selectedCountry = country
  }

  getSelectedPackage(): Package {
    return this.selectedPackage
  }

  setSelectedPackage(p: Package): void {
    this.selectedPackage = p
  }

  getSelectedDate(): { start: string; end: string } {
    return this.selectedDate
  }

  setSelectedDate(start: string, end: string): void {
    this.selectedDate = { start, end }
  }
}
