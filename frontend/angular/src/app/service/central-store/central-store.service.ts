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
  private user: any = {
    title: 'Mr.',
    firstName: 'Numlabyod',
    lastname: 'Reprakan',
    citizenId: '1799310717171',
    dateofBirth: '28 July 1998',
    beneficialy: 'Ms. Anchisa Tea',
    mobileNumber: '0980159795',
    email: 'nearreann@gmail.com',
    fromBankName: 'Everyday',
    fromBankNo: '1234xxxx9012',
    fromBankBalance: '50,000.00',
    packagePrice: '2328.12',
  }

  constructor() {}

  getUser(): number {
    return this.user
    // return this.mockCost
  }

  setUser(user: any): void {
    this.user = user
  }

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
