import { Injectable } from '@angular/core'
import { Package } from 'src/app/domain/package/package'
import { Country } from 'src/app/domain/country/country'
import { Traveller } from 'src/app/domain/traveller/traveller'

@Injectable({
  providedIn: 'root',
})
export class CentralStoreService {
  private selectedCountry: Country
  private selectedPackage: Package
  private selectedDate: {
    start: string
    end: string
  }
  private userInfo: Traveller
  private costPerPerson: number

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

  getUserInfo(): Traveller {
    return this.userInfo
  }

  setUserInfo(t: Traveller): void {
    this.userInfo = t
  }

  setCostPerPerson(c: any): void {
    this.costPerPerson = c
  }

  getCostPerPerson(): any {
    return this.costPerPerson
  }
}
