import { Component, OnInit } from '@angular/core'
import { CentralStoreService } from 'src/app/service/central-store/central-store.service'
import { Router } from '@angular/router'
import { CountryService } from 'src/app/service/country/country.service'
import { Country } from 'src/app/domain/country/country'
import { PackageService } from 'src/app/service/package/package.service'
import { Package } from 'src/app/domain/package/package'
import { CalculateCostService } from 'src/app/service/calculate-cost/calculate-cost.service'

@Component({
  selector: 'app-main-insurance',
  templateUrl: './main-insurance.component.html',
  styleUrls: ['./main-insurance.component.scss'],
})
export class MainInsuranceComponent implements OnInit {
  selectedCountry: Country
  selectedDate: { start: string; end: string }
  toSummary = false
  countries: Country[] = []
  packages: Package[] = []

  constructor(
    private centralStore: CentralStoreService,
    private router: Router,
    public countryService: CountryService,
    public packageService: PackageService
  ) {}

  ngOnInit(): void {
    this.countryService.getAllCountries().subscribe((c) => {
      this.countries = c
    })
  }

  gotoInsurance(): void {
    this.toSummary = false
  }

  gotoSummary(): void {
    this.toSummary = true
  }

  handleCountryCard(e: any): void {
    this.selectedCountry = e
    this.packageService.getPackageByCountryId(e.countryId).subscribe((p) => (this.packages = p))
  }

  handleDateChange(e: any): void {
    this.selectedDate = e
  }

  confirmInsurance(): void {
    if (this.canProceed) {
      this.centralStore.setSelectedCountry(this.selectedCountry)
      this.centralStore.setSelectedDate(this.selectedDate.start, this.selectedDate.end)
      this.router.navigateByUrl('/traveller')
    } else {
      alert('Internal Error')
    }
  }

  get canProceed() {
    return this.selectedCountry && this.selectedDate && this.selectedDate.start && this.selectedDate.end
  }
}
